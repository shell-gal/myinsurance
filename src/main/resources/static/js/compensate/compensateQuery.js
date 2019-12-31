var page=1;
var pageNum = 1;
var pages = 1;
$(function() {
	//核损查询
	CompensateQuery()
	//按条件查询核损信息
	$("#queryhesun").click(function(){
		alert(22)
		CompensateQuery()
	})
	//重置，查询
	$("input[name='resetbut']").click(function(){
		$("#reported_number").val("");
		CompensateQuery()
	});
	//没有下一页
	$("#jia").click(function(){
		//加一
		pageNum = Number(pageNum)+1;
		//判断pageNum > pages
		if(pageNum > pages){
			alert("没有下一页");
			pageNum=pages;
		} else {
			DinsuninfoQuery();
		}
	})
	//没有上一页
	$("#jian").click(function(){
		//减一
		pageNum=Number(pageNum)-1;
		//判断pageNum<1
		if(pageNum<1){
			alert("没有上一页");
			pageNum=1;
		}else{
			DinsuninfoQuery();
		}
	})
});


function CompensateQuery() {
	//获取id为reported_number的值
	var Reported_number=$("#reported_number").val();
	var da={'reported_number':Reported_number,"page":pageNum}
	//ajax
	$.ajax({
		//路径
		url : "/myinsurance/prospect_lyt/CompensateQuery",
		//类型
		type : "post",
		contentType : "application/json;charset=utf-8",
		//参数
		data : JSON.stringify(da),
		//成功执行
		success : function(data) {
			//创建对象为用于拼接，值为空
			var Html = "";
			//使用each遍历，参数为data.singerData。list
			$.each(data.singerData.list,function(i, r) {
				//pageNum
				pageNum=data.singerData.pageNum;
				//pages
				pages = data.singerData.pages;
				//拼接
					Html +="<tr class='tr'>"
						+"<td>"+r.case_id+"</td>"
						+"<td>"+r.reporter_name +"</td>"
						+"<td>"+r.car_number +"</td>"
						+"<td>"+r.reporter_phone +"</td>"
						+"<td>"+r.danger_date +"</td>"
						+"<td>"+r.danger_address_province+r.danger_address_city+r.detail_address +"</td>"
						+"<td>"+r.danger_cause +"</td>"
						+"<td>"+r.danger_type +"</td>"
						+"<td>"+r.case_status +"</td>"
						+"<td>"+"<a onclick='tiaozhuan("+r.case_id+")'>定损详情</a>" +"</td>"
				// Html +="<tr class='tr'>"
				// 	   +"<td>"+r.reported_number+"</td>"
				// 	   +"<td>"+r.informants +"</td>"
				// 	   +"<td>"+r.warranty_info.license_number +"</td>"
				// 	   +"<td>"+r.informants_tel +"</td>"
				// 	   +"<td>"+r.reported_time +"</td>"
				// 	   +"<td>"+r.prospect_info.prospect_address +"</td>"
				// 	   +"<td>"+r.danger_cause +"</td>"
				// 	   +"<td>"+r.dispose_type +"</td>"
				// 	   +"<td>"+r.case_state +"</td>"
				// 	   +"<td>"+"<a href='../lzw/hesuninfo.jsp?reported_number="+r.reported_number+"'>核损详情</a>" +"</td>"
				});
			//移除
			$(".tr").remove();
			//将Html拼接到id为prospect_table里
			$("#prospect_table").append(Html);
			//将pageNum显示在id为firstpage中
			$("#firstpage").html(pageNum);
			//将pages显示在id为lastpage
	  		$("#lastpage").html(pages);
		},
		//失败则执行
		error : function() {
		}
	});



}



function tiaozhuan(caseId){
	window.location.href="/myinsurance/prospect_lyt/hesuninfo?caseId="+caseId

}