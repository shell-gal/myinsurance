var page = 1;
var pageNum = 1;
var pages = 1;
var flag=1;
var param="";
$(function(){
	//默然按照员工姓名查询
	employees_find(1);
	//加载员工数据
	// load(page,1,param);
	
	//下一页点击事件
	// $("#jia").click(function(){
	// 	//当前页加一
	// 	pageNum = Number(pageNum)+1;
	// 	//如果当前页大于总页数
	// 	if(pageNum > pages){
	// 		//弹出提示信息并将最大页码赋值给当前页
	// 		alert("没有下一页");
	// 		pageNum=pages;
	// 	} else {
	// 		//加载页面
	// 		load(pageNum,flag,param);
	// 	}
	//
	// })
	
	//上一页点击事件
	// $("#jian").click(function(){
	// 	//当前页减一
	// 	pageNum=Number(pageNum)-1;
	// 	//如果当前页码少于1
	// 	if(pageNum<1){
	// 		//弹出提示信息并将页码赋值为1
	// 		alert("没有上一页");
	// 		pageNum=1;
	// 	}else{
	// 		//调用方法
	// 		load(pageNum,flag,param);
	// 	}
	//
	// })
});

//删除员工信息
function del_employeesInfo(data){
	if(confirm("是否删除员工信息？")){
		$.ajax({
	  				url:"http://localhost:8080/employee/delEmployee.do",
	  				type:"get",
	  				data:{"id":data},//员工编号
	  				contentType:"application/json;charset=utf-8",
	  				dataType:"json",
	  				success:function(data){
	  					//弹出提示信息
	  					alert(data.message);
	  					//重新加载数据
	  					load(page,flag,param);
	  				},
	  				error:function(){
	  					alert("System error!!!!!");
	  				}
	  			});
	}
}

function onload(indexpage,flag,param) {
	 $.ajax({
		type:"post",
		url:"http://localhost:8080/myinsurance/pages/welcome/ajaxload",
		data:{"indexpage":indexpage,"flag":flag,"param":param},
		 // contentType:"application/json;charset=utf-8",
		 dataType:"json",
		 success:function (pageInfo) {
			console.log(pageInfo)
			var html="";
			 $.each(pageInfo.list, function(i, d) {
				 html += "<tr class='tr'>"
					 +"<th>"+d['userId']+"</th>"
					 +"<th>"+d['userName']+"</th>"
					 +"<th>"+d['userSex']+"</th>"
					 +"<th>"+d['depart']+"</th>"

					 +"<th>"+d['address']+"</th>"

					 +"<th>"+d['userPhone']+"</th>"
					 +"<th>"+d['userEmail']+"</th>"

					 +"<th>"
					 +	"<a href='employees_upd.jsp?userId="+d['userId']+"' target='aa'>"
					 +	"	<button type='button' class='btn btn-sm btn-primary'>修改</button>"

					 +"</a>&nbsp;&nbsp;&nbsp;"
					 +"	<button type='button' class='btn btn-sm btn-danger' onclick='del_employeesInfo("+d['userId']+")'>离职	</button>"
					 +"</th>	"
					 +"</tr>";
			 });
			 //清空所有数据行
			 $(".tr").remove();
			 //将拼接的字符串拼接至表格
			 $("#tab_info").append(html);
			 //将当前页显示至页面
			 $("#firstpage").html(pageNum);
			 //将总页数显示至页面
			 $("#lastpage").html(pages);
			 //将当前页显示至页面
			 $("#firstpage").html(pageNum);
			 //将总页数显示至页面
			 $("#lastpage").html(pages);
		 },
		 error:function(){
			 alert("System error!!!!!");
		 }
	 });
}



//下拉框选中事件
function employees_find(flag){
	//隐藏所有搜索框
	$(".input_find").hide();
	//标识为1按姓名查询
	if(flag==1){
		//下拉框显示字体为员工姓名
		$("#find_title").text("员工姓名");
		//员工名的搜索框显示
		$("#user_name").show();
		flag=1;
	};
	if(flag==2){
		//下拉框显示字体为员工编号
		$("#find_title").text("员工编号");
		//员工名的搜索框显示
		$("#user_id").show();
		flag=2;
	};
	if(flag==3){
		//下拉框显示字体为员工部门
		$("#find_title").text("员工部门");
		//员工名的搜索框显示
		$("#user_department").show();
		flag=3;
	};
}

//按照条件查找员工信息

function find(flag){
	flag=flag;
	if(flag==1){
		//获取第一个框的值
		param=$(".find_name1").val();

		onload(page,flag,param);
	};
	if(flag==2){
		param=$(".find_name2").val();
		onload(page,flag,param);
	};
	if(flag==3){
		param=$(".find_name3").val();
		onload(page,flag,param);
	};	 
}
