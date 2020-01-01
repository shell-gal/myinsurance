var page=1;
var pageNum = 1;
var pages = 1;
$(function() {
	//定损信息查询
	DinsuninfoQuery();
	$("#reset_but").click(function(){
		$("#reported_number").val("")
	})
	$("#look_but").click(function () {

		DinsuninfoQuery()
	})
	//点击id为querydinsuninfo查询
	$("#querydinsuninfo").click(function(){
		DinsuninfoQuery()
	})
	// //重置，查询
	// $("input[name='resetbut']").click(function(){
	// 	$("#myreportednumber").val("");
	// 	DinsuninfoQuery()
	// })
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

// 按条件查询定损信息
function DinsuninfoQuery() {
	//获取id为myreportednumber的值
	var Reportednumber=$("#reported_number").val();
	var data={'reported_number':Reportednumber,"page":pageNum}

	//ajax
	$.ajax({
		//路径
		url : "/myinsurance/prospect_lyt/LoseQuery",
		//类型
		type : "post",
		//参数
		data : JSON.stringify(data),
		//字体编码
		contentType : "application/json;charset=utf-8",
		//字体类型
		dataType : "json",
		//成功执行
		success : function(data) {
			//创建对象为用于拼接，值为空
			var Html = "";
			//pageNum
			pageNum=data.singerData.pageNum;
			//pages
			pages = data.singerData.pages;
			//使用each遍历，参数为data.singerData。list
			$.each(data.singerData.list,function(i, r) {

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
					// +"<td><a onclick='tiaozhuan("+item.case_id+")'>定损详情</a></td>"
				});
			//移除。tr
			$(".tr").remove();
			//将Html拼接到id为myprospect里
			$("#myprospect").append(Html);
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
	window.location.href="/myinsurance/prospect_lyt/dinsuninfo?caseId="+caseId

}