var page=1;
var pageNum=1;
var pages=1;
$(function(){
	query(page);
	$("#select_but").click(function(){
		query(page)
	})
	
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
})

function query(page){
	var reported_number=$("#reported_number").val();
	
	$.ajax({
		url:"http://localhost:8080/lose/Query",
		type:"GET",
		dataType: "json",
		data:{
			"reported_number":reported_number,
			"page":page
			
		},
        success:function(data) {
        	
        	if(data.result){
        		var tempHtml ="";
            	$.each(data.singerData.list,function(i,item){
          	      tempHtml+="<tr>"
          	    	  +"<td>"+item.reported_number+"</td>"
          	    	  +"<td>"+item.informants+"</td>"
          	    	  +"<td>"+item.informants_tel+"</td>"
          	    	  +"<td>"+item.danger_cause+"</td>"
          	    	  +"<td>"+item.province+item.city+item.road+"</td>"
          	    	  +"<td>"+item.reported_time+"</td>"
          	    	  +"<td>"+item.dispose_type+"</td>"
          	    	  +"<td>"+item.case_state+"</td>"
          	    	  +"<td><a href='../section_dwl/loss_thing.jsp?reported_number="+item.reported_number+"'>物品定损</a></td>"
          	    	  +"</tr>";
          	      
          	});
            	pageNum=data.singerData.pageNum;
            	pages=data.singerData.pages;
              $("#prospect_table tr:gt(0)").remove();
              $("#prospect_table").append(tempHtml);
              $("#firstpage").html(pageNum);
              $("#lastpage").html(pages)
        	}else{
        	alert(data.message)
        	$("#prospect_table tr:gt(0)").remove();
        	$("#firstpage").html(pageNum);
            $("#lastpage").html(pages)
        	}
          
        } ,
		
		error:function(){
			alert("错误");
		}
      });

}