$(function() {
	//查询他方核损
	queryhecompensate();
	//查询我方核损
	querymecompensate();
	//查询物损信息
	queryocompensate();
	//查询人伤信息
	querypcompensate();
});


function queryhecompensate() {
	//获取id为get_compensate_reported_number的值
	var getcompensate = $("#get_compensate_reported_number").val();
	//ajax
	$.ajax({
		//路径
		url : "http://localhost:8080/CompensateQuery/queryhecompensate.do",
		//类型
		type : "get",
		//参数
		data : {
			'reported_number' : getcompensate
		},
		//字体编码
		contentType : "application/json;charset=utf-8",
		//字体类型为json
		dataType : "json",
		//成功执行
		success : function(data) {
			// 创建’他方‘对象为用于拼接，值为空
			var heHtml = "";
			//使用each遍历，参数为data.singerData
			$.each(data.singerData, function(i, r) {
				//获取他方车损图片
				var file = r.carhe_condition_info.loss_picture;
				//拼接
				heHtml += "<tr>" + "<td>"
						+ r.carhe_condition_info.condition_info_name + "</td>"
						+ "<td>" + r.carhe_condition_info.loss_number + "</td>"
						+ "<td>" + r.carhe_condition_info.loss_assessment_price
						+ "</td>" + "<td>"
						+ r.carhe_condition_info.maintenance_point + "</td>"
						+ "<td> <input type='button' value='下载' class='down_btn' onclick='down(\""+file+"\")'/>" 
						+ "</td>" + "<td>"
						+ r.carhe_condition_info.loss_assessment_sum + "</td>"
						+ "</tr>"
			});
			//将heHtml拼接到id为other里
			$("#other").append(heHtml);
		},
		//失败则执行
		error : function() {
		}
	});
}
function querymecompensate() {
	//获取id为get_compensate_reported_number的值
	var getcompensate = $("#get_compensate_reported_number").val();
	//ajax
	$.ajax({
		//路径
		url : "http://localhost:8080/CompensateQuery/querymecompensate.do",
		//类型
		type : "get",
		//参数
		data : {
			'reported_number' : getcompensate
		},
		//字体编码
		contentType : "application/json;charset=utf-8",
		//字体格式
		dataType : "json",
		//成功执行
		success : function(data) {
			// 创建’我方‘对象为用于拼接，值为空
			var meHtml = "";
			//使用each遍历，参数为data.singerData
			$.each(data.singerData, function(i, r) {
				//获取我方车损图片
				var file = r.carme_condition_info.loss_picture;
				meHtml += "<tr>" 
						+ "<td>"+ r.carme_condition_info.condition_info_name + "</td>"
						+ "<td>" + r.carme_condition_info.loss_number + "</td>"
						+ "<td>" + r.carme_condition_info.loss_assessment_price+ "</td>" 
						+ "<td>"+ r.carme_condition_info.maintenance_point + "</td>"
						+ "<td><input type='button' value='下载' class='down_btn' onclick='down(\""+file+"\")'/></td>"
						+ "<td>" + r.carme_condition_info.loss_assessment_sum+ "</td>" 
						+ "</tr>"
			});
			//将meHtml拼接到id为mecar里
			$("#mecar").append(meHtml);
		},
		//失败则执行
		error : function() {
		}
	});
}
function queryocompensate() {
	//获取id为get_compensate_reported_number的值
	var getcompensate = $("#get_compensate_reported_number").val();
	//ajax
	$.ajax({
		//路径
		url : "http://localhost:8080/CompensateQuery/queryocompensate.do",
		//类型
		type : "get",
		//参数
		data : {
			'reported_number' : getcompensate
		},
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
				//获取物损车损图片
				var file = r.object_condition_info.loss_picture;
				//拼接
				oHtml += "<tr>" + "<td>"
						+ r.object_condition_info.object_info_name + "</td>"
						+ "<td>" + r.object_condition_info.loss_number
						+ "</td>" + "<td>" + r.object_condition_info.price
						+ "</td>" + "<td>" + r.object_condition_info.compensate
						+ "</td>" + "<td>"
						+ "<input type='button' value='下载' class='down_btn' onclick='down(\""+file+"\")'/>"  + "</td>"
						+ "<td>" + r.object_condition_info.loss_assessment_sum
						+ "</td>" + "</tr>"
			});
			//将oHtml拼接到id为o里
			$("#o").append(oHtml);
		},
		//失败则执行
		error : function() {
		}
	});
}
function querypcompensate() {
	//获取id为get_compensate_reported_number的值
	var getcompensate = $("#get_compensate_reported_number").val();
	//ajax
	$.ajax({
		//路径
		url : "http://localhost:8080/CompensateQuery/querypcompensate.do",
		//类型
		type : "get",
		//参数
		data : {
			'reported_number' : getcompensate
		},
		//字体编码
		contentType : "application/json;charset=utf-8",
		//字体格式
		dataType : "json",
		//成功执行
		success : function(data) {
			// 创建’人伤‘对象为用于拼接，值为空
			var pHtml = "";
			//使用each遍历，参数为data.singerData
			$.each(data.singerData, function(i, r) {
				//拼接
				pHtml += "<tr>" + "<td>" + r.people_condition_info.wounded_name
						+ "</td>" + "<td>"
						+ r.people_condition_info.wounded_money + "</td>"
						+ "<td>" + r.people_condition_info.wounded_site
						+ "</td>" + "<td>"
						+ r.people_condition_info.subtotal_costs + "</td>"
						+ "</tr>"
			});
			//将pHtml拼接到id为p里
			$("#p").append(pHtml);

		},
		//失败则执行
		error : function() {
		}
	});
}
//提交理算
function tjls(){
	//获取id为get_compensate_reported_number的值
	var tj=$("#get_compensate_reported_number").val();
	//获取id为case_stateinfo的值
	var zt=$("#case_stateinfo").val();
	//ajax
$.ajax({
	//路径
	url:"http://localhost:8080/CompensateQuery/updcompensate.do",
	//类型
	type:"get",
	//参数
	data:{
		'case_state':zt,
		'reported_number':tj
	},
	//字体类型
	dataType : "json",
	//成功执行
	success : function(data){
		alert("操作成功！");
		//使用window.location.replace转页面
		window.location.replace("hesun_info.jsp");
	}
});
}
//下载
function down(data){
	//使用location超链接转页面传参数
	location.href="http://localhost:8080/lose/download.do?loss_file="+data;
}
