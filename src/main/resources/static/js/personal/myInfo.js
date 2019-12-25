$(function(){
	load();
})

function load(){
	$.ajax({
			url:"http://localhost:8080/users/queryMyInfo.do",
			type:"get",
			contentType:"application/json;charset=utf-8",
			dataType:"json",
			success:function(data){
				var html="<tr class='tr'>"
					 	+"<td class='info'>"+data.singerData.user_number+"</td>"
					 +"<td class='info'>"+data.singerData.user_name+"</td>"
					 +"<td class='info'>"+data.singerData.sex+"</td>"
					 +"<td class='info'>"+data.singerData.dapartment+"</td>"
					 +"<td class='info'>"+data.singerData.address_shen+data.singerData.address_shi+"</td>"
					 +"<td class='info'>"+data.singerData.tel+"</td>"
					 +"<td class='info'>"+data.singerData.email+"</td>"
					+" <td class='info'>"
		 			+	"<a href='../welcome/myemployees_upd.jsp?user_number="+data.singerData.user_number+"' target='aa'>修改信息</a>"
		 			+"</td>"
				  +"</tr>";
				$(".tr").remove();
			$(".table").append(html);
					
				
			},
			error:function(){
				alert("System error!!!!!");
			}
	});
}