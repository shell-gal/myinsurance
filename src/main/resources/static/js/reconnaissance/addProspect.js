/**
 * 添加页面
 * @author 李洋涛
 */
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
		url:"http://localhost:8080/prospect/queryAllReported.do",
		//请求类型
		type:"get",
		//传输数据
		data:{"case_state":"调度中","reported_number":$("#parmeId").val(),"page":"1"},
		//发送数据类型
		contentType:"application/json;charset=utf-8",
		//接收数据类型
		dataType:"json",
		//请求成功
		success:function(data) {
			//定义值拼接
			var outHtml = "";
			//each循环
			$.each(data.singerData.list, function(i, r) {
				//拼接
				outHtml += "<tr class='count'>" 
						+ "<th>" + r['reported_number'] + "</th>"
						+ "<th>" + r['informants'] + "</th>" + "<th>"
						+ r['informants_tel'] + "</th>" + "<th>"
						+ r['reported_time'] + "</th>" + "<th>"
						+ r['province']+r['city']+r['road'] + "</th>" + "<th>"
						+ r['danger_cause'] + "</th>" + "<th>"
						+ r['case_state'] + "</th>"
					});
						//将值拼接到#addProspect_table里面
						$("#addProspect_table").append(outHtml);
					},
		//接受失败
		error : function() {
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
		$.ajax({	
					//访问路径http://localhost:8080/prospect/addProspect.do
	  				url:"http://localhost:8080/prospect/addProspect.do",
	  				//请求类型
	  				type:"get",
	  				//传输数据
	  				data:{
	  					"prospect_time":$("#prospect_time").val(),
	  					"accident_type":$("#accident_type").val(),
	  					"duty":$('input[name="duty"]:checked').val(),
	  					"prospect_address":$("#prospect_address").val(),
	  					"prospect_pass":$("#prospect_pass").val(),
	  					"loss_info":$("#loss_info").val(),
	  					"police_duty":$("#police_duty").val(),
	  					"driver_name":$("#driver_name").val(),
	  					"driver_tel":$("#driver_tel").val(),
	  					"driving_licence":$("#driving_licence").val(),
	  				    "driving_license":$("#driving_license").val(),
	  				    "reported_number":$("#parmeId").val(),
	  				},
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
		url:"http://localhost:8080/prospect/updReported.do",
		//请求类型
		type:"get",
		//传输的数据
		data:{"case_state":"定损中","reported_number":$("#parmeId").val()},
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