//$(function() {
//		init2();
//	});
	//function init2(){
		 

//		  
//		$.ajax({
//			url:"http://localhost:8080/getSettle/getSettlement",
//			type:"post",
//			data:{"reported_number":reported_number},
//			dataType:"json",
//			success:function(data) {
//			  var newTr = "";
//				$.each(data,function(i,item) {
//					newTr +="<tr id='remove'>"
// 							+"<th>"+item['reported_number']+"</th>"
// 							+"<th>"+item['informants']+"</th>"
//						    +"<th>"+item.warranty_info.license_number+"</th>"
//				 			+"<th>"+item['informants_tel']+"</th>"
//				 			+"<th>"+item['reported_time']+"</th>"
// 			 			    +"<th>"+item.prospect_info.prospect_address+"</th>"
//				 			+"<th>"+item['danger_cause']+"</th>"
//				 			+"<th>"+item['dispose_type']+"</th>"
//				 			+"<th>"+item['case_state']+"</th>"
//				 			+"<th><a href='add_settle.jsp'  target='aa'>理赔详情</a>"
// 							+"</th>"
// 							+"</tr>";
//				});
//				$("#remove").remove();
//				$("table").append(newTr);
//				
//			},
//			error : function() {
//				alert("系统错误，请联系管理员！");
//			}
//		});
//	}
//	function init3(){
//		  $("#peospectID").val("");
//	}
//	
//	


var page=1;
var pageNum=1;
var pages=1;
$(function(){
	init(page)
	
	$("#jia").click(function(){
		pageNum = Number(pageNum)+1;
		if(pageNum > pages){
			alert("没有下一页");
			pageNum=pages;
		} else {
			page = Number(page)+1;
			query(page);
		}
		
	})
	
	$("#jian").click(function(){
		pageNum=Number(pageNum)-1;
		if(pageNum<1){
			alert("没有上一页");
			pageNum=1;
		}else{
			page = Number(page)-1;
			init(page)
		}
		
	})
})

		function init(page){
	            var reported_number= $("#peospectID").val();
				$.ajax({
				url : "http://localhost:8080/getSettle/getSettlement",
				type : "post",
				data: {"page":page,"reported_number":reported_number},
				dataType : "json",
				success : function(data) {
					
					pageNum=data.singerData.pageNum;
		        	pages=data.singerData.pages;
					
					var newTr = "";
					$.each(data.singerData.list,function(i,item) {
						newTr+="<tr id='remove'>"
 							+"<th>"+item['reported_number']+"</th>"
 							+"<th>"+item['informants']+"</th>"
						    +"<th>"+item.warranty_info.license_number+"</th>"
				 			+"<th>"+item['informants_tel']+"</th>"
				 			+"<th>"+item['reported_time']+"</th>"
 			 			    +"<th>"+item.prospect_info.prospect_address+"</th>"
				 			+"<th>"+item['danger_cause']+"</th>"
				 			+"<th>"+item['dispose_type']+"</th>"
				 			+"<th>"+item['case_state']+"</th>"
				 			+"<th><a href='add_settle.jsp?reported_number="+item['reported_number']+"'  target='aa'>理赔详情</a>"
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
		function init3(){
		 $("#peospectID").val("");
	}
		
		function init2(){
			init(page)
		}
		
		
