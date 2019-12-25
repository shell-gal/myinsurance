//查询核赔页面及查询
var page=1;
var pageNum=1;
var pages=1;
$(function(){
	init();
	$("#select_but").click(function(){
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
			query();
		}
		
	})
	
	$("#jian").click(function(){
		pageNum=Number(pageNum)-1;
		if(pageNum<1){
			alert("没有上一页");
			pageNum=1;
		}else{
			page = Number(page)-1;
			query();
		}
		
	})
})

		function init(){
	            var reported_number= $("#peospectID").val();
				$.ajax({
				url : "http://localhost:8080/getAdjustment/getAdjustment",
				type : "post",
				data: {"page":page,"reported_number":reported_number},
				dataType : "json",
				success : function(data) {
					
					pageNum=data.singerData.pageNum;
		        	pages=data.singerData.pages;
					
					var newTr = "";
					$.each(data.singerData.list,function(i,item) {
						
						newTr+="<tr class='remove'>"
 							+"<th>"+item['reported_number']+"</th>"
 							+"<th>"+item['informants']+"</th>"
						    +"<th>"+item.warranty_info.license_number+"</th>"
				 			+"<th>"+item['informants_tel']+"</th>"
				 			+"<th>"+item['reported_time']+"</th>"
 			 			    +"<th>"+item.prospect_info.prospect_address+"</th>"
				 			+"<th>"+item['danger_cause']+"</th>"
				 			+"<th>"+item['dispose_type']+"</th>"
				 			+"<th>"+item['case_state']+"</th>"
				 			+"<th><a href='lisuan_info.jsp?reported_number="+item['reported_number']+"' target='aa'>理算详情</a>"
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

		
		
