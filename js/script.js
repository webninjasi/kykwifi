var template_data = '<p>Bekleyiniz...</p><form name="f" id="f" action="https://wifi.kyk.gov.tr/j_spring_security_check" method="POST">'+
'<input autocomplete="off" type="hidden" name="j_username" value="@user" />'+
'<input autocomplete="off" type="hidden" name="j_password" value="@pass" />'+
'</form>'+
'<script>document.getElementById("f").submit();</script>';

$("#creator").submit(function() {
	var username = $("#username").val();
	var password = $("#password").val();

	$("#results").hide();

	if (!checkVal(username) || !checkVal(password)) {
		return false;
	}

	var data = template(username, password);
	data = "data:text/html;base64," + window.btoa(data);

	$("#output").text(data);
	$("#output2").attr("href", data);

	$("#errors").hide();
	$("#results").show();

	return false;
});

$("#output").click(function() {
	$(this).select();
});

function filterVal(text) {
	return text.replace(/"/g, '\\"');
}

function template(user, pass) {
	user = filterVal(user);
	pass = filterVal(pass);

	return template_data.replace(/@user/, user).replace(/@pass/, pass);
}

function checkVal(text) {
	if (text == "") {
		$("#errors").show();
		return false;
	}

	return true;
}