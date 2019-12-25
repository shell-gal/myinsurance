var page = 1;
var pageNum = 1;
var pages = 1;
$(function(){
	
	load(page);
	
	$("#jia").click(function(){
		pageNum = Number(pageNum)+1;
		if(pageNum > pages){
			alert("没有下一页");
			pageNum=pages;
		} else {
			load(pageNum);
		}
		
	})
	
	$("#jian").click(function(){
		pageNum=Number(pageNum)-1;
		if(pageNum<1){
			alert("没有上一页");
			pageNum=1;
		}else{
			load(pageNum);
		}
		
	})
});

function load(page){
	$.ajax({
			url:"http://localhost:8080/dapartment/queryDapartment.do",
			type:"get",
			data:{"page":page},
			contentType:"application/json;charset=utf-8",
			dataType:"json",
			success:function(data){
				pageNum=data.singerData.pageNum;
				pages = data.singerData.pages;
				var outHtml="";
				$.each(data.singerData.list, function(i, d) {
					outHtml += "<tr class='tr'>"
								 +"<td>"+d['dapartment']+"</td>"
								 +"<td>"+d['count']+"</td>"
								 +"<td><a id='' href='section-minute.jsp?dapartment="+d['dapartment']+"'>查看详细</a></td>"
							  +"</tr>";
				});
				$(".tr").remove();
		  		$("#table").append(outHtml);
		  		$("#firstpage").html(pageNum);
		  		$("#lastpage").html(pages);
			},
			error:function(){
				alert("System error!!!!!");
			}
	});
}


function find(){
	
}