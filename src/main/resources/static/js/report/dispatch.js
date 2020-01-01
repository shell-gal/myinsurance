var page=1;
var pageNum = 1;
var pages = 1;
var r_number=$(".r_number").val();
var case_status;
var rname;

$(function() {
	var rolename=$("#rolename").val();
	if (rolename=='接案员'){
		alert("-----------111111111")
		case_status="已报案";
		rname="勘察员";
	}
	if (rolename=='定损经理'){
		case_status="定损中";
		rname="定损员";
	}
	if (rolename=='核损经理'){
		case_status="核损中";
		rname="核损员";
	}
	if (rolename=='理算经理'){
		case_status="理算中";
		rname="理算员";
	}
	if (rolename=='核赔经理'){
		case_status="核算中";
		rname="核赔员";
	}
	if (rolename=='理赔经理'){
		case_status="理赔中";
		rname="理赔员";
	}


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
	var data={"case_state":case_status,"indexpage":page,"reported_number":r_number};
	$.ajax({
		url:"http://localhost:8080/myinsurance/DispatchManagement/queryAllReported",
		type:"post",
		data:JSON.stringify(data),
		contentType:"application/json;charset=utf-8",
		dataType:"json",
		success:function(data) {
			console.log(data);
			pageNum=data.pageNum;
			pages = data.pages;
			var outHtml="";
			$.each(data.list, function(i, d) {
				outHtml += "<tr class='tr'>"
					+"<td class='info'>"+d.caseId+"</td>"
					+"<td class='info'>"+d.reporterName+"</td>"
					+"<td class='info'>"+d.createtime+"</td>"
					+"<td class='info'>"+d.dangerAddressProvince+d.dangerAddressCity+d.detailAddress+"</td>"
					+"<td class='info'>"+d.reporterPhone+"</td>"
					+"<td class='info'>"+d.roadDirection+"</td>"
					+"<td class='info'>"+d.dangerCause+"</td>"

					+"<td class='info'>"+d.caseStatus+"</td>"
		 			+"<td class='info'>"
		 			+"	<button  type='button'  class='btn btn-primary btn-sm' data-toggle='modal' onclick='diaoDu("+d.caseId+")' data-target='.myModal' >"
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
			alert("系统错误");
		}
	});
}

function diaoDu(id){
	$("#id").val(id);
}

//获取勘察员工
function queryEmpoyee(){
		$.ajax({
			url:"http://localhost:8080/myinsurance/DispatchManagement/getEmployeeOfType",
			type:"post",
			// contentType:"application/json;charset=utf-8",
			dataType:"json",
			data:{"rolename":rname},
			success:function(data){
				console.log(data);
				var rolename=document.getElementById("diaoduyuan");
					$.each(data, function(i, u) {
					rolename.add(new Option(u.userId+":"+u.userName),null);
					});
			},
			error:function(){
				alert("System error!!!!!");
			}
		});

}

function paiqian(){
	$("#paiqian").click(function(){
		var data={"rolename":rname,"chakan":$("#diaoduyuan").val(),"reported_number":$("#id").val()};
		$.ajax({
			url:"http://localhost:8080/myinsurance/DispatchManagement/diaodu",
			type:"post",
			data:JSON.stringify(data),
			contentType:"application/json;charset=utf-8",
			dataType:"json",
			success:function(data){
				$("#close").click();
				alert("调度成功");
				queryReported(page,r_number);
			},
			error:function(){
				alert("System error!!!!!");
			}
		});
	});
}


function findReport(){
	$("#findReport").click(function(){
		queryReported(page,$(".r_number").val());
	})
}