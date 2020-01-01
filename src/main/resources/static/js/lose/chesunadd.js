$(function(){
	$("#bc").click(function(){
		addCarhe();
		addon();
	})
})
function chesunadd(data1,data2,data3,data4,data5,id,loss_pic){
	var d={'condition_info_name':data1,
		'loss_number':data2,
		'loss_assessment_price':data3,
		'maintenance_point':data4,
		'loss_assessment_sum':data5,
		'reported_number':id,
		'loss_picture':loss_pic
	}
	$.ajax({
		url:"http://localhost:8080/myinsurance/prospect_lyt/otherchesunadd",
		type:"post",
		contentType:"application/json",
		data:JSON.stringify(d),
		dataType : "json",
		success : function(data) {
			if (data.isResult){
				 alert("他人OK")
			} else {
				alert(data.message)
			}
		},
		error : function() {
			alert("添加失败!");
		}
	})
};


function addCarhe(){
	$(".tr_he").each(function(i){
		var name = $(this).children().children().eq(0).val();
		var number =$(this).children().children().eq(1).val();
		var price = $(this).children().children().eq(2).val();
		var point = $(this).children().children().eq(3).val();
		var sum = $(this).children().children().eq(4).val();
		
		var loss_file=$(this).children().eq(5).children();
		var loss_pic=$(loss_file).val().substring(parseInt($(loss_file).val().lastIndexOf("\\"))+1);
		
		var id=$("#reported_number").val();

		chesunadd(name,number,price,point,sum,id,loss_pic);
		f1(loss_file);
	})
	
}


function addonajax(condition_info_name,loss_number,loss_assessment_price,maintenance_point,loss_assessment_sum,id,loss_pic)
{
	var d={'condition_info_name':condition_info_name,
		'loss_number':loss_number,
		'loss_assessment_price':loss_assessment_price,
		'maintenance_point':maintenance_point,
		'loss_assessment_sum':loss_assessment_sum,
		'reported_number':id,
		'loss_picture':loss_pic
	}
	$.ajax({
		url:"http://localhost:8080/myinsurance/prospect_lyt/mychesunadd",
		type:"post",
		contentType: 'application/json',
		data:JSON.stringify(d),
		dataType : "json",
		success : function(data) {
			if (data.isResult){
				alert("己方OK")
			} else {
				alert(data.message)
			}
		},
		error : function() {
			alert("添加失败!");
		}
	})
};


function addon(){
	$(".addon").each(function(i){
		var condition_info_name = $(this).children().children().eq(0).val();//车损部件名称
		var loss_number =$(this).children().children().eq(1).val();//数量 
		var loss_assessment_price = $(this).children().children().eq(2).val();//定损单价 
		var maintenance_point = $(this).children().children().eq(3).val();//维修点 
		var  loss_assessment_sum = $(this).children().children().eq(4).val();//定损小计
		var loss_file=$(this).children().eq(5).children();
		var loss_pic=$(loss_file).val().substring(parseInt($(loss_file).val().lastIndexOf("\\"))+1);
//		alert($(loss_file).val());
//		alert($(loss_file).val().lastIndexOf("\\"));
//		alert($(loss_file).val().substring(parseInt($(loss_file).val().lastIndexOf("\\"))+1));
		var id=$("#reported_number").val();//外键
		addonajax(condition_info_name,loss_number,loss_assessment_price,maintenance_point,loss_assessment_sum,id,loss_pic);
		f1(loss_file);
	})
	
	
	
}

function f1(loss_file) {
	var mypic = $(loss_file).get(0).files[0];
	var fd = new FormData();
	fd.append("myhead", mypic);
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		//发生延迟所以这样做
		if (xhr.readyState==4 && xhr.status == 404) {
			alert(789789);
		}
	}
	xhr.open("post", "http://localhost:8080/myinsurance/file/image");
	xhr.send(fd);
}
