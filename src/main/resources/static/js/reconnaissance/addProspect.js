$(function(){
	//调用查勘信息方法
	queryAllReported();
	//调用添加方法
	addProspect();
});

/**
 * 查询案件信息
 */
function queryAllReported(){
	//调用ajax方法
	$.ajax({
		//地址http://localhost:8080/prospect/queryAllReported.do
		url:"http://localhost:8080/myinsurance/prospect/selectUnAchieveCaseMessage.do",
		//请求类型
		type:"get",
		//传输数据
		data:{"caseId":$("#parmeId").val()},
		//发送数据类型
		contentType:"application/json;charset=utf-8",
		//接收数据类型
		dataType:"json",
		//请求成功
		success:function(data) {
			//定义值拼接
			var outHtml = "";
			//each循环
			$.each(data.list, function(i, r) {
				//拼接
				outHtml += "<tr class='count'>" 
						+ "<th>" + r.aCase.caseId + "</th>"
						+ "<th>" + r.aCase.reporterName + "</th>"
						+ "<th>" + r.aCase.reporterPhone + "</th>"
						+ "<th>" + r.aCase.dangerDate + "</th>"
						+ "<th>" + r.aCase.dangerAddressProvince + r.aCase.dangerAddressCity + r.aCase.roadDirection + "</th>"
						+ "<th>" + r.aCase.dangerCause + "</th>"
						+ "<th>" + r.aCase.caseStatus + "</th>"
					});
						//将值拼接到#addProspect_table里面
						$("#addProspect_table").append(outHtml);
					},
		//接受失败
		error : function(){
			//提示
			alert("系统错误");
		}
	});
}


/**
 * 添加查勘信息
 */
function addProspect(){
	//ProspectInfo单击事件
	$("#ProspectInfo").click(function(){
		//调用修改案件信息方法
		updReported()
		//ajax
		var data={
			"prospectDate":$("#prospect_time").val(),
			"accidentType":$("#accident_type").val(),
			"duty":$('input[name="duty"]:checked').val(),
			"prospectAddress":$("#prospect_address").val(),
			"dangerPass":$("#prospect_pass").val(),
			"lossInfo":$("#loss_info").val(),
			"policeDuty":$("#police_duty").val(),
			"driverName":$("#driver_name").val(),
			"driverPhone":$("#driver_tel").val(),
			"driverLicense":$("#driving_licence").val(),
			"driveingLicense":$("#driving_licence").val(),
			"caseId":$("#parmeId").val(),
		};
		$.ajax({	
					//访问路径http://localhost:8080/prospect/addProspect.do
	  				url:"http://localhost:8080/myinsurance/prospect/addProspectMessage.do",
	  				//请求类型
	  				type:"post",
	  				//传输数据
	  				data:JSON.stringify(data),
	  				//发送数据类型
	  				contentType:"application/json;charset=utf-8",
	  				//接收数据类型
	  				dataType:"json",
	  				//接受成功
	  				success:function(data){
	  					//from表单picUpoload单机事件
	  					$("#picUpoload").click();
	  				},
	  				//接受失败
	  				error:function(){
	  					//提示
	  					alert("系统错误，请重试");
	  				}
	  			});
	});
}

/**
 * 更新案件信息
 */
function updReported(){
	//ajax
	$.ajax({
		//路径http://localhost:8080/prospect/updReported.do
		url:"http://localhost:8080/myinsurance/prospect/updateProspectMessage.do",
		//请求类型
		type:"get",
		//传输的数据
		data:{"caseState":"定损中","caseId":$("#parmeId").val()},
		//发送数据类型
		contentType:"application/json;charset=utf-8",
		//接收数据类型
		dataType:"json",
		//请求成功
		success:function(data){
			//提示
			alert("添加成功");
		},
		//请求失败
		error:function() {
			//提示
			alert("系统错误");
		}
	})
}