/**
 * 修改查勘信息
 * 
 * @author 李洋涛
 */

$(function() {
	// 调用queryAllReported()
	queryAllReported();
	// 调用queryProspectRep()
	queryProspectRep();
	// 调用upProspect()
	upProspect();
});

/**
 * 查询案件信息
 */
function queryAllReported() {
	// ajax
	$.ajax({
		// 地址http://localhost:8080/prospect/queryAllReported.do
		url : "http://localhost:8080/prospect/queryAllReported.do",
		// 请求类型
		type : "get",
		// 传输数据
		data : {
			"case_state" : "已查勘",
			"reported_number" : $("#parmeId").val(),
			"page" : "1"
		},
		// 发送数据类型
		contentType : "application/json;charset=utf-8",
		// 接收数据类型
		dataType : "json",
		// 请求成功
		success : function(data) {
			// 定义属性拼接
			var outHtml = "";
			// each
			$.each(data.singerData.list, function(i, r) {
				// 拼接
				outHtml += "<tr class='count'>" + "<th>" + r['reported_number']
						+ "</th>" + "<th>" + r['informants'] + "</th>" + "<th>"
						+ r['informants_tel'] + "</th>" + "<th>"
						+ r['reported_time'] + "</th>" + "<th>" + r['province']
						+ "</th>" + "<th>" + r['danger_cause'] + "</th>"
						+ "<th>" + r['case_state'] + "</th>"
			});
			// 添加到prospect_table里面
			$("#addProspect_table").append(outHtml);
		},
		// 请求失败
		error : function() {
			// 提示
			alert("系统错误");
		}
	});
}

/**
 * 修改查勘信息
 */
function upProspect() {
	// ProspectInfo单击
	$("#ProspectInfo").click(function() {
		// ajax
		$.ajax({
			//地址http://localhost:8080/prospect/upProspect.do
			url : "http://localhost:8080/prospect/upProspect.do",
			//请求类型
			type : "get",
			//传输数据
			data : {
				"prospect_number" : $("#prospect").val(),
				"prospect_time" : $("#prospect_time").val(),
				"accident_type" : $("#accident_type").val(),
				"duty" : $('input[name="duty"]:checked').val(),
				"prospect_address" : $("#prospect_address").val(),
				"prospect_pass" : $("#prospect_pass").val(),
				"loss_info" : $("#loss_info").val(),
				"police_duty" : $("#police_duty").val(),
				"driver_name" : $("#driver_name").val(),
				"driver_tel" : $("#driver_tel").val(),
				"driving_licence" : $("#driving_licence").val(),
				"driving_license" : $("#driving_license").val(),
				"reported_number" : $("#parmeId").val(),
			},
			//发送数据类型
			contentType : "application/json;charset=utf-8",
			//接收数据类型
			dataType : "json",
			//请求成功
			success : function(data) {
				//提示
				alert(data.message);
			},
			//请求失败
			error : function() {
				//提示
				alert("系统错误，请重试");
			}
		});
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
			"case_state" : "已查勘",
			"reported_number" : $("#parmeId").val()
		},
		//发送数据类型
		contentType : "application/json;charset=utf-8",
		//接收数据类型
		dataType : "json",
		//请求成功
		success : function(data) {
			//为节点赋值
			$("#prospect").val(data.singerData.prospect_number)
			$("#prospect_address").val(data.singerData.prospect_address);
			$("#accident_type").val(data.singerData.accident_type);
			$("#prospect_time").val(data.singerData.prospect_time);
			$("input[value='" + data.singerData.duty + "']").attr("checked",
					true);
			$("#danger_cause").val(data.singerData.reported_info.danger_cause);
			$("#driver_name").val(data.singerData.driver_name);
			$("#driver_tel").val(data.singerData.driver_tel);
			$("#driving_licence").val(data.singerData.driving_licence);
			$("#driving_license").val(data.singerData.driving_license);
			$("#prospect_pass").val(data.singerData.prospect_pass);
			$("#loss_info").val(data.singerData.loss_info);
		},
		//请求失败
		error : function() {
			//提示
			// alert("系统错误");
		},
		//执行结束
		async : false,
	});
}
