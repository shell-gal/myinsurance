$(function(){
	$("#updPwd").click(function(){
		var pwd=$("#pwd").val();
		var newPwdOne=$("#newPwdOne").val();
		var newPwdTwo=$("#newPwdTwo").val();
		if(newPwdOne!=newPwdTwo){
			alert("密码不一致！");
			$("#newPwdOne").val("");
			$("#newPwdTwo").val("");
			return;
		}
		updPwd(pwd,newPwdOne);
	})
});


//修改密码
function updPwd(dataOne,dataTwo){
	$.ajax({
  				url:"http://localhost:8080/myinsurance/updatepwd",
  				type:"get",
  				data:{"pwd":dataOne,"newPwd":dataTwo},
  				contentType:"application/json;charset=utf-8",
  				dataType:"json",
  				success:function(data){
  					if(data.resultstatus==200){
  						alert(data.message+",请重新登录！");
                          window.location.href="http://localhost:8080/myinsurance/loginout";
  					}else{
  						alert(data.message);
  					}
  				},
  				error:function(){
  					alert("System error!!!!!");
  				}
  		});
}


function  loginout() {
	$.ajax({
		type:"get",
		url:"http://localhost:8080/myinsurance/loginout",
		dataType:"json",
		success:function(data){
			if(data.resultstatus==200){
				alert("请重新登录！")
				window.location.href("login.html");
			}else{
				alert("修改失败！");
			}
		},
		error:function(){
			alert("System error!!!!!");
		}
	});
}