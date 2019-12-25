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
           $.ajax({
        	    url:"http://localhost:8080/report/api/ReportInsert",
        	    type:"post",
        	    dataType:"Json",
			    data: {
			        	"informants":informants,
			        	"informants_tel":informants_tel,
			        	"danger_cause":danger_cause,
			        	"province":province,
			        	"city":city,
			        	"road":road,
			        	"reported_time":reported_time,
			        	"road_direction":road_direction,
			        	"dispose_type":dispose_type,
			        	"case_state":"已报案",
			        	"warranty_number":warranty_number
			    },
			    success:function(data){
			    	alert(data.message);
			    }
        	   
           })	
           //跳转页面report_allquery
           window.location.replace("report_allquery.jsp");
	})
	
	
})


function query(){
	//获取文本框的值
	var warranty_number=$("#warranty_number").val();
	
	$.ajax({
		url:"http://localhost:8080/report/api/Asingle",
		type:"post",
        dataType: "json",
        data:{"warranty_number":warranty_number
        	},
        success: function(data) {
            
        	var tempHtml = "";
        	//each循环拼接
        	$.each(data.datas,function(i,item){
        		tempHtml+="<tr>"
        	    	  +"<td>"+item.warranty_number+"</td>"
        	    	  +"<td>"+item.policyholders.policyholders_name+"</td>"
        	    	  +"<td>"+item.policyholders.credentials_number+"</td>"
        	    	  +"<td>"+item.recognizee.recognizee_name+"</td>"
        	    	  +"<td>"+item.recognizee.tel+"</td>"
        	    	  +"<td>"+item.insurance_begin_date+"</td>"
        	    	  +"<td>"+item.insurance_end_date+"</td>"
        	    	  +"<td>"+item.sail_number+"</td>"
        	    	  +"<td>"+item.license_number+"</td>"
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
