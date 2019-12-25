	$(function() {
		init();
	});
	
	function init(){
		var reported_number = $("#reported_number").val(); 
	$.ajax({
		url:"http://localhost:8080/getSettle/getSettle_infoList",
		type:"post",
 			data:{"reported_number":reported_number},
			dataType:"json",
			success:function(data) {
			var newTr = "";
			$.each(data.datas,function(i,item) {
				newTr +="<tr>"
					+"<th>"+item['reported_number']+"</th>"
					
						+"<th>"+item['losscar_he_sum']+"</th>"
		 			+"<th>"+item['losscar_me_sum']+"</th>"
	 			+"<th>"+item['loss_goods_sum']+"</th>"
	 			+"<th>"+item['loss_people_sum']+"</th>"
	 			+"<th>"+item['settlement_sum']+"</th>"
	 			+"<th>"+item['recognizee_name']+"</th>"
	 			+"<th>"+item['bank_number']+"</th>" 
	 			+"</tr>";
			});
			$("#append").append(newTr);
			},
		error : function() {			alert("系统错误，请联系管理员！");
		}
	});
	}
	
	
	
	function update(){
		var reported_number = $("#reported_number").val();
	$.ajax({
		url:"http://localhost:8080/getSettle/updatereported_info.do",
		type:"post",
 			data:{"reported_number":reported_number},
			dataType:"json",
			success:function(data) {
				alert(data.message);
				location.href="settle.jsp";
			},
		error : function() {	
			alert("系统错误，请联系管理员！");
		}
	});
	}
	
	
	