var page = 1;
var pageNum = 1;
var pages = 1;
$(function(){
		query(page);
		
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
	$.ajax({
		url:"http://localhost:8080/autoInsurance/api/query",
		data:{"page":page},
		type:"post",
		dataType: "json",
        success:function(data) {
        	pageNum=data.singerData.pageNum;
			pages = data.singerData.pages;
        	var tempHtml ="";
        	$.each(data.singerData.list,function(i,item){
      	      tempHtml+="<tr>"
      	    	  +"<td>"+item.policyholders_number+"</td>"
      	    	  +"<td>"+item.policyholders_name+"</td>"
      	    	  +"<td>"+item.tel+"</td>"
      	    	  +"<td>"+item.credentials_number+"</td>"
      	    	  +"<td>"+item.sex+"</td>"
      	    	  +"<td>"+item. address_shen+item.address_shi+"</td>"
      	    	  +"<td><a href='UpdateInsuranceInfo.jsp?policyholder_number="+item.policyholders_number
      	    	  +"&policyholders_name="+item.policyholders_name
      	    	  +"&credentials_number="+item.credentials_number
      	    	  +"&sex="+item.sex
      	    	  +"&address_shen="+item.address_shen
      	    	  +"&address_shi="+item.address_shi
      	    	  +"&tel="+item.tel+"'>修改</a>&nbsp;&nbsp;"
      	    	  +"<a href='#' onclick='del("+item.policyholders_number+")'>删除</a>" 
      	    	  +"</td>"
      	    	  +"</tr>";
      	    
      	});
          $("#table tr:gt(0)").remove();
          $("#table").append(tempHtml);
          $("#firstpage").html(pageNum);
	  		$("#lastpage").html(pages);
        } ,
		
		error:function(){
			alert("错误");
		}
      });

}

function tiaojian(){
	var policyholders_name=$("#policyholders_name").val();
	var credentials_number=$("#credentials_number").val();
	$.ajax({
		url:"http://localhost:8080/autoInsurance/api/query",
		type:"post",
		dataType: "json",
		data:{
			"page":page,
			"policyholders_name":policyholders_name,
			"credentials_number":credentials_number,
		},
	    success:function(data) {
	    	var tempHtml ="";
	    	pageNum=data.singerData.pageNum;
			pages = data.singerData.pages;
	    	$.each(data.singerData.list,function(i,item){
	  	      tempHtml+="<tr>"
	  	    	  +"<td>"+item.policyholders_number+"</td>"
	  	    	  +"<td>"+item.policyholders_name+"</td>"
	  	    	  +"<td>"+item.tel+"</td>"
	  	    	  +"<td>"+item.credentials_number+"</td>"
	  	    	  +"<td>"+item.sex+"</td>"
	  	    	  +"<td>"+item. address_shen+item.address_shi+"</td>"
	  	    	  +"<td><a href=''>修改</a>&nbsp;" 
	  	    	  +"<a href='#' onclick='del("+item.policyholders_number+")' >删除</a>" 
	  	    	  +"</td>"
	  	    	  +"</tr>";
	  	      
	  	});
	      $("#table tr:gt(0)").remove();
	      $("#table").append(tempHtml);
	      $("#firstpage").html(pageNum);
	  		$("#lastpage").html(pages);
	      
	    } ,
		
		error:function(){
			alert("错误");
		}
	  });
}


function del(data){
	if(confirm("是否删除？")){
		$.ajax({
	  				url:"http://localhost:8080/autoInsurance/api/PolicyHolders_delete",
	  				type:"get",
	  				data:{"policyholders_number":data},
	  				contentType:"application/json;charset=utf-8",	
	  				dataType:"json",
	  				success:function(data){
	  					
	  					alert(data.message);
	  					
	  				}
	  				
	  			});
		   
	}
	window.location.reload();
}


