function suanfa(){
		$("input").change(function(){
			var a=$(this).parent().parent().children().eq(1).children().val();
			var b=$(this).parent().parent().children().eq(2).children().val();
			var c=a*b;
			$(this).parent().parent().children().eq(4).children().val(c);
		})
}
$(function(){
	suanfa();
	$("#add_but").click(function(){
			$("#mycar").before("<tr class='tr_he' >"
					+"<td><input type='text'  class='text' class='chesun' /></td>"
					+"<td><input type='text' class='text' class='chesun'/></td>"
					+"<td><input type='text' class='text' class='chesun'/></td>"
					+"<td><input type='text' class='text'  class='chesun'/></td>"
					+"<td><input type='text' class='text' disabled></td>"
					+"<td><input type='file' name='nfile'></td>"
					+"</tr>")
					suanfa();
	})
$("#rem_but").click(function(){
		var index = $("#mycar").prev().attr("class");
		 if(index!="tr tr_he"){
		 	$("#mycar").prev().remove()
		 }
	})
	$("#add_but_2").click(function(){
			$("#butt").before("<tr class='addon'>"
					+"<td><input type='text' class='text'/></td>"
					+"<td><input type='text' class='text' /></td>"
					+"<td><input type='text' class='text'/></td>"
					+"<td><input type='text' class='text' /></td>"
					+"<td><input type='text' class='text' disabled></td>"
					+"<td><input type='file' name='nfile'></td>"
					+"</tr>")
					suanfa();
	})
	$("#rem_but_2").click(function(){
		 var index = $("#butt").prev().attr("class");
		 alert(1);
		 alert(index)
		 if(index!="tr addon"){
		 	$("#butt").prev().remove()
		 }
	})
})
