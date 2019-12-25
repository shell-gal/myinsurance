$(function(){
	$("#add_but").click(function(){
			$("#mycar").before("<tr>"
					+"<td><input type='text' class='text'/></td>"
					+"<td><input type='text' class='text'/></td>"
					+"<td><input type='text' class='text'/></td>"
					+"<td><input type='text' class='text'/></td>"
					+"<td><span>1000</span></td>"
					+"<td><input type='file' name='nfile'></td>"
					+"</tr>")
	})
	$("#add_but_2").click(function(){
			$("#butt").before("<tr>"
					+"<td><input type='text' class='text'/></td>"
					+"<td><input type='text' class='text'/></td>"
					+"<td><input type='text' class='text'/></td>"
					+"<td><input type='text' class='text'/></td>"
					+"<td><span>1000</span></td>"
					+"<td><input type='file' name='nfile'></td>"
					+"</tr>")
	})
	$("#rem_but").click(function(){
		 var index = $("#mycar").prev().attr("class");
		 if(index!="tr"){
		 	$("#mycar").prev().remove()
		 }
	})
	$("#rem_but_2").click(function(){
		var name = $("#butt").prev().attr("class");
		if(name!="tr"){
			$("#butt").prev().remove()
		}
	})
	
	$("#add_but_1").click(function(){
			$("#vg").before("<tr>"
					+"<td><input type='text' class='text'/></td>"
					+"<td><input type='text' class='text'/></td>"
					+"<td><input type='text' class='text'/></td>"
					+"<td><span>1000</span></td>"
					+"<td><input type='file' name='nfile'></td>"
					+"</tr>")
	})
	$("#rem_but_1").click(function(){
		 var index = $("#vg").prev().attr("class");
		 if(index!="fg"){
		 	$("#vg").prev().remove()
		 }
	})
	
	
	$("#add_but_ren").click(function(){
			$("#vg").before("<tr>"
					+"<td><input type='text' class='text'/></td>"
					+"<td><input type='text' class='text'/></td>"
					+"<td><input type='text' class='text'/></td>"
					+"<td><span>1000</span></td>"
					+"</tr>")
	})
	
	$("#rem_but_ren").click(function(){
		 var index = $("#vg").prev().attr("class");
		 if(index!="fg"){
		 	$("#vg").prev().remove()
		 }
	})
})
