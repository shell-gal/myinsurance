var page=1;
var pageNum=1;
var pages=1;
$(function(){
	query(page);
	$("#reset_but").click(function(){
		$("#reported_number").val("")
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

	$("#look_but").click(function () {
		query(page)
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
	var d={"reported_number":reported_number,"page":page}
	$.ajax({
		url:"/myinsurance/prospect_lyt/Query",
		type:"post",
		contentType: 'application/json',
		data:JSON.stringify(d),
        success:function(data) {
        	if(data.result){
        		var tempHtml ="";
            	$.each(data.singerData.list,function(i,item){
          	      tempHtml+="<tr>"
          	    	  +"<td>"+item.caseId+"</td>"
          	    	  +"<td>"+item.reporterName+"</td>"
          	    	  +"<td>"+item.reporterPhone+"</td>"
          	    	  +"<td>"+item.dangerDate+"</td>"
          	    	  +"<td>"+item.dangerAddressProvince+item.dangerAddressCity+item.detailAddress+item.roadDirection+"</td>"
          	    	  +"<td>"+item.dangerCause+"</td>"
          	    	  +"<td>"+item.dangerType+"</td>"
          	    	  +"<td>"+item.caseStatus+"</td>"
          	    	  // +"<td><a th:href="@{'/prospect_lyt/loss_car'}" >定损管理</a></td>"
					  +"<td><a onclick='tiaozhuan("+item.caseId+")'>定损管理</a></td>"
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
function tiaozhuan(caseId){
	window.location.href="/myinsurance/prospect_lyt/loss_car?caseId="+caseId

}