function init() {
	var html_btn = document.getElementById("btn");
	html_btn.onclick = convert_button_click;
}

function print_conversion(usd, vnd) {
	var html_message = document.getElementById("message");
	html_message.textContent = "Bạn đã nhập: " + usd + " USD, đã chuyển đổi thành công sang VND: " + vnd + "k";
}

function convert_button_click() {
	var usd = prompt("Nhập USD");
	var vnd = usd*22;
	print_conversion(usd, vnd)
}

window.onload = init;
