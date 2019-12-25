$(function(){
	//加载角色信息
	roles();
	//添加员工信息
	_addEmployee();
});


//添加员工信息
function _addEmployee(){
	//按钮点击事件
	$("#addEmployees").click(function(){
		$.ajax({
	  				url:"http://localhost:8080/insurance/addEmployee.do",
	  				type:"get",
	  				data:{
	  					"user_name":$("#user_name").val(),
	  					"user_idcard":$("#user_idcard").val(),
	  					"work_date":$("#work_date").val(),
	  					"sex":$("#sex").val(),
	  					"education":$("#education").val(),
	  					"birthday":$("#birthday").val(),
	  					"dapartment":$("#dapartment").val(),
	  					"rolename":$("#rolename").val(),
	  					"tel":$("#tel").val(),
	  				    "address_shen":$("#province").val(),
	  				    "address_shi":$("#city").val(),
						"email":$("#email").val(),
						"rolename":$("#rolename").val(),
						"account_number":$("#email").val(),
						"password":"123456"
	  				},
	  				contentType:"application/json;charset=utf-8",
	  				dataType:"json",
	  				success:function(data){
	  					//弹出信息
	  					if(data.result){
	  						alert(data.message);
	  					}else{
	  						alert(data.message);
	  					}

	  				},
	  				error:function(){
	  					alert("System error!!!!!");
	  				}
	  			});
	});
}



//查询角色列表
function roles(){
	$.ajax({
		url:"http://localhost:8080/insurance/queryRoles.do",
		type:"get",
		contentType:"application/json;charset=utf-8",
		dataType:"json",
		success:function(data){
			//获取到角色名的元素
			var rolename=document.getElementById("rolename");
			//循环将数据添加到下拉框中
				$.each(data.datas, function(i, r) {
				rolename.add(new Option(r.rolename),null); 
				});
		},
		error:function(){
			alert("System error!!!!!");
		}
	});
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

