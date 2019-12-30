//查询核赔页面及查询
var page=1;
var pageNum=1;
var pages=1;

$(function(){
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

	})

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
});

function init(){
   //根据id为peospectID获取文本框的值
	var search= $("#peospectID").val();
	$.ajax({
		//路径url
		url : "http://localhost:8080/myinsurance/lisuan/caseInfo",
		//type
		type : "post",
		//参数data
		data: {"pageNum":page,"search":search,"status":"核赔中"},
		//返回类型dataType
		dataType : "json",
		success : function(data) {
			//当前页面调用data.singerData.当前页面
			pageNum=data.pageNum;
			//总页面调用data.singerData.总页面
			pages=data.pages;
			//加载newTr
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
					+"<th><a href='heuan_info.jsp?reported_number="+item['caseId']+"'  target='aa'>理算详情</a>"
					+"</th>"
					+"</tr>";
			});
			//删除节点
			$(".remove").remove();
			//利用append加入newTr
			$("table").append(newTr);
			//获取当前页面
			$("#firstpage").html(pageNum);
			//获取页码
			$("#lastpage").html(pages)
		},
		error : function() {
			alert("系统错误，请联系管理员！");
		}
	});
}

     
		
