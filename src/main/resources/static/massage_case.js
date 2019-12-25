var page = 1;
var pageNum = 1;
var pages = 1;
$(function(){
	queryReported(page);
	
	$("#select-btn").click(function(){
		queryReported(page);
	})
	
	$("#jia").click(function(){
		pageNum = Number(pageNum)+1;
		if(pageNum > pages){
			alert("没有下一页");
			pageNum=pages;
		} else {
			page = Number(page)+1;
			queryReported(page);
		}
		
	})
	
	$("#jian").click(function(){
		pageNum=Number(pageNum)-1;
		if(pageNum<1){
			alert("没有上一页");
			pageNum=1;
		}else{
			page = Number(page)-1;
			queryReported(page);
		}
		
	})
});



function queryReported(page){
	$.ajax({
		url:"http://localhost:8080/case/caseQuery.do",
		type:"get",
		data:{"case_state":"结案","page":page,"reported_number":$("#reportedID").val()},
		contentType:"application/json;charset=utf-8",
		dataType:"json",
		success:function(data){
			pageNum=data.singerData.pageNum;
			pages = data.singerData.pages;
			var outHtml = "";
			$.each(data.singerData.list, function(i, r) {
				outHtml += "<tr class='addtr'>" + "<th>" + r['reported_number'] + "</th>"
						+ "<th>" + r['informants'] + "</th>" + "<th>"
						+ r['informants_tel'] + "</th>" + "<th>"
						+ r['reported_time'] + "</th>" + "<th>"
						+ r['reported_number'] + "</th>" + "<th>"
						+ r['road_direction'] + "</th>" + "<th>"
						+ r['danger_cause'] + "</th>" + "<th>"
						+ r['dispose_type'] + "</th>" + "<th>"
						+ r['case_state'] + "</th>"
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