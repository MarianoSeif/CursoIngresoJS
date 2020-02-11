function mostrar()
{
	var positivo=0;
	var negativo=1;
	var valor = prompt("Ingrese numero");
	
	while(valor!=null){
		valor = parseInt(valor);
		if(valor>0){
			positivo += valor;
		}else{
			negativo = negativo * valor;
		}

		valor = prompt("Ingrese numero");
	}

	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN