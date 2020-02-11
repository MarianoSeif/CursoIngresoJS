function mostrar()
{
	var contador=0;
	var acumulador=0;
	var valor = prompt("Ingrese numero");
	
	while (valor!=null){
		acumulador += parseInt(valor);
		contador ++;
		valor = prompt("Ingrese numero");
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN