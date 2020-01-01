//查询核赔页面及查询
var page=1;
var pageNum=1;
var pages=1;

init();

//查询
$("#select_but").click(function(){
	page=1;
	init();
});
//重置
$("#reset_but").click(function(){
	$("#peospectID").val("");
	init();
});

//下一页
$("#jia").click(function(){
	pageNum = Number(pageNum)+1;
	if(pageNum > pages){
		alert("没有下一页");
		pageNum=pages;
	} else {
		page = Number(page)+1;
		init();
	}

});

//上一页
$("#jian").click(function(){
	pageNum=Number(pageNum)-1;
	if(pageNum<1){
		alert("没有上一页");
		pageNum=1;
	}else{
		page = Number(page)-1;
		init();
	}
})

function init(){
	//根据id为peospectID获取文本框的值
	var search= $("#peospectID").val();
	$.ajax({
		url : "http://localhost:8080/myinsurance/lisuan/caseInfo",
		type : "post",
		data: {"pageNum":page,"search":search,"status":"理赔中"},
		dataType : "json",
		success : function(data) {
			pageNum=data.pageNum;
			pages=data.pages;
			var newTr = "";
			$.each(data.list,function(i,item) {
			newTr+="<tr id='remove'>"
				+"<th>"+item['caseId']+"</th>"
				+"<th>"+item['reporterName']+"</th>"
				+"<th>"+item['carNumber']+"</th>"
				+"<th>"+item['reporterPhone']+"</th>"
				+"<th>"+item['dangerDate']+"</th>"
				+"<th>"+item['dangerAddress']+"</th>"
				+"<th>"+item['dangerCause']+"</th>"
				+"<th>"+item['dangerType']+"</th>"
				+"<th>"+item['caseStatus']+"</th>"
				+"<th><a href='http://localhost:8080/myinsurance/lisuan/lisuanInfo?caseId="+item['caseId']+"'  target='aa'>理赔详情</a>"
				+"</th>"
				+"</tr>";
			});
			$("table tr:gt(0)").remove();
			//$("#append").append(newTr);
			$("table").append(newTr);
			$("#firstpage").html(pageNum);
			$("#lastpage").html(pages)
		},
		error : function() {
			alert("系统错误，请联系管理员！");
		}
	});
}
		
