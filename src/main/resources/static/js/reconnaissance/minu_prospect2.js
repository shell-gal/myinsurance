/**
 * 查勘信息
 * @author 李洋涛
 */

var page = 1;
var pageNum = 1;
var pages = 1;
$(function() {
	//调用queryAllReported()
	queryAllReported();
	//调用queryProspectRep()
	queryProspectRep();
});

/**
 * 查询已查勘案件
 */
function queryAllReported() {
	//ajax
	$.ajax({
		//地址http://localhost:8080/prospect/queryAllReported.do
		url : "http://localhost:8080/myinsurance/prospect/selectAchieveCaseMessage.do",
		//请求类型
		type : "get",
		//传输数据
		data : {
			"caseId" : $("#parmeId2").val(),
		},
		//发送数据类型
		contentType : "application/json;charset=utf-8",
		//请求数据类型
		dataType : "json",
		//请求成功
		success : function(data) {
			//定义属性拼接节点
			var outHtml = "";
			//each
			$.each(data.list, function(i, r) {
				//拼接
				outHtml += "<tr class='pand'>" 
						+ "<td>" + r.aCase.caseId + "</td>"
						+ "<td>" + r.aCase.reporterName + "</td>"
						+ "<td>" + r.aCase.reporterPhone + "</td>"
						+ "<td>" + r.aCase.dangerDate + "</td>"
						+ "<td>" + r.aCase.dangerAddressProvince + r.aCase.dangerAddressCity + r.aCase.roadDirection + "</td>"
						+ "<td>" + r.aCase.dangerCause + "</td>"
						+ "<td>" + r.aCase.caseStatus + "</td>"
						+ "</tr>";
			});
			//添加到one里面
			$("#one").append(outHtml);
		},
		//请求失败
		error : function() {
			//提示
			alert("系统错误");
		}
	});
}

/**
 * 查询查勘案件信息
 */
function queryProspectRep() {
	//ajax
	$.ajax({
		//地址http://localhost:8080/prospectRep/queryProspectRep.do
		url : "http://localhost:8080/myinsurance/prospect/selectProspectMessage.do",
		//请求类型
		type : "get",
		//传输数据
		data : {
			"caseId" : $("#parmeId2").val()
		},
		//发送数据类型
		contentType : "application/json;charset=utf-8",
		//接收数据类型
		dataType : "json",
		//请求成功
		success : function(data){
			console.log(data);
			//为节点赋值
			$("#prospect").val(data.prospectId);
			$("#prospect_number").html(data.prospectId);
			$("#informants").html(data.aCase.reporterName);
			$("#reported_time").html(data.aCase.dangerDate);
			$("#prospect_time").html(data.prospectDate);
			$("#prospect_address").html(data.prospectAddress);
			$("#accident_type").html(data.accidentType);
			$("#duty").html(data.duty);
			$("#danger_cause").html(data.aCase.dangerCause);
			$("#driver_name").html(data.driverName);
			$("#driver_tel").html(data.driverPhone);
			$("#driving_licence").html(data.driveingLicense);
			$("#driving_license").html(data.driverLicense);
			$("#prospect_pass").html(data.dangerPass);
			$("#loss_info").html(data.lossInfo);
			$("#police").val(data.policeDuty);
		},
		//请求失败
		error : function() {
			//提示
			alert("系统错误");
		},
		//执行结束后
		async:false,
	});
	//调用query_img()
	query_img()
}

/**
 * 查询查勘图片
 */
function query_img(){
	//ajax
	$.ajax({
		//地址http://localhost:8080/img/queryImg.do
		url : "http://localhost:8080/img/queryImg.do",
		//请求类型
		type : "get",
		//传输数据
		data : {
			"prospectId":$("#prospect").val()
		},
		//发送数据类型
		contentType : "application/json;charset=utf-8",
		//接收数据类型
		dataType : "json",
		success : function(data) {
			//定义属性拼接
			var outHtml = "";
			//each
			$.each(data.datas, function(i, r) {
				//拼接
				outHtml += "<div class=\"img\"><img src=\"/src/static/uploadfiles/"+r['img_name']+"\" width=\"100%\" height=\"100%\"></div>"
			});
				//添加到chakan_img后面
				$("#chakan_img").after(outHtml);
				
		},
		//请求失败
		error : function() {
			//提示
			// alert("系统错误");
		}
	});
}

/**
 * 文件下载
 */
$("#downFile").click(function(){
	//地址http://localhost:8080/img/download.do?police_duty="+$("#police").val()
	location.href="http://localhost:8080/img/download.do?police_duty="+$("#police").val();
})