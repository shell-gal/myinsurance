$(function(){
	$("#btn_tr").click(function(){
		$("#tab").before("<tr>"
        		+"<td class='222'>事故车部件：<input type='text'/></td>"
        		+"<td>数量：<input type='text'/></td>"
        		+"<td>定损单价：<input type='text'/></td>"
        		+"</tr>"
		);
	})
	$("#btn_tr_1").click(function(){
		$("#tab_2").before("<tr>"
        		+"<td>物损名：<input type='text'/></td>"
        		+"<td>数量：<input type='text'/></td>"
        		+"<td>定损单价：<input type='text'/></td>"
        		+"</tr>"
		);
	})
	
	$("#btn_tr_3").click(function(){
		$("#tab3").before("<tr>"
        		+"<td>物损名：<input type='text'/></td>"
        		+"<td>数量：<input type='text'/></td>"
        		+"<td>定损单价：<input type='text'/></td>"
        		+"</tr>"
		);
	})
	
	$("#btn_re").click(function(){
		if($("#tab").prev().index()>2){
			$("#tab").prev().remove();
		}
	})
	$("#btn_re_2").click(function(){
		var tab_name = $("#tab_2").prev().attr("class")
		if(tab_name!="tr"){
			$("#tab_2").prev().remove()
		}	
	})
	$("#btn_re_4").click(function(){
		var tab_name = $("#tab3").prev().attr("class")
		if(tab_name!="tr"){
			$("#tab3").prev().remove()
		}	
	})
})
