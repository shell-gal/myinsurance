var reported_number = 1;
$(function() {
	suanfa();
	reported_number = $("#reported_number").val();
	$("#bc").click(function() {
		thingaddeach();
		alert("添加成功！");
	})
})
function thingadd(object_info_name, loss_number, price, compensate,
		loss_assessment_sum,id,loss_pic) {
	$.ajax({
		url : "http://localhost:8080/Thing/Thingadd.do",
		type : "post",
		data : {
			"object_info_name" : object_info_name,
			"loss_number" : loss_number,
			"price" : price,
			"compensate" : compensate,
			"loss_assessment_sum" : loss_assessment_sum,
			"reported_number" : reported_number,
			"reported_number":id,
			'loss_picture':loss_pic
		},
		dataType : "json",
		success : function(data) {
			
		},
		error : function() {
			alert("添加失败！");
		}
	});
}

function thingaddeach() {
	$(".add").each(function(i) {
		var object_info_name = $(this).children().children().eq(0).val();
		var loss_number = $(this).children().children().eq(1).val();
		var price = $(this).children().children().eq(2).val();
		var compensate = $(this).children().children().eq(3).val();
		var loss_assessment_sum = $(this).children().children().eq(4).val();
		
		var loss_file=$(this).children().eq(5).children();
		var loss_pic=$(loss_file).val().substring(parseInt($(loss_file).val().lastIndexOf("\\"))+1);
		
		
		var id=$("#reported_number").val();
		thingadd(object_info_name, loss_number, price, compensate,loss_assessment_sum
		,id,loss_pic);
		f1(loss_file);
	})
}

function suanfa() {
	$("input").change(function() {
		var a = $(this).parent().parent().children().eq(1).children().val();
		var b = $(this).parent().parent().children().eq(2).children().val();
		var c = a * b;
		$(this).parent().parent().children().eq(4).children().val(c);
	})
}

$("#add_but_2").click(function() {
		$("#butt").before("<tr class='add'>"
		+ "<td><input type='text' class='text'/></td>"
		+ "<td><input type='text' class='text' /></td>"
		+ "<td><input type='text' class='text'/></td>"
		+ "<td><input type='text' class='text' /></td>"
		+ "<td><input type='text' class='text' disabled></td>"
		+ "<td><input type='file' name='nfile'></td>"+ "</tr>"
		+ + "<td><input id=\"reported_number\" type=\"hidden\" value=\"1\" /></td>"
		+ "</tr>")
				suanfa();
			})
$("#rem_but_2").click(function() {
	var name = $("#butt").prev().attr("class");
	if (name != "tr") {
		$("#butt").prev().remove()
	}
})



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
	xhr.open("post", "http://localhost:8080/lose/doUpload");
	xhr.send(fd);
}

