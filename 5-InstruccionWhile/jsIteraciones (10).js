function mostrar()
{
	
	var suma_negativos = 0;
	var cantidad_negativos = 0;

	var suma_positivos = 0;
	var cantidad_positivos = 0;

	var cantidad_ceros = 0;
	var cantidad_pares = 0;

	var valor = prompt("Ingrese numero");

	while(valor!=null){
		valor = parseInt(valor);
		console.log("valor: ", valor);
		if(valor<0){
			console.log("negativos");
			suma_negativos += valor;
			cantidad_negativos ++;
		}else if(valor>0){
			suma_positivos += valor;
			cantidad_positivos ++;
		}else{
			cantidad_ceros ++;
		} 

		if(valor!=0){
			if((valor%2) == 0){
				cantidad_pares ++;
			}
		}
		
		var valor = prompt("Ingrese numero");
	}


	document.write("La suma de los numeros negativos es: ", suma_negativos, "<br>",
					 "La suma de los numeros positivos es: ", suma_positivos, "<br>", 
					 "La cantidad de positivos es: ", cantidad_positivos, "<br>",
					 "La cantidad de negativos es: ", cantidad_negativos, "<br>",
					 "La cantidad de ceros es: ", cantidad_ceros, "<br>",
					 "La cantidad de numeros pares es: ", cantidad_pares, "<br>",
					 "El promedio de los positivos es: ", (suma_positivos/cantidad_positivos), "<br>",
					 "El promedio de los negativos es: ", (suma_negativos/cantidad_negativos), "<br>",
					 "La diferencia es: ", (suma_positivos-suma_negativos)
					 );


}//FIN DE LA FUNCIÓN