var page = 1;
var pageNum = 1;
var pages = 1;

queryReported(page);

$("#select-btn").click(function(){
	queryReported(page);
});

$("#jia").click(function(){
	pageNum = Number(pageNum)+1;
	if(pageNum > pages){
		alert("没有下一页");
		pageNum=pages;
	} else {
		page = Number(page)+1;
		queryReported(page);
	}

});

$("#jian").click(function(){
	pageNum=Number(pageNum)-1;
	if(pageNum<1){
		alert("没有上一页");
		pageNum=1;
	}else{
		page = Number(page)-1;
		queryReported(page);
	}

});

function queryReported(page){
	var search= $("#reportedID").val();
	$.ajax({
		url:"http://localhost:8080/myinsurance/lisuan/caseInfo",
		type:"get",
		data:{"status":"结案","pageNum":page,"search":search},
		contentType:"application/json;charset=utf-8",
		dataType:"json",
		success:function(data){
			pageNum=data.pageNum;
			pages=data.pages;

			var outHtml = "";
			$.each(data.list, function(i, r) {
				outHtml += "<tr class='addtr'>"
					+ "<th>" + r['caseId'] + "</th>"
					+ "<th>" + r['reporterName'] + "</th>"
					+ "<th>" + r['reporterPhone']+"</th>"
					+ "<th>" + r['dangerDate'] + "</th>"
					+ "<th>" + r['dangerAddress'] + "</th>"
					+ "<th>" + r['roadDirection'] + "</th>"
					+ "<th>" + r['dangerCause'] + "</th>"
					+ "<th>" + r['dangerType'] + "</th>"
					+ "<th>" + r['caseStatus'] + "</th>"
					+ "</tr>";
			});
						$(".addtr").remove();
						$("#tab_info").append(outHtml);
						$("#firstpage").html(pageNum);
				  		$("#lastpage").html(pages);
					},
		error : function() {
			alert("系统错误")
		}
	});
}