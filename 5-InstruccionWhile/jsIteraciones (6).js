function mostrar()
{
	var contador=0;
	var acumulador=0;
	var numeroIngresado;

	while(contador<5){
		numeroIngresado = parseInt(prompt("Ingrese nuevamente: "));
		while (isNaN(numeroIngresado)){
			numeroIngresado = parseInt(prompt("Ingrese nuevamente: "));
		}
		console.log(numeroIngresado);
		acumulador += numeroIngresado;
		contador ++;
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN