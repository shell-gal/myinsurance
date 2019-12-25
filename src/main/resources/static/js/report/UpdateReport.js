$(function(){
//按钮点击事件
$("#but1").click(function(){
	//调用修改方法
 query();
 //跳转页面
 window.location.replace("report_allquery.jsp");
})
});

function query(){
	//获取文本框的值
	var reported_number=$("#reported_number").val();
	var informants=$("#informants").val();
	var informants_tel=$("#informants_tel").val();
	var danger_cause=$("#danger_cause").val();
	var province=$("#province").val();
	var city=$("#city").val();
	var road=$("#road").val();
	var reported_time=$("#reported_time").val();
	var road_direction=$("#road_direction").val();
	var dispose_type=$("#dispose_type").val();
	$.ajax({
		url:"http://localhost:8080/report/api/Update",
		type:"GET",
		dataType: "json",
		data:{
			"reported_number":reported_number,
			"informants":informants,
			"informants_tel":informants_tel,
			"danger_cause":danger_cause,
			"province":province,
			"city":city,
			"road":road,
			"reported_time":reported_time,
			"road_direction":road_direction,
			"dispose_type":dispose_type,	
		},
        success:function(data) {
        	alert("修改成功！");
              alert(data.message) 
        } ,
		
		error:function(){
			alert("错误");
		}
      });
   
}

