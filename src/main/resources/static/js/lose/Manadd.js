var reported_number = 1;
$(function() {
	qianyi();
	reported_number = $("#reported_number").val();
	$("#bc").click(function() {
		Manaddeach();
		alert("添加成功！");
	})
})
function Manadd(wounded_name, wounded_site, wounded_money, subtotal_costs,id) {
	$.ajax({
		url : "http://localhost:8080/Man/Manadd.do",
		type : "post",
		data : {
			"wounded_name" : wounded_name,
			"wounded_site" : wounded_site,
			"wounded_money" : wounded_money,
			"subtotal_costs" : subtotal_costs,
			"reported_number" : reported_number,
			'reported_number':id
		},
		dataType : "json",
		success : function(data) {
			
		},
		error : function() {
			alert("添加失败！");
		}
	});
}

function Manaddeach() {
	$(".app").each(function(i) {
		var wounded_name = $(this).children().children().eq(0).val();
		var wounded_site = $(this).children().children().eq(1).val();
		var wounded_money = $(this).children().children().eq(2).val();
		var subtotal_costs = $(this).children().children().eq(3).val();
		var id=$("#reported_number").val();
		Manadd(wounded_name, wounded_site, wounded_money, subtotal_costs,id);
	})

}

function qianyi() {
	$(".wounded_money").change(function() {
		var a = $(this).parent().parent().children().eq(2).children().val();
		$(this).parent().parent().children().eq(3).children().val(a);
	})
}

// wqeqeqweqew
$("#add_but_ren").click(function() {
	$("#vg").before("<tr class='app'>"
	+ "<td><input type='text' class='text'/></td>"
	+ "<td><input type='text' class='text'/></td>"
	+ "<td><input type='text' class='wounded_money' class='text'/></td>"
	+ "<td><input type='text' class='text' disabled></td>"
	+ "<td><input id=\"reported_number\" type=\"hidden\" value=\"1\" /></td>"
	+ "</tr>")
			qianyi();
		})
$("#rem_but_ren").click(function() {
	var index = $("#vg").prev().attr("class");
	if (index != "fg") {
		$("#vg").prev().remove()
	}
})
