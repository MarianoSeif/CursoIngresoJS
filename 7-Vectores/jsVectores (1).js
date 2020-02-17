
function mostrar()
{
	var i;
	var vector = new Array();

	for(i=0; i<10; i++){
		vector[i] = Math.round(Math.random()*10);
	}

	for(i=0;i<10;i++){
	    document.write("Posicion ", i,": ", vector[i], "<br>");
	}

}


/* 
function mostrar()
{

	var miArray = new Array();

	miArray[0]=5;
	miArray[1]=74;
	miArray[2]=8;
	miArray[3]=94;
	miArray[4]=5;
	miArray[5]=0;
	miArray[6]=80;
	miArray[7]=789;
	miArray[8]=5;
	miArray[9]=7;

document.write("El contenido del vector es: <br>");

	for(var i=0; i<10; i++)
	{

		document.write("Posicion "+i+"-->"+miArray[i]+"<br>");
	}





}//FIN DE LA FUNCIÓN */