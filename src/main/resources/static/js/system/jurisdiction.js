var page=1;
var pageNum = 1;
var pages = 1;
$(function() {
	
	queryjurisdiction();
	$("#findOfId").click(function(){
		queryjurisdiction()
	})
	$("#add").click(function(){
		addjurisdiction()
	})
	updjurisdiction();
	
	
	$("#jia").click(function(){
		pageNum = Number(pageNum)+1;
		if(pageNum > pages){
			alert("没有下一页");
			pageNum=pages;
		} else {
			queryjurisdiction();
		}
		
	})
	
	$("#jian").click(function(){
		pageNum=Number(pageNum)-1;
		if(pageNum<1){
			alert("没有上一页");
			pageNum=1;
		}else{
			queryjurisdiction();
		}
		
	})
	
});

// 查询信息
function queryjurisdiction() {
	var rightid=$("#right_id").val();
	$.ajax({
		url : "http://localhost:8080/Jurisdiction/jurisdictionQuery.do",
		type : "get",
		data : {'rightid':rightid,"page":pageNum},
		contentType : "application/json;charset=utf-8",
		dataType : "json",
		success : function(data) {
			pageNum=data.singerData.pageNum;
			pages = data.singerData.pages;
			var Html = "";
			$.each(data.singerData.list,function(i, r) {
				Html +="<tr class='tr'>"
					   +"<td>"+r.rightid+"</td>"
					   +"<td>"+r.rightname +"</td>"
					   +"<td class='col-md-3'><input type='button' class='btn btn-primary' onclick='del("+r.rightid+")' value='删除'/>&nbsp;<input type='button' data-toggle='modal' " +
					   		"data-target='.myModal_upd' class='btn btn-primary' onclick='find("+r.rightid+")' value='修改'/></td>"
					   +"</tr>"

				});
			$(".tr").remove();
			$("#table").append(Html);
			$("#firstpage").html(pageNum);
	  		$("#lastpage").html(pages);
		},
		error : function() {
		}
	});
}



function find(data){
	$("#a").val(data);
}


//修改权限信息
function updjurisdiction(){
	$("#upd_").click(function(){
	$.ajax({
		url:"http://localhost:8080/Jurisdiction/jurisdictionUpd.do",
		type:"post",
		data:{
			'rightname':$("#quanxian_name").val(),
			'rightid':$("#a").val()
		},
		dataType : "json",
		success : function(data) {
			alert("修改成功！");
			$("#modal_close").click();
			queryjurisdiction();
			$("#quanxian_name").val("");
		},
		error : function() {
		}
	});
	});
}



//添加权限信息
function addjurisdiction(){
	var rightName=$("#add_rightname").val();
	$.ajax({
		url:"http://localhost:8080/Jurisdiction/jurisdictionAdd.do",
		type:"post",
		data:{'rightname':rightName},
		dataType : "json",
		success : function(data) {
			alert("添加成功！")
			queryjurisdiction();
			$("#add_close").click();
			$("#add_rightname").val("");
		},
		error : function() {
		}
	})
}

//删除权限信息
function del(data){
	if(confirm("是否删除权限信息？")){
		$.ajax({
	  				url:"http://localhost:8080/Jurisdiction/deleteRights",
	  				type:"get",
	  				data:{"rightid":data},
	  				contentType:"application/json;charset=utf-8",
	  				dataType:"json",
	  				success:function(data){
	  					if(data==true){
	  						alert("删除成功");
	  						queryjurisdiction();
	  					}
	  					if(data==flase){
	  						alert("删除失败");
	  					}
	  				},
	  			})
	}
}