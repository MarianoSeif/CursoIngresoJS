function mostrar()
{
	var i, suma=0;
	var vector = new Array();

	for(i=0; i<5; i++){
		vector[i] = parseInt(prompt("Ingrese numero: "));
		suma += vector[i];
	}

	for(i=0; i<5; i++){
		document.write("Posicion ", i,": ", vector[i], "<br>");
	}

	document.write("La sumatoria de los numeros es: ", suma);
}























/* 

function mostrar()
{

	var miArray = new Array();
	var acum=0;
	for (var i = 0; i <5; i++)
	{
		miArray[i]=parseInt(prompt("Ingrese un numero"));
		acum+=miArray[i];

	}



	for(var i=0; i<5; i++)
	{

		document.write("Posicion "+i+"-->"+miArray[i]+"<br>");


	}

	document.write("<h1> La suma de todos los numeros es: "+acum+"</h1>")




}//FIN DE LA FUNCIÓN */