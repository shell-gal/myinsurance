$(function(){
	$("#login_btn").click(function(){
		login();
	})
	
		// loginOut();
});

function login(){
	$.ajax({
		url:"login.do",
		type:"get",
		data:{"username":$("#username").val(),"password":$("#password").val()},
		contentType:"application/json;charset=utf-8",
		dataType:"json",
		success:function(){
			// if(data.result){
			// 	location.href="index.html"
			// }else{
			// 	alert(data.message);
			// 	$("#password").val("");
			// }
			alert("Success!!!!!");
		},
		error:function(){
			alert("System error!!!!!");
		}
});
}

function loginOut(){
	$.ajax({
		url:"http://localhost:8080/insurance/loginOut.do",
		type:"get",
		contentType:"application/json;charset=utf-8",
		dataType:"json",
		success:function(data){
		},
		error:function(){
			alert("System error!!!!!");
		}
});
}
