$(function() {
	//查询他方定损信息
	queryhelose();
	//查询我方定损信息
	querymelose();
	//查询物损定损信息
	queryolose();
	//查询人伤定损信息
	queryplose();
	//id为th点击事件
	$("#th").click(function(){
		//使用window.location.replace转页面
		window.location.replace("../../page/prospect_lyt/loss_info.jsp");
	});
});


function queryhelose() {
	//获取id为get_reported_number的值
	var tj=$("#get_reported_number").val();
	//ajax
	$.ajax({
		//路径
		url : "http://localhost:8080/lose/queryheLose.do",
		//类型
		type : "get",
		//参数
		data : {'reported_number':tj},
		//字体编码
		contentType : "application/json;charset=utf-8",
		//字体类型
		dataType : "json",
		//成功执行
		success : function(data) {
			// 创建’他方‘对象为用于拼接，值为空
			var heHtml = "";
			//使用each遍历，参数为data.singerData
			$.each(data.singerData,function(i, r) {
				//拼接
				heHtml +="<tr>"
					   +"<td>"+r.carhe_condition_info.condition_info_name+"</td>"
					   +"<td>"+r.carhe_condition_info.loss_number+"</td>"
					   +"<td>"+r.carhe_condition_info.loss_assessment_price+"</td>"
					   +"<td>"+r.carhe_condition_info.maintenance_point+"</td>"
					   +"<td>"+r.carhe_condition_info.loss_assessment_sum+"</td>"
					   +"</tr>"
				});
			//将heHtml拼接到id为other里
			$("#other").append(heHtml);
		}
		});
	}
	
	
	
	function querymelose() {
		//获取id为get_reported_number的值
		var tj=$("#get_reported_number").val();
		//ajax
		$.ajax({
			//路径
			url : "http://localhost:8080/lose/querymeLose.do",
			//类型
			type : "get",
			//参数
			data : {'reported_number':tj},
			//字体编码
			contentType : "application/json;charset=utf-8",
			//字体类型
			dataType : "json",
			//成功执行
			success : function(data) {
			//我方车损信息查询
			var meHtml = "";
			//使用each遍历，参数为data.singerData
			$.each(data.singerData, function(i, r) {
				// 拼接
				meHtml +="<tr>"
					   +"<td>"+r.carme_condition_info.condition_info_name+"</td>"
					   +"<td>"+r.carme_condition_info.loss_number+"</td>"
					   +"<td>"+r.carme_condition_info.loss_assessment_price+"</td>"
					   +"<td>"+r.carme_condition_info.maintenance_point+"</td>"
					  
					   +"<td>"+r.carme_condition_info.loss_assessment_sum+"</td>"
					   +"</tr>"
				});
			//将meHtml拼接到id为mecar里
			$("#mecar").append(meHtml);
			}
		});
	}
		
		function queryolose() {
			//获取id为get_reported_number的值
			var tj=$("#get_reported_number").val();
			//ajax
			$.ajax({
				//路径
				url : "http://localhost:8080/lose/queryoLose.do",
				//类型
				type : "get",
				//参数
				data : {'reported_number':tj},
				//字体编码
				contentType : "application/json;charset=utf-8",
				//参数类型
				dataType : "json",
				//成功执行
				success : function(data) {
					// 创建’物损‘对象为用于拼接，值为空
			var oHtml = "";
			//使用each遍历，参数为data.singerData
			$.each(data.singerData, function(i, r) {
				//拼接
				oHtml +="<tr>"
					   +"<td>"+r.object_condition_info.object_info_name+"</td>"
					   +"<td>"+r.object_condition_info.loss_number+"</td>"
					   +"<td>"+r.object_condition_info.price+"</td>"
					   +"<td>"+r.object_condition_info.compensate+"</td>"
			
					   +"<td>"+r.object_condition_info.loss_assessment_sum+"</td>"
					   +"</tr>"
			});
			//将oHtml拼接到id为o里
			$("#o").append(oHtml);
				}
		});
	}
			
			function queryplose() {
				//获取id为get_reported_number的值
				var tj=$("#get_reported_number").val();
				//ajax
				$.ajax({
					//路径
					url : "http://localhost:8080/lose/querypLose.do",
					//类型
					type : "get",
					//参数
					data : {'reported_number':tj},
					//字体编码
					contentType : "application/json;charset=utf-8",
					//参数类型
					dataType : "json",
					//成功执行
					success : function(data) {
						// 创建’人伤‘对象为用于拼接，值为空
			var pHtml = "";
			//使用each遍历，参数为data.singerData
			$.each(data.singerData, function(i, r) {
				//拼接
				pHtml +="<tr>"
					   +"<td>"+r.people_condition_info.wounded_name+"</td>"
					   +"<td>"+r.people_condition_info.wounded_money+"</td>"
					   +"<td>"+r.people_condition_info.wounded_site+"</td>"
					   +"<td>"+r.people_condition_info.subtotal_costs+"</td>"
					   +"</tr>"
				});
			//将pHtml拼接到id为p里
			$("#p").append(pHtml);
		},
		//失败执行
		error : function() {
		}
	});
}

function tjhs(){
		var tj=$("#get_reported_number").val();
		var zt=$("#case_stateinfo").val();
	$.ajax({
		url:"http://localhost:8080/lose/updlose.do",
		type:"get",
		data:{
			'case_state':zt,
			'reported_number':tj
		},
		dataType : "json",
		success : function(data){
			alert("操作成功！");
			window.location.replace("../../page/prospect_lyt/loss_info.jsp");
		}
	});
}

