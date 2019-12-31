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
	var da={'reported_number':getcompensate}
	//ajax
	$.ajax({
		//路径
		url : "/myinsurance/prospect_lyt/queryheLose",
		//类型
		type : "post",
		//参数
		data :JSON.stringify(da) ,
		//字体编码
		contentType : "application/json;charset=utf-8",
		//字体类型
		dataType : "json",
		//成功执行
		success : function(data) {
			if (data.result) {
				// 创建’他方‘对象为用于拼接，值为空
				var heHtml = "";
				//使用each遍历，参数为data.singerData
				console.log(data.singerData)
				$(data.singerData).each(function (index,r) {
					//拼接
					heHtml += "<tr>"
						+ "<td>" + r.carlossName + "</td>"
						+ "<td>" + r.carlossNumber + "</td>"
						+ "<td>" + r.carlossPrice + "</td>"
						+ "<td>" + r.carlossFix + "</td>"
						+ "<td>" + r.sumPrice + "</td>"
						+ "</tr>"
				})
				//将heHtml拼接到id为other里
				$("#other").append(heHtml);

			}else {
				alert(data.message)
			}
		}

	});
}
function querymecompensate() {
	//获取id为get_compensate_reported_number的值
	var getcompensate = $("#get_compensate_reported_number").val();
	var data={'reported_number':getcompensate}
	//ajax
	$.ajax({
		//路径
		url : "/myinsurance/prospect_lyt/querymyLose",
		//类型
		type : "post",
		//参数
		data : JSON.stringify(data),
		//字体编码
		contentType : "application/json;charset=utf-8",
		//字体类型
		dataType : "json",
		//成功执行
		success : function(data) {
			//我方车损信息查询
			var heHtml = "";
			//使用each遍历，参数为data.singerData
			$(data.singerData).each(function (index,r) {
				//拼接
				heHtml += "<tr>"
					+ "<td>" + r.carlossName + "</td>"
					+ "<td>" + r.carlossNumber + "</td>"
					+ "<td>" + r.carlossPrice + "</td>"
					+ "<td>" + r.carlossFix + "</td>"
					+ "<td>" + r.sumPrice + "</td>"
					+ "</tr>"
			})

			//将meHtml拼接到id为mecar里
			$("#mecar").append(heHtml);
		}
	});
}
function queryocompensate() {
	//获取id为get_compensate_reported_number的值
	var getcompensate = $("#get_compensate_reported_number").val();
	var data={'reported_number':getcompensate}
	//ajax
	$.ajax({
		//路径
		url : "/myinsurance/prospect_lyt/thingLose",
		//类型
		type : "post",
		//参数
		data : JSON.stringify(data),
		//字体编码
		contentType : "application/json;charset=utf-8",
		//参数类型
		dataType : "json",
		//成功执行
		success : function(data) {
			// 创建’物损‘对象为用于拼接，值为空
			var oHtml = "";
			//使用each遍历，参数为data.singerData
			$(data.singerData).each(function (index,r) {
				//拼接
				oHtml += "<tr>"
					+ "<td>" + r.objectlossName + "</td>"
					+ "<td>" + r.objectlossNumber + "</td>"
					+ "<td>" + r.objectlossPrice + "</td>"
					+ "<td>" + r.objectlossDepart + "</td>"
					+ "<td>" + r.sumPrice + "</td>"
					+ "</tr>"
			})

			//将oHtml拼接到id为o里
			$("#o").append(oHtml);
		}
	});
}
function querypcompensate() {
	//获取id为get_compensate_reported_number的值

	var getcompensate = $("#get_compensate_reported_number").val();
	var d={'reported_number':getcompensate}
	//ajax
	$.ajax({
		//路径
		url : "/myinsurance/prospect_lyt/peopleLose",
		//类型
		type : "post",
		//参数
		data : JSON.stringify(d),
		//字体编码
		contentType : "application/json;charset=utf-8",
		//参数类型
		dataType : "json",
		//成功执行
		success : function(data) {
			// 创建’人伤‘对象为用于拼接，值为空

			var pHtml = "";
			$(data.singerData).each(function (index,r) {
				//拼接
				pHtml += "<tr>"
					+ "<td>" + r.medicalPro + "</td>"
					+ "<td>" + r.medicalPrice + "</td>"
					+ "<td>" + r.medicalAddress + "</td>"
					+ "<td>" + r.sumPrice + "</td>"
					+ "</tr>"
			})
			//使用each遍历，参数为data.singerData

			//将pHtml拼接到id为p里
			$("#p").append(pHtml);
		},
		//失败执行
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
	var d={
		'reported_number':tj
	}
	//ajax
	$.ajax({
		url:"/myinsurance/prospect_lyt/upCaselossToOk",
		type:"post",
		contentType:"application/json",
		data:JSON.stringify(d),
		dataType : "json",
		success : function(data){
			if (data.result){
				alert("操作成功！");
				window.location.href="/myinsurance/prospect_lyt/hesun_info";
			} else {
				alert(data.message)
			}

		}
	});
}
//下载
function down(data){
	//使用location超链接转页面传参数
	location.href="http://localhost:8080/lose/download.do?loss_file="+data;
}
