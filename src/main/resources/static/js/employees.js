$(function(){
	employees_find(1);
	$("#add_employees").css("text-align","center");
});

//下拉框选中事件
function employees_find(flag){
	if(flag==1){
		$(".input_find").hide();
		$("#find_title").text("员工姓名");
		$("#user_name").show();
	};
	if(flag==2){
		$(".input_find").hide();
		$("#find_title").text("员工编号");
		$("#user_id").show();
	};
	if(flag==3){
		$(".input_find").hide();
		$("#find_title").text("员工部门");
		$("#user_department").show();
	};
}

//添加按钮点击事件
function add_employess(){
	$("#table").hide();
	$(".add_info").show();
}

//按照条件查找员工信息
function find(flag){
	if(flag==1){
		name=$(".find_name1").val();
		$("#table").show();
		$(".add_info").hide();
	};
	if(flag==2){
		name=$(".find_name2").val();
		$("#table").show();
		$(".add_info").hide();
	};
	if(flag==3){
		name=$(".find_name3").val();
		$("#table").show();
		$(".add_info").hide();
	};
	//调用ajax方法
	find_employeesInfo(flag,name);
}


		var cityList = new Array();
     cityList['北京市'] = ['朝阳区','东城区','西城区', '海淀区','宣武区','丰台区','怀柔','延庆','房山'];
	 cityList['上海市'] = ['宝山区','长宁区','丰贤区', '虹口区','黄浦区','青浦区','南汇区','徐汇区','卢湾区'];
	 cityList['广州省'] = ['广州市','惠州市','汕头市','珠海市','佛山市','中山市','东莞市'];
     cityList['深圳市'] = ['福田区', '罗湖区', '盐田区', '宝安区', '龙岗区', '南山区', '深圳周边'];
	 cityList['重庆市'] = ['俞中区', '南岸区', '江北区', '沙坪坝区', '九龙坡区', '渝北区', '大渡口区', '北碚区'];
     cityList['天津市'] = ['和平区', '河西区', '南开区', '河北区', '河东区', '红桥区', '塘古区', '开发区'];
	 cityList['江苏省'] = ['南京市','苏州市','无锡市'];
	 cityList['浙江省'] = ['杭州市','宁波市','温州市'];
	 cityList['四川省'] = ['成都市'];
	 cityList['海南省'] = ['海口市'];
	 cityList['福建省'] = ['福州市','厦门市','泉州市','漳州市'];
	 cityList['山东省'] = ['济南市','青岛市','烟台市'];
	 cityList['江西省'] = ['南昌市'];
	 cityList['广西省'] = ['柳州市','南宁市'];
	 cityList['安徽省'] = ['合肥市'];
	 cityList['河北省'] = ['邯郸市','石家庄市'];
	 cityList['河南省'] = ['郑州市','洛阳市'];
	 cityList['湖北省'] = ['武汉市','宜昌市'];
	 cityList['湖南省'] = ['长沙市','株洲市','湘潭市','衡阳市'];
	 cityList['陕西省'] = ['西安市'];
	 cityList['山西省'] = ['太原市'];
	 cityList['黑龙江省'] = ['哈尔滨市'];
	 cityList['其他'] = ['其他'];
	 
  function changeCity(){
     var province=document.getElementById("province").value; 
	 var city=document.getElementById("city");
	 city.options.length=0; //清除当前city中的选项
	for (var i in cityList){
	        if (i == province){
                for (var j in cityList[i]){
					city.add(new Option(cityList[i][j]),null);
                }
            }
       }
  } 
  function allCity(){
	  var province=document.getElementById("province");
      for (var i in cityList){
		 province.add(new Option(i),null); 
		}	
  }
  window.onload=allCity;
  


//删除员工信息
function del_employeesInfo(data){
	if(confirm("是否删除员工信息？")){
		$.ajax({
	  				url:"",
	  				type:"post",
	  				data:{"id":data},
	  				contentType:"application/json;charset=utf-8",
	  				dataType:"json",
	  				success:function(data){
	  					alert(data);
	  				},
	  				error:function(){
	  					alert("System error!!!!!");
	  				}
	  			});
	}
}

var htmlTable="<tr class=''>"
	 			+"<td class='info'>fff</td>"
	 			+"<td class='info'>张三</td>"
	 			+"<td class='info'>男</td>"
	 			+"<td class='info'>业务部</td>"
	 			+"<td class='info'>业务员</td>"
	 			+"<td class='info'>13574819985</td>"
	 			+"<td class='info'>1477457321@qq.com</td>"
	 			+"<td class='info'>"
	 			+"	<button type='button' class='btn btn-primary btn-sm' data-toggle='modal' data-target='#upd-UserInfo'>"
				+"	 职位变动"
				+"	</button>"
				+"	<button type='button' onclick='del_employeesInfo()' class='btn btn-danger btn-sm'>"
				+"	离职"
				+"	</button>"
				+"	<div class='modal fade' id='upd-UserInfo' tabindex='-1' role='dialog' aria-labelledby='myModalLabel'>"
				+"	  <div class='modal-dialog' role='document'>"
				+"	    <div class='modal-content'>"
				+"	      <div class='modal-header'>"
				+"	        <button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>"
				+"	        <h4 class='modal-title' id='myModalLabel'>修改用户</h4>"
				+"	      </div>"
				+"	      <div id='' style='margin: 20px;'>"
				+"					  <div>"
				+"					    <label>当前部门</label>"
				+"								  <select name='bumen' class='form-control'>"
				+"									  <option>男</option>"
				+"									  <option>女</option>"
				+"									</select>"
				+"						</div>"				  
				+"					  <div>"
				+"					    <label>当前职位</label>"
				+"								  <select name='zhiwei' class='form-control'>"
				+"									  <option>男</option>"
				+"									  <option>女</option>"
				+"									</select>"
				+"						</div>  "
				+"				  	<button type='button' class='btn btn-primary btn_upd'>提交</button>	"			
				+"				</div>&nbsp;"
				+"	    </div>"
				+"	  </div>"
				+"	</div>"
	 			+"</td>	"
	 		+"</tr>"	
					 		
