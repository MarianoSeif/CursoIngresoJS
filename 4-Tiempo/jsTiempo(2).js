
var timer;

function inicio()
{
	timer = setInterval(function(){
		alert("bienvenido");
	}, 3000);
}

function fin()
{
	clearInterval(timer);
}
