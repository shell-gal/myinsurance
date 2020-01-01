$(function(){
	//调用查询方法
	query()
	//按钮点击事件
	$("#but1").click(function(){
		//获取文本框的值
		var informants=$("#informants").val();
		var informants_tel=$("#informants_tel").val();
		var danger_cause=$("#danger_cause").val();
		var province =$("#province").val();
		var city =$("#city").val();
		var road =$("#road").val();
		var reported_time =$("#reported_time").val();
		var road_direction =$("#road_direction").val();
		var dispose_type =$("#dispose_type").val();
		var warranty_number=$("#warranty_number").val();
		var case_state="已报案";
		var data={
			"reporterName":informants,
			"reporterPhone":informants_tel,
			"dangerCause":danger_cause,
			"dangerAddressProvince":province,
			"dangerAddressCity":city,
			"detailAddress":road,
			"dangerDate":reported_time,
			"roadDirection":road_direction,
			"dangerType":dispose_type,
			"caseStatus":"已报案",
			"warrantyId":warranty_number
		};
           $.ajax({
        	    url:"http://localhost:8080/myinsurance/report/ReportInsert",
        	    type:"post",
        	    dataType:"Json",
			   contentType:"application/json;charset=utf-8",
			    data:JSON.stringify(data) ,
			    success:function(data){
        	    	if (data==true) {
						alert("报案成功！");
						// 跳转页面report_allquery
						window.location.href("http://localhost:8080/myinsurance/report/reportallquery");
					}
        	    	else {
						alert("系统错误！");
					}

			    }
        	   
           })	;

	})
	
	
})


function query(){
	//获取文本框的值
	var warranty_number=$("#warranty_number").val();
	
	$.ajax({
		url:"http://localhost:8080/myinsurance/report/Asingle",
		type:"post",
        dataType: "json",
        data:{"warranty_number":warranty_number
        	},
        success: function(data) {
            
        	var tempHtml = "";
        	//each循环拼接
        	$.each(data,function(i,item){
        		tempHtml+="<tr>"
        	    	  +"<td>"+item.warrantyId+"</td>"
        	    	  +"<td>"+item.policyholders.policyholderName+"</td>"
        	    	  +"<td>"+item.policyholders.policyholderCardid+"</td>"
        	    	  +"<td>"+item.recognizee.recognizeeName+"</td>"
        	    	  +"<td>"+item.recognizee.recognizeePhone+"</td>"
        	    	  +"<td>"+render(item.insuranceBeginDate)+"</td>"
        	    	  +"<td>"+render(item.insuranceEndDate)+"</td>"
        	    	  +"<td>"+item.dirveingLicense+"</td>"
        	    	  +"<td>"+item.carNumber+"</td>"
        	    	  +"</tr>";
        	});
        	//把数据拼接到表格
            $("#table").append(tempHtml);
        } ,
        	error:function(){
        		   alert("错误");
        	 }
      });
   
  
}
