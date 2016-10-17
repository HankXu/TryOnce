
	var vali_form="join-form";
	var vali_options=['name','class','position','tel'];


	function validate_form(){
		if(!vali_null()){
			return false;
		}else if (!vali_tel()) {
			return false;
		}else if(!vali_stel()){
			return false;
		}else{
			document.forms[vali_form].submit();
		}
	}

	function vali_null(){
		var input_option;
		for(input_option in vali_options){
			var i_option=document.forms[vali_form][input_option];
			if(i_option.value==null||i_option.value==""){
				i_option.setAttribute("placeholder","此项不可以为空哦~");
				i_option.style.border="1px solid #FD4C4C";
				i_option.setAttribute("onfocus","reset_css(this);");
				return false;
			}
		}
		return true;	
	}

	function vali_tel(){
		var i_option=document.forms[vali_form]['tel'];
		var reg=/^0?1[3|4|5|8][0-9]\d{8}$/;
		if (reg.test(i_option.value)) {
			return true;
		}else{
			i_option.setAttribute("placeholder","手机号码不对吧~");
			i_option.value="";
			i_option.style.border="1px solid #FD4C4C";
			i_option.setAttribute("onfocus","reset_css(this);");
			return false;
		}
	}

	function vali_stel(){
		var i_option=document.forms[vali_form]['shorttel'];
		var reg=/^0?6\d{5}$/;
		if((i_option.value!=null&&i_option.value!="")&&!reg.test(i_option.value)){
			i_option.setAttribute("placeholder","短号格式有问题哦~");
			i_option.value="";
			i_option.style.border="1px solid #FD4C4C";
			i_option.setAttribute("onfocus","reset_css(this);");
			return false;
		}else{
			return true;
		}
	}

	function reset_css(op){
		var all_vali_options=['name','class','position','tel','shorttel'];
		var init_holder=['你的姓名','你的班级','方向：后台、前端、安卓、UI设计、算法','手机号码','短号（可不填)'];

		
		if(op.style.border=="1px solid rgb(253, 76, 76)"){
			op.removeAttribute('onfocus');
			op.style.border="1px solid #CECECE";
			if (op.name=='tel') op.setAttribute("placeholder",'手机号码');
			else if (op.name=='name') op.setAttribute("placeholder",'你的名字');
			else if (op.name=='class') op.setAttribute("placeholder",'你的班级');
			else if (op.name=='position') op.setAttribute("placeholder",'方向：后台、前端、安卓、UI设计、算法');
			else if (op.name=='shorttel') op.setAttribute("placeholder",'短号（可不填)');
		}else{
			op.removeAttribute('onfocus');
		}
	}


