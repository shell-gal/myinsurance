$(function() {
	queryheNulear();
	querymeNulear();
	queryoNulear();
	querypNulear();
	quertLossMassahe();
});
	

// 查询信息
function queryheNulear() {
	//根据id为get_reported_number取得文本框的值
	var tj=$("#get_reported_number").val();
	//ajax前后端传值
	$.ajax({
		//路径url
		url : "http://localhost:8080/getNuclear/queryheLose.do",
		//传值type
		type : "get",
		//参数data
		data : {'reported_number':tj},
		//contentType
		contentType : "application/json;charset=utf-8",
		//返回类型dataType
		dataType : "json",
		//成功
		success : function(data) {
			//对方车损信息查询
			var heHtml = "";
			//加入tr的循环，singerData
			$.each(data.singerData,function(i, r) {
				heHtml +="<tr>"
					   +"<td>"+r.carhe_condition_info.condition_info_name+"</td>"
					   +"<td>"+r.carhe_condition_info.loss_number+"</td>"
					   +"<td>"+r.carhe_condition_info.loss_assessment_price+"</td>"
					   +"<td>"+r.carhe_condition_info.maintenance_point+"</td>"
					   
					   +"<td>"+r.carhe_condition_info.loss_assessment_sum+"</td>"
					   +"</tr>"
				});
			$("#anjianliebiao1 #tr1").after(heHtml);	
		}
		});
	}
	
	
	// 查询信息
	function querymeNulear() {
		var tj=$("#get_reported_number").val();
		$.ajax({
			url : "http://localhost:8080/getNuclear/querymeLose.do",
			type : "get",
			data : {'reported_number':tj},
			contentType : "application/json;charset=utf-8",
			dataType : "json",
			success : function(data) {
			//我方车损信息查询
			var meHtml = "";
			$.each(data.singerData, function(i, r) {
				meHtml +="<tr>"
					   +"<td>"+r.carme_condition_info.condition_info_name+"</td>"
					   +"<td>"+r.carme_condition_info.loss_number+"</td>"
					   +"<td>"+r.carme_condition_info.loss_assessment_price+"</td>"
					   +"<td>"+r.carme_condition_info.maintenance_point+"</td>"
					 
					   +"<td>"+r.carme_condition_info.loss_assessment_sum+"</td>"
					   +"</tr>"
				});
			$("#anjianliebiao2 #tr2").after(meHtml);
			}
		});
	}
		// 查询信息
		function queryoNulear() {
			var tj=$("#get_reported_number").val();
			$.ajax({
				url : "http://localhost:8080/getNuclear/queryoLose.do",
				type : "get",
				data : {'reported_number':tj},
				contentType : "application/json;charset=utf-8",
				dataType : "json",
				success : function(data) {
			//物损信息查询
			var oHtml = "";
			$.each(data.singerData, function(i, r) {
				oHtml +="<tr>"
					   +"<td>"+r.object_condition_info.object_info_name+"</td>"
					   +"<td>"+r.object_condition_info.loss_number+"</td>"
					   +"<td>"+r.object_condition_info.price+"</td>"
					   +"<td>"+r.object_condition_info.compensate+"</td>"
					 
					   +"<td>"+r.object_condition_info.loss_assessment_sum+"</td>"
					   +"</tr>"
			});
			$("#anjianliebiao3 #tr3").after(oHtml);
				}
		});
	}
			// 查询信息
			function querypNulear() {
				var tj=$("#get_reported_number").val();
				$.ajax({
					url : "http://localhost:8080/getNuclear/querypLose.do",
					type : "get",
					data : {'reported_number':tj},
					contentType : "application/json;charset=utf-8",
					dataType : "json",
					success : function(data) {
			//人损信息查询
			var pHtml = "";
			$.each(data.singerData, function(i, r) {
				pHtml +="<tr>"
					   +"<td>"+r.people_condition_info.wounded_name+"</td>"
					   +"<td>"+r.people_condition_info.wounded_money+"</td>"
					   +"<td>"+r.people_condition_info.wounded_site+"</td>"
					   +"<td>"+r.people_condition_info.subtotal_costs+"</td>"
					   +"</tr>"
				});
			$("#anjianliebiao4 #tr4").after(pHtml);
		},
		error : function() {
		}
	});
}


//核赔退回处理
function updRep(){
	var reported_number=$("#baoanbianhao").val();
	$.ajax({
		url : "http://localhost:8080/getNuclear/updRep.do",
		type : "get",
		data : {"reported_number":reported_number},
		contentType : "application/json;charset=utf-8",
		dataType : "json",
		success : function(data) {
			alert(data.result);
		},
		error : function() {
			alter("系统错误……请联系管理员");
		}
	});
	window.history.back(-1);
}

//核赔提交管理
function at(){
	var tj=$("#get_reported_number").val();
	var zt=$("#case_stateinfo").val();
$.ajax({
	url:"http://localhost:8080/getNuclear/updlose.do",
	type:"get",
	data:{
		'case_state':zt,
		'reported_number':tj
	},
	dataType : "json",
	success : function(data) {
		alert("修改成功！");
		window.location.replace("../settle_lh/settle.jsp?reported_number="+tj+"&case_state="+zt+"");
	}
});
      window.history.back(-1);
}

function quertLossMassahe(){
	$.ajax({
		url : "http://localhost:8080/getNuclear/queryLossMassage.do",
		type : "get",
		data : {"reported_number":$("#get_reported_number").val()},
		contentType : "application/json;charset=utf-8",
		dataType : "json",
		success : function(data) {
			$("#carhe_img").val(data.singerData.losscar_he_img);
			$("#carhe_receipts").val(data.singerData.losscar_he_receipts);
			$("#carme_img").val(data.singerData.losscar_me_receipts);
			$("#carme_receipts").val(data.singerData.losscar_me_receipts);
			$("#goods_img").val(data.singerData.loss_goods_img);
			$("#goods_receipts").val(data.singerData.loss_goods_receipts);
			$("#people_img").val(data.singerData.loss_people_img);
			$("#people_receipts").val(data.singerData.loss_people_receipts);
			
		},
		error : function() {
			alter("系统错误……请联系管理员");
		}
	});

	$(".loss_btn").click(function(){
		var lossfile = $(this).next().val();
		var local = "http://localhost:8080/getNuclear/download.do?lossfile="+lossfile;
		location.href=local;
	});
}

