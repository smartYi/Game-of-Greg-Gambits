function getName() {
	var name = prompt("Please enter your name: ", "");
	document.getElementById("myname").innerHTML = name;
}

function getUsername() {
	var name = prompt("Please enter user name: ", "");
	document.getElementById("username").innerHTML = name;
}


function seeAvatar() {
	window.open("avatar.html");
}

function pickAvatar() {
	var name = prompt("Please enter your avatar: ", "");
	document.getElementById("avatar").innerHTML = name;
}