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
			url:"http://localhost:8080/dapartment/getUserOfDapartment.do",
			type:"get",
			data:{"dapartment":$("#dapartment").val(),"page":page},
			contentType:"application/json;charset=utf-8",
			dataType:"json",
			success:function(data){
				var html="";
				$.each(data.datas, function(i, d) {
					html+="<tr class='trOne'>"
						 +"<td>"+d['dapartment']+"</td>"
						 +"<td>"+d['count']+"</td>"
						  +"</tr>";
				})
				$(".trOne").remove();
				$(".tableOne").append(html);
				
				pageNum=data.singerData.pageNum;
				pages = data.singerData.pages;
				var outHtml="";
				$.each(data.singerData.list, function(i, u) {
					outHtml += "<tr class='tr'>"
						 +"<td>"+u['user_number']+"</td>"
						 +"<td>"+u['user_name']+"</td>"
						 +"<td>"+u['sex']+"</td>"
						 +"<td>"+u['dapartment']+"</td>"
						 +"<td>"+u['tel']+"</td>"
						 +"<td>"+u['address_shen']+u['address_shi']+"</td>"
						  +"</tr>";
				});
				$(".tr").remove();
		  		$(".tableTwo").append(outHtml);
		  		$("#firstpage").html(pageNum);
		  		$("#lastpage").html(pages);
			},
			error:function(){
				alert("System error!!!!!");
			}
	});
}

