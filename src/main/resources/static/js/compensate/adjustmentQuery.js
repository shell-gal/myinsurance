$(function() {
	queryheAdjustment();
	querymeAdjustment();
	queryoAdjustment();
	querypAdjustment();
	$("#ProspectInfo").click(function(){
		var flag=false;
		var file=$("input[type='file']");
		$.each(file,function() {
			if($(this).val()==""){
				flag=true;
				return false;
			}	
		});
		if(flag){
			alert("当前还有文件未上传！");
			return;
		}
		$.ajax({
			url : "http://localhost:8080/getAdjustment/getSession.do",
			type : "get",
			data : {'reported_number':$("#get_reported_number").val()},
			success:function(data) {
				alert("成功");
				$("#fileUpoload").click();
			},
			error : function() {
				alert("系统故障")
			}
			});
		
		
	})
});
	

// 查询信息
function queryheAdjustment() {
	var tj=$("#get_reported_number").val();
	$.ajax({
		url : "http://localhost:8080/getAdjustment/queryheAdjustment.do",
		type : "get",
		data : {'reported_number':tj},
		contentType : "application/json;charset=utf-8",
		dataType : "json",
		success : function(data) {
			//对方车损信息查询
			var heHtml = "";
			$.each(data.singerData,function(i, r) {
				heHtml +="<tr>"
					   +"<td>"+r.condition_info_name+"</td>"
					   +"<td>"+r.loss_number+"</td>"
					   +"<td>"+r.loss_assessment_price+"</td>"
					   +"<td>"+r.maintenance_point+"</td>"
	
					   +"<td>"+r.loss_assessment_sum+"</td>"
					   +"</tr>"
				});
			$("#anjianliebiao1 #tr1").after(heHtml);	
		}
		});
	}
	
	
	// 查询信息
	function querymeAdjustment() {
		var tj=$("#get_reported_number").val();
		$.ajax({
			url : "http://localhost:8080/getAdjustment/querymeAdjustment.do",
			type : "get",
			data : {'reported_number':tj},
			contentType : "application/json;charset=utf-8",
			dataType : "json",
			success : function(data) {
			//我方车损信息查询
			var meHtml = "";
			$.each(data.singerData, function(i, r) {
				meHtml +="<tr>"
					   +"<td>"+r.condition_info_name+"</td>"
					   +"<td>"+r.loss_number+"</td>"
					   +"<td>"+r.loss_assessment_price+"</td>"
					   +"<td>"+r.maintenance_point+"</td>"

					   +"<td>"+r.loss_assessment_sum+"</td>"
					   +"</tr>"
				});
			$("#anjianliebiao2 #tr2").after(meHtml);
			}
		});
	}
		// 查询信息
		function queryoAdjustment() {
			var tj=$("#get_reported_number").val();
			$.ajax({
				url : "http://localhost:8080/getAdjustment/queryoAdjustment.do",
				type : "get",
				data : {'reported_number':tj},
				contentType : "application/json;charset=utf-8",
				dataType : "json",
				success : function(data) {
			//物损信息查询
			var oHtml = "";
			$.each(data.singerData, function(i, r) {
				oHtml +="<tr>"
					   +"<td>"+r.object_info_name+"</td>"
					   +"<td>"+r.loss_number+"</td>"
					   +"<td>"+r.price+"</td>"
					   +"<td>"+r.compensate+"</td>"
	
					   +"<td>"+r.loss_assessment_sum+"</td>"
					   +"</tr>"
			});
			$("#anjianliebiao3 #tr3").after(oHtml);
				}
		});
	}
			// 查询信息
			function querypAdjustment() {
				var tj=$("#get_reported_number").val();
				$.ajax({
					url : "http://localhost:8080/getAdjustment/querypAdjustment.do",
					type : "get",
					data : {'reported_number':tj},
					contentType : "application/json;charset=utf-8",
					dataType : "json",
					success : function(data) {
			//人损信息查询
			var pHtml = "";
			$.each(data.singerData, function(i, r) {
				pHtml +="<tr>"
					   +"<td>"+r.wounded_name+"</td>"
					   +"<td>"+r.wounded_money+"</td>"
					   +"<td>"+r.wounded_site+"</td>"
					   +"<td>"+r.subtotal_costs+"</td>"
					   +"</tr>"
				});
			$("#anjianliebiao4 #tr4").after(pHtml);
		},
		error : function() {
		}
	});
}



//理算提交管理
function at(){
	var tj=$("#get_reported_number").val();
	var zt=$("#case_stateinfo").val();
$.ajax({
	url:"http://localhost:8080/getAdjustment/updAdjustment.do",
	type:"get",
	data:{
		'case_state':zt,
		'reported_number':tj
	},
	dataType : "json",
	success : function(data) {
		alert("修改成功！");
		window.location.replace("../Nuclear_cq/Nuclear.jsp?reported_number="+tj+"&case_state="+zt+"");
	}
});


}



