	$(function(){
		casemessage(1);
	});
	$(function(){
		$("#shangyiye").click(function(){
         	var pagenum = $("#pagenum").text();
         	pagenum=pagenum-1;
         	casemessage(pagenum);
      	});
     	$("#xiayiye").click(function(){
         	var pagenum = $("#pagenum").text();
         	pagenum=pagenum-1+2;
         	casemessage(pagenum);
      	});
	});
	function casemessage(pagenum){
		 var warranty_number = $("input[name='warranty_number']").val();
			$.ajax({
				url : "/insurance/reportedinfo.do",
				type : "post",
				data: {"warranty_number":warranty_number,"pagenum":pagenum},
				dataType : "json",
				success : function(data) {
					var pagenum = $("#pagenum").text(data.pageNum);
					case_message = "";
					$.each(data.list,function(i,item){
						case_message += "<tr class='remove'>"
										+"<td>"+item['reported_number']+"</td>"
										+"<td>"+item['informants']+"</td>"
										+"<td>"+item['reported_time']+"</td>"
										+"<td>"+item['city']+"</td>"
										+"<td>"+item['case_state']+"</td>"
										+"</tr>"
					});
					$(".remove").remove();
					$("#append").append(case_message);		
				},
				error : function() {
					alert("系统错误，请联系管理员！");
				}
			});
	}	