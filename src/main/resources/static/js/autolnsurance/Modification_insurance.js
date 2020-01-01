	$(function(){
    	var warranty_number=$("input[name=baodanid]").val();
		init(warranty_number);
	});
	function init(warranty_number){
		$.ajax({
			url : "http://localhost:8080/myinsurance/insurance/querysingleauto",
			type : "post",
			data: {"warranty_number":warranty_number},
			dataType : "json",
			success : function(data) {
				console.log(data[0]);
				 $("input[name='warranty_id']").val(data[0].warrantyId);//保单编号
			     $("input[name='insurance_begin_date']").val(render(data[0].insuranceBeginDate));//保险起期
			     $("input[name='insurance_end_date']").val(render(data[0].insuranceEndDate));//保险止期
			     $("input[name='premium_sum']").val(data[0].premiumMoney);//保费金额
			     $("input[name='policyholders_sum']").val(data[0].policyMoney);//投保金额
			     $("input[name='payment_date']").val(render(data[0].paymentTime));//缴费时间
			     $("input[name='permission_date']").val(render(data[0].signTime));//签单日期
			     $("input[name='license_number']").val(data[0].carNumber);//车牌号码
			     $("input[name='make_number']").val(data[0].factoryNumber);//厂牌型号
			     $("input[name='engine_number']").val(data[0].engineNumber);//发动机号
			     $("input[name='sail_number']").val(data[0].dirveingLicense);//车辆行驶证号
			     $("input[name='frame_number']").val(data[0].frameNumber);//车架号
			     $("input[name='car_owner_name']").val(data[0].carOwnerName);//车主姓名
			     
			     
			     $("input[name='policyholders.policyholders_number']").val(data[0].policyholders.policyholderId);//投保人编号
			     $("input[name='policyholders.policyholders_name']").val(data[0].policyholders.policyholderName);//投保人姓名
			     $("input[name='policyholders.address_shen']").val(data[0].policyholders.policyholderAddressProvince);/*联系地址省*/
			     $("input[name='policyholders.address_shi']").val(data[0].policyholders.policyholderAddressCity);/*联系地址市*/
			     if(data[0].policyholders.policyholderSex=='男'){/*性别*/
			    	 $("#policyholdersnan").attr("checked","checked");
			     }
			     if(data[0].policyholders.policyholderSex=='女'){
			    	$("#policyholdersnv").attr("checked","checked");
			     }
			     $("input[name='policyholders.tel']").val(data[0].policyholders.policyholderPhone);/*联系电话*/
			     $("input[name='policyholders.credentials_number']").val(data[0].policyholders.policyholderCardid);/*证件号码*/
			    
			     
			     $("input[name='recognizee.recognizee_number']").val(data[0].recognizee.recognizeeId);/*被保编号*/
			     $("input[name='recognizee.recognizee_name']").val(data[0].recognizee.recognizeeName);/*被保人姓名*/
			     $("input[name='recognizee.tel']").val(data[0].recognizee.recognizeePhone);/*联系电话*/
			     if(data[0].recognizee.recognizeeSex=='男'){/*性别*/
			    	 $("#recognizeenan").attr("checked","checked");
				  }
				 if(data[0].recognizee.recognizeeSex=='女'){
					 $("#recognizeenv").attr("checked","checked");
				  }
				  $("input[name='recognizee.email']").val( data[0].recognizee.recognizeeEmail);/*邮箱*/
				  $("input[name='recognizee.credentials_number']").val(data[0].recognizee.recognizeeCardid);/*证件号码*/
				  $("input[name='recognizee.bank_number']").val(data[0].recognizee.recognizeeAccount);/*银行账户*/
				  $("input[name='recognizee.address_shen']").val(data[0].recognizee.recognizeeAddressProvince);/*联系地址省*/
				  $("input[name='recognizee.address_shi']").val(data[0].recognizee.recognizeeAddressCity);/*联系地址市*/
				  $("input[name='recognizee.drive_number']").val(data[0].recognizee.recognizeeDriverlicense);/*驾驶证号码*/
			},
			error : function() {
				alert("系统错误，请联系管理员！");
			}
		});
	}
	
	
	
	function Modification_insurance(){
		
		 var warranty_number = $("input[name='warranty_number']").val();//保单编号
		 var insurance_begin_date = $("input[name='insurance_begin_date']").val();//保险起期
	     var insurance_end_date = $("input[name='insurance_end_date']").val();//保险止期
	     var premium_sum = $("input[name='premium_sum']").val();//保费金额
	     var policyholders_sum = $("input[name='policyholders_sum']").val();//投保金额
	     var payment_date = $("input[name='payment_date']").val();//缴费时间
	     var permission_date = $("input[name='permission_date']").val();//签单日期
	     var license_number = $("input[name='license_number']").val();//车牌号码
	     var make_number = $("input[name='make_number']").val();//厂牌型号
	     var engine_number = $("input[name='engine_number']").val();//发动机号
	     var sail_number = $("input[name='sail_number']").val();//车辆行驶证号
	     var frame_number = $("input[name='frame_number']").val();//车架号
	     var car_owner_name = $("input[name='car_owner_name']").val();//车主姓名
	     
	     var policyholderspolicyholders_number = $("input[name='policyholders.policyholders_number']").val();//投保人编号
	     var policyholderspolicyholders_name = $("input[name='policyholders.policyholders_name']").val();//投保人姓名
	     var policyholdersaddress_shen = $("#policyholdersaddress_shen").val();/*联系地址省*/
	     var policyholdersaddress_shi = $("#policyholdersaddress_shi").val();/*联系地址市*/
	     var policyholderssex = $("input[name='policyholderssex']:checked").val();/*性别*/
	     var policyholderstel = $("input[name='policyholders.tel']").val();/*联系电话*/
	     var policyholderscredentials_number = $("input[name='policyholders.credentials_number']").val();/*证件号码*/
	    
	     var recognizeerecognizee_number = $("input[name='recognizee.recognizee_number']").val();/*被保人编号*/
	     var recognizeerecognizee_name = $("input[name='recognizee.recognizee_name']").val();/*被保人姓名*/
	     var recognizeetel = $("input[name='recognizee.tel']").val();/*联系电话*/
	     var recognizeesex = $("input[name='recognizeesex']:checked").val();/*性别*/
		 var recognizeeemail = $("input[name='recognizee.email']").val();/*邮箱*/
		 var recognizeecredentials_number = $("input[name='recognizee.credentials_number']").val();/*证件号码*/
		 var recognizeebank_number = $("input[name='recognizee.bank_number']").val();/*银行账户*/
		 var recognizeeaddress_shen = $("#recognizeeaddress_shen").val();/*联系地址省*/
		 var recognizeeaddress_shi = $("#recognizeeaddress_shi").val();/*联系地址市*/
		 var recognizeedrive_number = $("#recognizee.drive_number").val();/*驾驶证号码*/
		
		 $.ajax({
			url : "http://localhost:8080/myinsurance/insurance/modificationinsuranceinfo",
			type : "post",
			data: {
					"warrantyId":warranty_number,
					"insuranceBeginDate":insurance_begin_date,
					"insuranceEndDate":insurance_end_date,
					"premiumMoney":premium_sum,
					"policyMoney":policyholders_sum,
					"paymentTime":payment_date,
					"signTime":permission_date,
					"carNumber":license_number,
					"factoryNumber":make_number,
					"engineNumber":engine_number,
					"dirveingLicense":sail_number,
					"frameNumber":frame_number,
					"carOwnerName":car_owner_name,
					"policyholders.policyholderId":policyholderspolicyholders_number,
					"policyholders.policyholderName":policyholderspolicyholders_name,
					"policyholders.policyholderAddressProvince":policyholdersaddress_shen,
					"policyholders.policyholderAddressCity":policyholdersaddress_shi,
					"policyholders.policyholderSex": policyholderssex,
					"policyholders.policyholderPhone":policyholderstel,
					"policyholders.policyholderCardid":policyholderscredentials_number,
					"recognizee.recognizeeId":recognizeerecognizee_number,
					"recognizee.recognizeeName":recognizeerecognizee_name,
					"recognizee.recognizeePhone": recognizeetel,
					"recognizee.recognizeeSex":recognizeesex,
					"recognizee.recognizeeEmail":recognizeeemail,
					"recognizee.recognizeeCardid":recognizeecredentials_number,
					"recognizee.recognizeeAccount":recognizeebank_number,
					"recognizee.recognizeeAddressProvince":recognizeeaddress_shen,
					"recognizee.recognizeeAddressCity":recognizeeaddress_shi,
					"recognizee.recognizeeDriverlicense":recognizeedrive_number
			},
			dataType : "json",
			success : function(data) {
				if(data==true){
					alert("修改成功！");
					var pagenum = $("#pagenum").val();
					window.location.href="http://localhost:8080/myinsurance/insurance/insurancequery?indexpage="+pagenum;
				}
				if(data==false){
					alert("修改错误！");
				}
			},
			error : function() {
				alert("系统错误，请联系管理员！");
			}
		});
	}


	function render(time) {
		var d = new Date(time);
		var times=d.getFullYear() + '-' + (d.getMonth() + 1) + '-';
		var day=d.getDate();
		if (parseInt(day) < 10) {
			day = '0' + day;
		}
		times+=day;
		return times;
	}