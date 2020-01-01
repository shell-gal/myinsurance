//分页属性
var page=1;
var pageNum=1;
var pages=1;

$(function(){
 query(page);
 //按钮点击事件重新调用查询方法
$("#but1").click(function(){
 query(pageNum);
})

//分页下一页
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
	//分页上一页
	$("#jian").click(function(){
		pageNum=Number(pageNum)-1;
		if(pageNum<1){
			alert("没有上一页");
			pageNum=1;
		}else{
			page = Number(page)-1;
			query(page);
		}
		
	})

});


function query(page){
	//获取文本框的值
	var reported_number=$("#reported_number").val();
	$.ajax({
		url:"http://localhost:8080/myinsurance/report/AllQuery",
		type:"GET",
		dataType: "json",
		data:{
			"reported_number":reported_number,
			"indexpage":page
		},
        success:function(data) {
        	//获取pagenum的属性
        	pageNum=data.pageNum;
        	//获取pages的属性
        	pages=data.pages;
        	var tempHtml ="";
        	//each循环拼接
        	$.each(data.list,function(i,item){
      	      tempHtml+="<tr>"
      	    	  +"<td>"+item.reported_info.reported_number+"</td>"
     	    	  +"<td>"+item.policyholders_info.policyholders_name+"</td>"
     	    	  +"<td>"+item.recognizee_info.recognizee_name+"</td>"
     	    	  +"<td>"+item.license_number+"</td>"
     	    	  +"<td>"+item.reported_info.informants+"</td>"
     	    	  +"<td>"+item.reported_info.informants_tel+"</td>"
     	    	  +"<td>"+item.reported_info.danger_cause+"</td>"
     	    	  +"<td>"+item.reported_info.province+item.reported_info.city+item.reported_info.road+"</td>"
     	    	  +"<td>"+item.reported_info.reported_time+"</td>"
     	    	  +"<td>"+item.reported_info.dispose_type+"</td>"
      	    	  +"<td><a href='report_upd.jsp?reported_number="+item.reported_info.reported_number+"&informants="+item.reported_info.informants+"&informants_tel="+item.reported_info.informants_tel+"&danger_cause="+item.reported_info.danger_cause+"&road="+item.reported_info.road+"&dispose_type="+item.reported_info.dispose_type+"'>修改</a></td>"
      	    	  +"</tr>";
      	});
        	//消除表格里的内容
          $("#table tr:gt(0)").remove();
          //给表格拼接内容
          $("#table").append(tempHtml);
          //把pagenum放到页面
          $("#firstpage").html(pageNum);
          //把pages放到页面
          $("#lastpage").html(pages)
        } ,
		
		error:function(){
			alert("错误");
		}
      });

}

