
function mostrar()
{
	var i;
	var vector = new Array();

	for(i=0; i<5; i++){
		vector[i] = parseInt(prompt("Ingrese numero: "));
	}

	for(i=0; i<5; i++){
		document.write("Posicion ", i,": ", vector[i], "<br>");
	}
}



























/* 
function mostrar()
{

	var miArray = new Array();

	for (var i = 0; i <5; i++)
	{
		miArray[i]=parseInt(prompt("Ingrese un numero"));
	}



	for(var i=0; i<5; i++)
	{

		document.write("Posicion "+i+"-->"+miArray[i]+"<br>");
	}





}//FIN DE LA FUNCIÓN */