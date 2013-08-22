/**
 * jQuery Validation Library
 * @author Cassian LUP
 * @version 0.1
 * @date November 29, 2012
 * @category jQuery plugin
 * @copyright (c) 2012 Cassian LUP
 */

 //validates numbers only
function validateNumber(val) {
	return val.replace(/[^\d.]/g, "");
}

//validates to "#### ### ###" format
function validateRoTel(val) {
	//strip out all whitespaces
	val = val.replace(/\s/g, "");

	var valtemp = val.match(/\d+/)+"";
	if (valtemp != 'null') {
		valtemp = valtemp.substring(0, 4)+' '+valtemp.substring(4, 7)+' '+valtemp.substring(7, 10);
		return valtemp;
	} else {
		return "";
	}
}

//validates IBAN in "XXXX XXXX XXXX XXXX XXXX XXXX" format, where X can be [A-Z] or [0-9]
function validateIBAN(val) {
	//strip out all whitespaces
	val = val.replace(/\s/g, "");

var valtemp = val.match(/[0-9A-Z]*/)+"";
	if (valtemp != 'null') {
		valtemp = valtemp.substring(0, 4)+' '+valtemp.substring(4, 8)+' '+valtemp.substring(8, 12)+' '+valtemp.substring(12, 16)+' '+valtemp.substring(16, 20)+' '+valtemp.substring(20, 24);
		return valtemp;
	} else {
		return "";
	}
}

//validates email, returns true/false
function validateEmail(val) {
	var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(val);
}

//validates zip -- 6 numbers
function validateZip(val) {
	var valtemp = val.replace(/[^\d.]/g, "")+"";
	return valtemp.substr(0, 6);
}

$('.validNumber').live('keyup', function(e) { 
	//don't validate if backspace pressed
	if (e.keyCode != 8)
		$(this).val(validateNumber($(this).val()));
});

$('.validRoTel').live('keyup', function(e) { 
	//don't validate if backspace pressed
	if (e.keyCode != 8)
		$(this).val(validateRoTel($(this).val()));
});

$('.validRoTel').live('keyup', function(e) { 
	//don't validate if backspace pressed
	if (e.keyCode != 8)
		$(this).val(validateRoTel($(this).val()));
});

$('.validIBAN').live('keyup', function(e) { 
	//don't validate if backspace pressed
	if (e.keyCode != 8)
		$(this).val(validateIBAN($(this).val().toUpperCase()));
});

$('.validEmail').live('keyup', function() { 
	if (validateEmail($(this).val())) {
		//email is valid
		$(this).css('background-color', '#eff');
	} else {
		//email isn't valid
		$(this).css('background-color', '#fef');
	}
});

$('.validZip').live('keyup', function(e) { 
	//don't validate if backspace pressed
	if (e.keyCode != 8)
		$(this).val(validateZip($(this).val()));
});