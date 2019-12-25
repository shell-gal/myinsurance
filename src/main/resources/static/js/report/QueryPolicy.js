//分页属性
var page=1;
var pageNum=1;
var pages=1;
$(function(){
 //调用查询方法
	query(page);
	//按钮点击事件重新调用查询方法
$("#but1").click(function(){
 query(page);
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
	var warranty_number=$("#warranty_number").val();
	var license_number=$("#license_number").val();
	var credentials_number=$("#credentials_number").val();
	$.ajax({
		url:"http://localhost:8080/report/api/QueryPolicy",
		type:"GET",
		dataType: "json",
		data:{
			"warranty_number":warranty_number,
			"license_number":license_number,
			"credentials_number":credentials_number,
			"page":page
		},
        success:function(data) {
        	//判断data.result是否为ture
        	if(data.result){
        		//获取pagenum的属性
	        	pageNum=data.singerData.pageNum;
	        	//获取pages的属性
	        	pages=data.singerData.pages;
	        	var tempHtml ="";
	        	//each循环拼接
	        	$.each(data.singerData.list,function(i,item){
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
	      	    	  +"<td><a href='report_insert.jsp?warranty_number="+item.warranty_number+"'>报案</a></td>"
	      	    	  +"</tr>";
	      	      
	        		});
	        	//清除表格里的内容
		          $("#table tr:gt(0)").remove();
		          //把数据拼接到表格
		          $("#table").append(tempHtml);
		          //把pagenum放到页面
		          $("#firstpage").html(pageNum);
		          //把pages放到页面
		          $("#lastpage").html(pages)
        	}else{
        		alert(data.message);
        	}
        } ,
		
		error:function(){
			alert("错误");
		}
      });

}

