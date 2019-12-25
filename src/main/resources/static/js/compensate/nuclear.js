//查询核赔页面及查询
var page=1;
var pageNum=1;
var pages=1;
$(function(){
	init();
	//查询
	$("#select_but").click(function(){
		init();
	});
	//重置
	$("#reset_but").click(function(){
		$("#peospectID").val("");
		init();
	});
	
	//下一页
	$("#jia").click(function(){
		//调用Number()再+1
		pageNum = Number(pageNum)+1;
		//当前页面是否大于总页面
		if(pageNum > pages){
			alert("没有下一页");
			pageNum=pages;
		} else {
			//不大于页面+1
			page = Number(page)+1;
			//调用query()方法
			query();
		}
		
	})
	
	//上一页
	$("#jian").click(function(){
		//调用Number()再-1
		pageNum=Number(pageNum)-1;
		//当前页面是否小于1
		if(pageNum<1){
			alert("没有上一页");
			pageNum=1;
		}else{
			//不小于-1
			page = Number(page)-1;
			//调用query()方法
			query();
		}
		
	})
})

		function init(){
	       //根据id为peospectID获取文本框的值
	            var reported_number= $("#peospectID").val();
				$.ajax({
				//路径url
				url : "http://localhost:8080/getNuclear/getNuclear.do",
				//type
				type : "post",
				//参数data
				data: {"page":page,"reported_number":reported_number},
				//返回类型dataType
				dataType : "json",
				success : function(data) {
					//当前页面调用data.singerData.当前页面
					pageNum=data.singerData.pageNum;
					//总页面调用data.singerData.总页面
		        	pages=data.singerData.pages;
					//加载newTr
					var newTr = "";
					$.each(data.singerData.list,function(i,item) {
						
						newTr+="<tr class='remove'>"
 							+"<th>"+item['reported_number']+"</th>"
 							+"<th>"+item['informants']+"</th>"
						    +"<th>"+item.warranty_info.license_number+"</th>"
				 			+"<th>"+item['informants_tel']+"</th>"
				 			+"<th>"+item['reported_time']+"</th>"
 			 			    +"<th>"+item.prospect_info.prospect_address+"</th>"
				 			+"<th>"+item['danger_cause']+"</th>"
				 			+"<th>"+item['dispose_type']+"</th>"
				 			+"<th>"+item['case_state']+"</th>"
				 			+"<th><a href='heuan_info.jsp?reported_number="+item['reported_number']+"'  target='aa'>理算详情</a>"
 							+"</th>"
 							+"</tr>";		
					});
					//删除节点
					$(".remove").remove();
                  //利用append加入newTr
					$("table").append(newTr);
					//获取当前页面
					 $("#firstpage").html(pageNum);
					 //获取页码
			          $("#lastpage").html(pages)
				},
				error : function() {
					alert("系统错误，请联系管理员！");
				}
			});
		}

     
		
