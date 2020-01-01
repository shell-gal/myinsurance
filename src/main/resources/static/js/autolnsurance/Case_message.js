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
				url : "http://localhost:8080/myinsurance/insurance/reportedinfo",
				type : "post",
				data: {"warranty_number":warranty_number,"indexpage":pagenum},
				dataType : "json",
				success : function(data) {
					var pagenum = $("#pagenum").text(data.pageNum);
					case_message = "";
					console.log(data.list);
					$.each(data.list,function(i,item){
						var city=item['dangerAddressProvince']+item['dangerAddressCity']+item['detailAddress'];
						case_message += "<tr class='remove'>"
										+"<td>"+item['caseId']+"</td>"
										+"<td>"+item['reporterName']+"</td>"
										+"<td>"+render(item['dangerDate'])+"</td>"
										+"<td>"+city+"</td>"
										+"<td>"+item['caseStatus']+"</td>"
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