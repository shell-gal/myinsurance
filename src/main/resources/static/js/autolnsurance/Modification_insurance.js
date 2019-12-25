	$(function(){
    	var warranty_number=$("input[name=baodanid]").val();
		init(warranty_number);
	});
	function init(warranty_number){
		$.ajax({
			url : "/insurance/querysingleauto.do",
			type : "post",
			data: {"warranty_number":warranty_number},
			dataType : "json",
			success : function(data) {
				 $("input[name='warranty_number']").val(data.warranty_number);//保单编号
			     $("input[name='insurance_begin_date']").val(data.insurance_begin_date);//保险起期
			     $("input[name='insurance_end_date']").val(data.insurance_end_date);//保险止期
			     $("input[name='premium_sum']").val(data.premium_sum);//保费金额
			     $("input[name='policyholders_sum']").val(data.policyholders_sum);//投保金额
			     $("input[name='payment_date']").val(data.payment_date);//缴费时间
			     $("input[name='permission_date']").val(data.permission_date);//签单日期
			     $("input[name='license_number']").val(data.license_number);//车牌号码
			     $("input[name='make_number']").val(data.make_number);//厂牌型号
			     $("input[name='engine_number']").val(data.engine_number);//发动机号
			     $("input[name='sail_number']").val(data.sail_number);//车辆行驶证号
			     $("input[name='frame_number']").val(data.frame_number);//车架号
			     $("input[name='car_owner_name']").val(data.car_owner_name);//车主姓名
			     
			     
			     $("input[name='policyholders.policyholders_number']").val(data.policyholders.policyholders_number);//投保人编号
			     $("input[name='policyholders.policyholders_name']").val(data.policyholders.policyholders_name);//投保人姓名
			     $("input[name='policyholders.address_shen']").val(data.policyholders.address_shen);/*联系地址省*/
			     $("input[name='policyholders.address_shi']").val(data.policyholders.address_shi);/*联系地址市*/
			     if(data.policyholders.sex=='男'){/*性别*/
			    	 $("#policyholdersnan").attr("checked","checked");
			     }
			     if(data.policyholders.sex=='女'){
			    	$("#policyholdersnv").attr("checked","checked");
			     }
			     $("input[name='policyholders.tel']").val(data.policyholders.tel);/*联系电话*/
			     $("input[name='policyholders.credentials_number']").val(data.policyholders.credentials_number);/*证件号码*/
			    
			     
			     $("input[name='recognizee.recognizee_number']").val(data.recognizee.recognizee_number);/*被保编号*/
			     $("input[name='recognizee.recognizee_name']").val(data.recognizee.recognizee_name);/*被保人姓名*/
			     $("input[name='recognizee.tel']").val(data.recognizee.tel);/*联系电话*/
			     if(data.recognizee.sex=='男'){/*性别*/
			    	 $("#recognizeenan").attr("checked","checked");
				  }
				 if(data.recognizee.sex=='女'){
					 $("#recognizeenv").attr("checked","checked");
				  }
				  $("input[name='recognizee.email']").val( data.recognizee.email);/*邮箱*/
				  $("input[name='recognizee.credentials_number']").val(data.recognizee.credentials_number);/*证件号码*/
				  $("input[name='recognizee.bank_number']").val(data.recognizee.bank_number);/*银行账户*/
				  $("input[name='recognizee.address_shen']").val(data.recognizee.address_shen);/*联系地址省*/
				  $("input[name='recognizee.address_shi']").val(data.recognizee.address_shi);/*联系地址市*/
				  $("input[name='recognizee.drive_number']").val(data.recognizee.drive_number);/*驾驶证号码*/
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
			url : "/insurance/modificationinsuranceinfo.do",
			type : "post",
			data: {
					"warranty_number":warranty_number,
					"insurance_begin_date":insurance_begin_date,
					"insurance_end_date":insurance_end_date,
					"premium_sum":premium_sum,
					"policyholders_sum":policyholders_sum,
					"payment_date":payment_date,
					"permission_date":permission_date,
					"license_number":license_number,
					"make_number":make_number,
					"engine_number":engine_number,
					"sail_number":sail_number,
					"frame_number":frame_number,
					"car_owner_name":car_owner_name,
					"policyholders.policyholders_number":policyholderspolicyholders_number,
					"policyholders.policyholders_name":policyholderspolicyholders_name,
					"policyholders.address_shen":policyholdersaddress_shen,
					"policyholders.address_shi":policyholdersaddress_shi,
					"policyholders.sex": policyholderssex,
					"policyholders.tel":policyholderstel,
					"policyholders.credentials_number":policyholderscredentials_number,
					"recognizee.recognizee_number":recognizeerecognizee_number,
					"recognizee.recognizee_name":recognizeerecognizee_name,
					"recognizee.tel": recognizeetel,
					"recognizee.sex":recognizeesex,
					"recognizee.email":recognizeeemail,
					"recognizee.credentials_number":recognizeecredentials_number,
					"recognizee.bank_number":recognizeebank_number,
					"recognizee.address_shen":recognizeeaddress_shen,
					"recognizee.address_shi":recognizeeaddress_shi,
					"recognizee.drive_number":recognizeedrive_number
			},
			dataType : "json",
			success : function(data) {
				if(data==true){
					alert("修改成功！");
					var pagenum = $("#pagenum").val();
					window.location.href="Insurance_querying.jsp?pagenum="+pagenum;
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