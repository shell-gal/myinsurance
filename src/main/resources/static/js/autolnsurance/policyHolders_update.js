

$(function(){
	$("#but1").click(function(){
	query();
	
	})
});

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
var province=document.getElementById("address_shen").value; 
 var city=document.getElementById("address_shi");
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
  var province=document.getElementById("address_shen");
 for (var i in cityList){
	 province.add(new Option(i),null); 
	}	
}
window.onload=allCity;


function query(){
	var policyholders_name=$("#policyholders_name").val();
	var credentials_number=$("#credentials_number").val();
	var sex = $("#sex:checked").val();
	var address_shen = $("#address_shen").val();
	var address_shi=$("#address_shi").val();
	var tel =$("#tel").val();
	var policyholders_number =$("#policyholders_number").val();
$.ajax({
	url:"http://localhost:8080/autoInsurance/api/PolicyHolders_update",
	data:{
		"policyholders_name":policyholders_name,
    	"credentials_number":credentials_number,
    	"sex":sex,
    	"address_shen":address_shen,
    	"address_shi":address_shi,
    	"tel":tel,
    	"policyholders_number":policyholders_number
	},
	type:"post",
	dataType: "json",
    success:function(data) {
    	alert(data.message);
    } ,
	
	error:function(){
		alert("错误");
	}
  });

}
