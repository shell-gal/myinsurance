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
			url : "http://localhost:8080/myinsurance/insurance/insurancequery",
			type : "post",
			data: {"indexpage":pagenum,"warranty_number":warranty_number,"policyholders_name":policyholders_name,"recognizee_name":recognizee_name},
			dataType : "json",

			success : function(data) {
				var insurance ="";
				$("#pagenum").text(data.pageNum)
				console.log(data.list);
				$.each(data.list,function(i,item){
					console.log(item.policyholders.policyholderName);
					var insurancehtml= "<tr style='height: 40px;' class='remove'>"
									+"<td>"+item['warrantyId']+"</td>"
									+"<td>"+item.policyholders.policyholderName+"</td>"
									+"<td>"+item.recognizee.recognizeeName+"</td>"
									+"<td>"+item.recognizee.recognizeeCardid+"</td>"
									+"<td>"+item['carNumber']+"</td>"
									+"<td>"+render(item['insuranceBeginDate'])+"</td>"
									+"<td>"+render(item['insuranceEndDate'])+"</td>"
									+"<td>"
									+"<a href='Modificationinsurance?warranty_number="+item['warrantyId']+"&pageNum="+data.pageNum+"'>"
									+"<button type='button' class='btn btn-primary' style='height: 35px;'>修改</button></a>&nbsp;"
									+"<a href='Casemessage?warranty_number="+item['warrantyId']+"'>"
									+"<button type='button' class='btn btn-primary' style='height: 35px;'>案件</button></a>&nbsp;"
									+"<button type='button' class='btn btn-primary'  data-toggle='modal' onclick='baodanid("+item['warrantyId']+")' data-target='#myModal' style='height: 35px;'>续保</button>&nbsp;"
									+"<a href='continue_insure.jsp?warranty_number="+item['warrantyId']+"'>"
									+"<button type='button' class='btn btn-primary' style='height: 35px;'>继续投保</button></a>"
									+"</td>"
									+"</tr>"
					insurance+=insurancehtml;
				});
				$(".remove").remove();
				$("#append").append(insurance);
			},
			error : function() {
				alert("系统错误，请联系管理员！");
			}
			
		});
	}



	function render(time) {
		var d = new Date(time);
		var times=d.getFullYear() + '-' + (d.getMonth() + 1) + '-';
	    var day=d.getDate();
	    if (parseInt(day)<10){
	    	day='0'+day;
		}
	    times+=day;
		return times;
	}
