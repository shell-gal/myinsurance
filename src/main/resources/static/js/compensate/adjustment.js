//查询核赔页面及查询
var page=1;
var pageNum=1;
var pages=1;

$(function(){
	init();
	$("#select_but").click(function(){
		page=1;
		init();
	});
	$("#reset_but").click(function(){
		$("#peospectID").val("");
		init();
	});


	$("#jia").click(function(){
		pageNum = Number(pageNum)+1;
		if(pageNum > pages){
			alert("没有下一页");
			pageNum=pages;
		} else {
			page = Number(page)+1;
			init();
		}

	})

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
});

function init(){
		var search= $("#peospectID").val();
		$.ajax({
		url : "http://localhost:8080/myinsurance/lisuan/adjustment",
		type : "post",
		data: {"pageNum":page,"search":search},
		dataType : "json",
		success : function(data) {
			pageNum=data.pageNum;
			pages=data.pages;

			var newTr = "";
			$.each(data.list,function(i,item) {

				newTr+="<tr class='remove'>"
					+"<th>"+item['caseId']+"</th>"
					+"<th>"+item['reporterName']+"</th>"
					+"<th>"+item['carNumber']+"</th>"
					+"<th>"+item['reporterPhone']+"</th>"
					+"<th>"+item['dangerDate']+"</th>"
					+"<th>"+item['dangerAddress']+"</th>"
					+"<th>"+item['dangerCause']+"</th>"
					+"<th>"+item['dangerType']+"</th>"
					+"<th>"+item['caseStatus']+"</th>"
					+"<th><a href='lisuan_info.jsp?reported_number="+item['caseId']+"' target='aa'>理算详情</a>"
					+"</th>"
					+"</tr>";
			});
			$(".remove").remove();
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

