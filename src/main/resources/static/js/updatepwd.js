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
  				url:"http://localhost:8080/users/updPwd.do",
  				type:"get",
  				data:{"pwd":dataOne,"newPwd":dataTwo},
  				contentType:"application/json;charset=utf-8",
  				dataType:"json",
  				success:function(data){
  					if(data.result){
  						alert(data.message);
  					}else{
  						alert(data.message);
  					}
  				},
  				error:function(){
  					alert("System error!!!!!");
  				}
  		});
}