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
		url : "http://localhost:8080/prospect/queryAllReported.do",
		//请求类型
		type : "get",
		//传输数据
		data : {
			"reported_number" : $("#parmeId2").val(),
			"page":"1",
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
			$.each(data.singerData.list, function(i, r) {
				//拼接
				outHtml += "<tr class='pand'>" 
						+ "<td>" + r['reported_number']
						+ "</td>" + "<td>" + r['informants'] + "</td>" 
						+ "<td>" + r['informants_tel'] + "</td>" + "<td>"
						+ r['reported_time'] + "</td>" 
						+ "<td>" + r['province'] + r['city'] + r['road'] + "</td>" 
						+ "<td>" + r['danger_cause'] + "</td>" 
						+ "<td>" + r['case_state'] + "</td>" + "</tr>";
			});
			//添加到one里面
			$("#one").append(outHtml);
		},
		//请求失败
		error : function() {
			//提示
			alert("系统错误")
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
		url : "http://localhost:8080/prospectRep/queryProspectRep.do",
		//请求类型
		type : "get",
		//传输数据
		data : {
			"reported_number" : $("#parmeId2").val()
		},
		//发送数据类型
		contentType : "application/json;charset=utf-8",
		//接收数据类型
		dataType : "json",
		//请求成功
		success : function(data) {
			//为节点赋值
			$("#prospect").val(data.singerData.prospect_number)
			$("#prospect_number").html(data.singerData.prospect_number);
			$("#informants").html(data.singerData.reported_info.informants);
			$("#reported_time").html(data.singerData.reported_info.reported_time);
			$("#prospect_time").html(data.singerData.prospect_time);
			$("#prospect_address").html(data.singerData.prospect_address);
			$("#accident_type").html(data.singerData.accident_type);
			$("#duty").html(data.singerData.duty);
			$("#danger_cause").html(data.singerData.reported_info.danger_cause);
			$("#driver_name").html(data.singerData.driver_name);
			$("#driver_tel").html(data.singerData.driver_tel);
			$("#driving_licence").html(data.singerData.driving_licence);
			$("#driving_license").html(data.singerData.driving_license);
			$("#prospect_pass").html(data.singerData.prospect_pass);
			$("#loss_info").html(data.singerData.loss_info);
			$("#police").val(data.singerData.police_duty);
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
			"prospect_number":$("#prospect").val()
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
			alert("系统错误")
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