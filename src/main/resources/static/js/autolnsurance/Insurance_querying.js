	function baodanid(warranty_number){
		 $("input[name='baodanid']").val(warranty_number);
	}	
	function insurancedate(){
		var warranty_number =$("input[name='baodanid']").val();
		var baodanzhiqi = $("input[name='baodanzhiqi']").val();
		$.ajax({
			url : "/insurance/insurancedate.do",
			type : "post",
			data: {"insurance_end_date":baodanzhiqi,"warranty_number":warranty_number},
			dataType : "json",
			success : function(data) {
				alert("续保成功！");
				var pagenum = $("#pagenum").text();
				insurancequery(pagenum);
			},
			error : function() {
				alert("系统错误，请联系管理员！");
			}
		});
	}
	
	$(function(){
		var url = location.search;
		//?后面有值就=1 没值就等于-1
		if(url.indexOf("?")!=-1){
			//获取?后面的值
			var str = url.substr(1);
			//剔除掉&
			var strs = str.split("&");
			var tostring = strs.toString();
			var pagenum = tostring.substring(8,9);
		}
		
		insurancequery(pagenum);
		
		$("#shangyiye").click(function(){
         	var pagenum = $("#pagenum").text();
         	pagenum=pagenum-1;
         	insurancequery(pagenum);
      	});
     	$("#xiayiye").click(function(){
         	var pagenum = $("#pagenum").text();
         	pagenum=pagenum-1+2;
         	insurancequery(pagenum);
      	});
	});
	
	function insurancequery(pagenum){
		var warranty_number =$("input[name='warranty_number']").val();
		var policyholders_name = $("input[name='policyholders_name']").val();
		var recognizee_name = $("input[name='recognizee_name']").val();
		$.ajax({
			url : "http://localhost:8080/insurance/insurancequery.do",
			type : "post",
			data: {"pagenum":pagenum,"warranty_number":warranty_number,"policyholders.policyholders_name":policyholders_name,"recognizee.recognizee_name":recognizee_name},
			dataType : "json",

			success : function(data) {
				var insurance ="";
				$("#pagenum").text(data.pageNum);
				$.each(data.list,function(i,item){
					insurance += "<tr style='height: 40px;' class='remove'>"
									+"<td>"+item['warranty_number']+"</td>"
									+"<td>"+item.policyholders.policyholders_name+"</td>"
									+"<td>"+item.recognizee.recognizee_name+"</td>"
									+"<td>"+item.recognizee.credentials_number+"</td>"
									+"<td>"+item['license_number']+"</td>"
									+"<td>"+item['insurance_begin_date']+"</td>"
									+"<td>"+item['insurance_end_date']+"</td>"
									+"<td>"
									+"<a href='Modification_insurance.jsp?warranty_number="+item['warranty_number']+"&pageNum="+data.pageNum+"'>"
									+"<button type='button' class='btn btn-primary' style='height: 35px;'>修改</button></a>&nbsp;"
									+"<a href='Case_message.jsp?warranty_number="+item['warranty_number']+"'>"
									+"<button type='button' class='btn btn-primary' style='height: 35px;'>案件</button></a>&nbsp;"
									+"<button type='button' class='btn btn-primary'  data-toggle='modal' onclick='baodanid("+item['warranty_number']+")' data-target='#myModal' style='height: 35px;'>续保</button>&nbsp;"
									+"<a href='continue_insure.jsp?warranty_number="+item['warranty_number']+"'>"
									+"<button type='button' class='btn btn-primary' style='height: 35px;'>继续投保</button></a>"
									+"</td>"
									+"</tr>"
				});
				$(".remove").remove();
				$("#append").append(insurance);
			},
			error : function() {
				alert("系统错误，请联系管理员！");
			}
			
		});
	}