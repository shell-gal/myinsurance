/**
 * 查询已查勘信息
 * @author 李洋涛
 */

var page = 1;
var pageNum = 1;
var pages = 1;
$(function() {
	//调用queryAchieveMissage(page)
	queryAchieveMissage(page);
	//select_but单击调用queryAchieveMissage(page)
	$("#select_but").click(function() {
		queryAchieveMissage(page);
	})
	//reset_but单击将peospectID值清空
	$("#reset_but").click(function() {
		$("#peospectID").val("")
	})
	//jia单击
	$("#jia").click(function() {
		//当前页 = 当前页加1
		pageNum = Number(pageNum) + 1;
		//判断当前页是否大于总页数
		if (pageNum > pages) {
			//提示
			alert("没有下一页");
			//当前页=总页数
			pageNum = pages;
		} else {
			//页面 =页面+1
			page = Number(page) + 1;
			//调用queryAchieveMissage(page)
			queryAchieveMissage(page);
		}

	})
	//jian单击
	$("#jian").click(function() {
		//当前页 = 当前页减1
		pageNum = Number(pageNum) - 1;
		//判断当前页是否小于1
		if (pageNum < 1) {
			//提示
			alert("没有上一页");
			//当前页= 1
			pageNum = 1;
		} else {
			//页面=页面-1
			page = Number(page) - 1;
			//调用queryAchieveMissage(page)
			queryAchieveMissage(page);
		}

	})
});

/**
 *查询已查勘案件信息
 */
function queryAchieveMissage(page) {
	//ajax
	$.ajax({
		//地址http://localhost:8080/prospect/queryAchieveMissage.do
		url : "http://localhost:8080/myinsurance/prospect/selectAllProspect.do",
		//请求类型
		type : "get",
		//传输数据
		data : {
			"indexpage" : page,
			"caseId":$("#peospectID").val()
		},
		//发送数据类型
		contentType : "application/json;charset=utf-8",
		//接收数据类型
		dataType : "json",
		//请求成功
		success : function(data) {
			//当前页赋值
			pageNum = data.pageNum;
			//总页数赋值
			pages = data.pages;
			//定义属性拼接
			var outHtml = "";
			//each
			$.each(data.list, function(i, p) {
				console.log(data);
				//拼接
				outHtml += "<tr class='tr'>" 
						+ "<th>" + p.aCase.caseId + "</th>"
						+ "<th>" + p.aCase.reporterName + "</th>"
						+ "<th>" + p.aCase.reporterPhone + "</th>"
						+ "<th>" + p.aCase.reporterName + "</th>"
						+ "<th>" + p.prospectDate + "</th>"
						+ "<th>" + p.prospectAddress + "</th>"
						+ "<th>" + p.aCase.dangerCause + "</th>"
						+ "<th>" + p.aCase.caseStatus + "</th>"
						+ "<th>" + "<a href='http://localhost:8080/myinsurance/prospect/getProspectDetail?caseId="
						+ p.aCase.caseId+"'>详情</a> "
						+ "<shiro:hasPermission name='总经理'><a href='http://localhost:8080/myinsurance/prospect/addProspectMessage?caseId="
						+p.aCase.caseId+"'>修改</a>	</shiro:hasPermission></th>" + "</tr>"
			});
			//将.tr清除
			$(".tr").remove();
			//添加到prospect_table里面
			$("#prospect_table").append(outHtml);
			//当前页html
			$("#firstpage").html(pageNum);
			//总页数
			$("#lastpage").html(pages);
		},
		//请求失败
		error : function() {
			//提示
			alert("系统错误");
		}
	});
}