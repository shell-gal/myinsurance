var page=1;
var pageNum = 1;
var pages = 1;
var r_number=$(".r_number").val();
$(function() {
	queryEmpoyee();
	queryReported(page,r_number);
	paiqian();
	findReport();
	
	$("#jia").click(function(){
		pageNum = Number(pageNum)+1;
		if(pageNum > pages){
			alert("没有下一页");
			pageNum=pages;
		} else {
			queryReported(pageNum,r_number);
		}
		
	})
	
	$("#jian").click(function(){
		pageNum=Number(pageNum)-1;
		if(pageNum<1){
			alert("没有上一页");
			pageNum=1;
		}else{
			queryReported(pageNum,r_number);
		}
		
	})
});

//查询未查勘案件信息
function queryReported(page,r_number) {
	$.ajax({
		url:"http://localhost:8080/myinsurance/dispacth/queryAllReported",
		type:"get",
		data:{"case_state":"已报案","page":page,"reported_number":r_number},
		contentType:"application/json;charset=utf-8",
		dataType:"json",
		success:function(data) {
			pageNum=data.singerData.pageNum;
			pages = data.singerData.pages;
			var outHtml="";
			$.each(data.singerData.list, function(i, d) {
				outHtml += "<tr class='tr'>"
					+"<td class='info'>"+d.reported_number+"</td>"
					+"<td class='info'>"+d.informants+"</td>"
					+"<td class='info'>"+d.reported_time+"</td>"
					+"<td class='info'>"+d.province+d.city+d.road+"</td>"
					+"<td class='info'>"+d.informants+"</td>"
					+"<td class='info'>"+d.road_direction+"</td>"
					+"<td class='info'>"+d.informants_tel+"</td>"

					+"<td class='info'>"+d.case_state+"</td>"
		 			+"<td class='info'>"
		 			+"	<button  type='button'  class='btn btn-primary btn-sm' data-toggle='modal' onclick='diaoDu("+d.reported_number+")' data-target='.myModal' >"
					+"	 派遣人员"
					+"	</button>"
					+"</td>"
							  +"</tr>";
			});
			$(".tr").remove();
	  		$(".table").append(outHtml);
	  		$("#firstpage").html(pageNum);
	  		$("#lastpage").html(pages);
						
		},
		error : function() {
			alert("获取查勘案件信息失败！！");
		}
	});
}

function diaoDu(id){
	$("#id").val(id);
}

//获取勘察员工
function queryEmpoyee(){
	$.ajax({
		url:"http://localhost:8080/employee/getEmployeeOfType.do",
		type:"get",
		contentType:"application/json;charset=utf-8",
		dataType:"json",
		success:function(data){
			var rolename=document.getElementById("diaoduyuan");
				$.each(data.datas, function(i, u) {
				rolename.add(new Option(u.user_number+":"+u.user_name),null);
				});
		},
		error:function(){
			alert("获取勘察员失败!");
		}
	});
}

function paiqian(){
	$("#paiqian").click(function(){
		$.ajax({
			url:"http://localhost:8080/reportapi/diaodu.do",
			
			type:"get",
			data:{"chakan":$("#diaoduyuan").val(),"reported_number":$("#id").val()},
			contentType:"application/json;charset=utf-8",
			dataType:"json",
			success:function(data){
				$("#close").click();
				alert("调度成功");
				queryReported(page,r_number);
			},
			error:function(){
				alert("调度失败!!");
			}
		});
	});
}


function findReport(){
	$("#findReport").click(function(){
		queryReported(page,$(".r_number").val());
	})
}