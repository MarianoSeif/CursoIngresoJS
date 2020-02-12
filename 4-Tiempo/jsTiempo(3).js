
var timer;

function inicio()
{
	var contador = 1;
	timer = setInterval(function(){
		alert("Bienvenido "+contador+" veces");
		contador ++;
	}, 2000);
}

function fin()
{
	console.log(timer);
	clearInterval(timer);
}
































/*
var miIntervalo ;
var contador=0;

function inicio()
{
	alert("function inicio.");
	miIntervalo = setInterval(SegundosEnElAire, 2000);
	
}//FIN DE LA FUNCIÓN inicio

function SegundosEnElAire() {

	contador=contador +1;
    alert("Bienvenido a la UTN FRA, cantidad ="+contador);
    
}//FIN DE LA FUNCIÓN SegundosEnElAire

function fin()
{
	alert("function fin.");
	clearInterval(miIntervalo);

}//FIN DE LA FUNCIÓN fin*/