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
		url:"http://localhost:8080/myinsurance/report/QueryPolicy",
		type:"GET",
		dataType: "json",
		data:{
			"warranty_number":warranty_number,
			"license_number":license_number,
			"credentials_number":credentials_number,
			"indexpage":page
		},
        success:function(data) {
			console.log(data.list);
        	//判断data.result是否为ture
        		//获取pagenum的属性
	        	pageNum=data.pageNum;
	        	//获取pages的属性
	        	pages=data.pages;
	        	var tempHtml ="";
	        	//each循环拼接
	        	$.each(data.list,function(i,item){
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
	      	    	  +"<td><a href='reportinsert?warranty_number="+item.warrantyId+"'>报案</a></td>"
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
        } ,
		
		error:function(){
			alert("错误");
		}
      });

}

