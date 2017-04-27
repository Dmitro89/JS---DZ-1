
var visitorName = prompt("Кто пришел?", "");


if (visitorName == "Админ") {

	var password = prompt("Пароль", "");

	if (password == "Черный Властелин"){
		alert("Добро пожаловать!");

	}else if (password != null) {
		alert("Пароль не верен");
	
	}else if (password == null) {
		alert("Вход отменен");
	}

}else if (visitorName == null) {
	alert("Вход отменен");

}else {
	alert("Я вас не знаю");
}
