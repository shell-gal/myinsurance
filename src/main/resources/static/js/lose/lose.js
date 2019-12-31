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
		window.location.href="/myinsurance/prospect_lyt/loss_info";
	});
});

//对方车损
function queryhelose() {
	//获取id为get_reported_number的值
	var tj=$("#get_reported_number").val();
    var da={'reported_number':tj}
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


//我方车损
	function querymelose() {
		//获取id为get_reported_number的值
		var tj=$("#get_reported_number").val();
		var data={'reported_number':tj}
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

	//物品单
		function queryolose() {
			//获取id为get_reported_number的值
			var tj=$("#get_reported_number").val();
			var data={'reported_number':tj}
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
			//人伤单
			function queryplose() {
				//获取id为get_reported_number的值
				var tj=$("#get_reported_number").val();
				var d={'reported_number':tj}
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

function tjhs(){
		var tj=$("#get_reported_number").val();
		var zt=$("#case_stateinfo").val();
		var d={
            'reported_number':tj
        }
	$.ajax({
		url:"/myinsurance/prospect_lyt/upCaseloss",
		type:"post",
        contentType:"application/json",
		data:JSON.stringify(d),
		dataType : "json",
		success : function(data){
		    if (data.result){
                alert("操作成功！");
                window.location.href="/myinsurance/prospect_lyt/loss_info";
            } else {
		        alert(data.message)
            }

		}
	});
}

