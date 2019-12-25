var page=1;
var pageNum = 1;
var pages = 1;
$(function() {

	queryroles();
	$("#add").click(function(){
		addroles()
	})
	$("#jia").click(function(){
		pageNum = Number(pageNum)+1;
		if(pageNum > pages){
			alert("没有下一页");
			pageNum=pages;
		} else {
			queryroles();
		}
		
	})
	
	$("#jian").click(function(){
		pageNum=Number(pageNum)-1;
		if(pageNum<1){
			alert("没有上一页");
			pageNum=1;
		}else{
			queryroles();
		}
	})
	
	$('input:checkbox').each(function() {
        if ($(this).attr('checked') ==true) {
                alert($(this).val());
        }
    });
	
	
	
	
	
	role_right_set();
	
	del_();
});

// 查询信息
function queryroles() {
	$.ajax({
		url : "http://localhost:8080/rolesmanage/rolesmanageQuery.do",
		type : "get",
		data : {"page":pageNum},
		contentType : "application/json;charset=utf-8",
		dataType : "json",
		success : function(data) {
			pageNum=data.singerData.pageNum;
			pages = data.singerData.pages;
			var Html = "";
			$.each(data.singerData.list,function(i, r) {
				Html +="<tr class='tr'>"
					   +"<td>"+r.roleid+"</td>"
					   +"<td>"+r.rolename +"</td>"
					   +"<td><input type='button' onclick='find("+r.roleid+",\""+r.rolename+"\")' class='btn btn-primary btn-sm' data-toggle='modal' data-target='#myModal' value='赋予权限'>&nbsp;&nbsp;" +
					  "<input type='button' onclick='del_right("+r.roleid+",\""+r.rolename+"\")' class='btn btn-primary btn-sm' data-toggle='modal' data-target='.ModalOfRight' value='取消权限'>&nbsp;&nbsp;" +		
					   "<input type='button' onclick='del("+r.roleid+")' class='btn btn-primary btn-sm'  value='删除角色'></td>"
					   +"</tr>"
				});
			$(".tr").remove();
			$("#roles_lzw").append(Html);
			$("#firstpage").html(pageNum);
	  		$("#lastpage").html(pages);
	  		
		},
		error : function() {
		}
	});
}

function find(data,data2){
    $("#b").val(data);
    $("#role_name").html(data2);
    
    $.ajax({
		url:"http://localhost:8080/rolesmanage/getQxOfRoleId.do",
		type:"post",
		data:{"roleid":data},
		dataType : "json",
		success : function(data) {
			var quanx="";
			$.each(data.datas,function(i, r) {
				quanx +=r.rightname+","
			});
			$("#quan_x").html(quanx);
		},
		error : function() {
		}
	});
    
    getAllRight(data);
    
}



function del_right(data,data2){
	 $(".roleNumber_del").val(data);
	 $("#role_nameOfRight").html(data2);
	    
	    $.ajax({
			url:"http://localhost:8080/rolesmanage/getQxOfRoleId.do",
			type:"post",
			data:{"roleid":data},
			dataType : "json",
			success : function(data) {
				var quanx="";
				$.each(data.datas,function(i, r) {
					quanx +=r.rightname+","
				});
				$("#quan_xOfRight").html(quanx);
			},
			error : function() {
			}
		});
	    
	    getRightOfRole(data);
}


//修改权限信息
function role_right_set(){
	$("#upd_").click(function(){
		var obj=document.getElementsByName('check');
		for(var i=0; i<obj.length; i++){ 
    		if(obj[i].checked){
    			$.ajax({
	    			url:"http://localhost:8080/rolesmanage/setRoleAndRight.do",
	    			type:"get",
	    			data:{"roleid":$("#b").val(),"rightid":obj[i].value},
	    			dataType : "json",
	    			success : function(data) {
	    				
	    			},
	    			error : function() {
	    			}
    			});
    		}	
    	} 
		//关闭模态框
		$("#modal_close").click();
		
		//还原复选框
		for(var i=0; i<obj.length; i++){
			if(obj[i].checked){
				obj[i].click();
			}
		}
		
		alert("赋予权限成功！");
	});
	
	
}














//添加权限信息
function addroles(){
	var rolename=$("#add_rolename").val();
	$.ajax({
		url:"http://localhost:8080/rolesmanage/rolesmanageAdd.do",
		type:"post",
		data:{'rolename':rolename},
		dataType : "json",
		success : function(data) {
			alert("添加成功！")
			queryroles();
			$("#add_close").click();
			$("#add_rolename").val("");
		},
		error : function() {
		}
	})
}

//删除角色信息
function del(data){
	if(confirm("是否删除权限信息？")){
		$.ajax({
	  				url:"http://localhost:8080/rolesmanage/rolesmanageDel.do",
	  				type:"get",
	  				data:{"rightid":data},
	  				contentType:"application/json;charset=utf-8",
	  				dataType:"json",
	  				success:function(data){
	  					if(data==true){
	  						alert("删除成功");
	  						queryroles();
	  					}
	  					if(data==flase){
	  						alert("删除失败");
	  					}
	  				},
	  			})
	}
}


//获取角色没有的所有权限
function getAllRight(data){
	$.ajax({
		url:"http://localhost:8080/rolesmanage/getAllRight.do",
		type:"get",
		data:{"roleid":data},
		dataType : "json",
		success : function(data) {
			$("#rightAll").html("");
			var right="";
			$.each(data.datas,function(i, r) {
				
				right+="<input type='checkbox' class='check' name='check' id='rightb' value='"+r.rightid+"'/>"
				+r.rightname+"&nbsp;&nbsp;&nbsp;&nbsp;"
				if(i%3==0&i!=0){
					right+="<br>"
				}
			});
			$("#rightAll").append(right);
		},
		error : function() {
		}
	})
}



function getRightOfRole(data){
	$.ajax({
		url:"http://localhost:8080/rolesmanage/getQxOfRoleId.do",
		type:"get",
		data:{"roleid":data},
		dataType : "json",
		success : function(data) {
			$("#rightAllOfRight").html("");
			var right="";
			$.each(data.datas,function(i, r) {
				
				right+="<input type='checkbox' class='check' name='check_del' id='rightb' value='"+r.rightid+"'/>"
				+r.rightname+"&nbsp;&nbsp;&nbsp;&nbsp;"
				if(i%3==0&i!=0){
					right+="<br>"
				}
			});
			$("#rightAllOfRight").append(right);
		},
		error : function() {
		}
	})
}



//删除权限信息
function del_(){
	$("#del_OfRight").click(function(){
		var obj=document.getElementsByName('check_del');
		for(var i=0; i<obj.length; i++){ 
    		if(obj[i].checked){
    			$.ajax({
	    			url:"http://localhost:8080/rolesmanage/delRoleAndRight.do",
	    			type:"get",
	    			data:{"roleid":$(".roleNumber_del").val(),"rightid":obj[i].value},
	    			dataType : "json",
	    			success : function(data) {
	    				
	    			},
	    			error : function() {
	    			}
    			});
    		}	
    	} 
		//关闭模态框
		$("#modal_closeOfRight").click();
		
		//还原复选框
		for(var i=0; i<obj.length; i++){
			if(obj[i].checked){
				obj[i].click();
			}
		}
		
		alert("赋予删除成功！");
	});
	
	
}

