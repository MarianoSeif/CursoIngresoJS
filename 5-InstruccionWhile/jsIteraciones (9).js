function mostrar()
{
	var maximo;
	var minimo;
	var valor = prompt("Ingrese numero");
	maximo = minimo = parseInt(valor);

	while(valor!=null){
		valor = parseInt(valor);
		if(valor<minimo){
			minimo = valor;
		}
		if(valor>maximo){
			maximo = valor;
		}

		valor = prompt("Ingrese numero");
	}

	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;


}//FIN DE LA FUNCIÓN