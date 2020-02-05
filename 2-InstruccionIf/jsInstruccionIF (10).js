function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota = Math.round(Math.random()*10);
	console.log(nota);
	if(nota>=9){
		alert("Excelente");
	}else if(nota<9 && nota>4){
		alert("aprobó");
	}else{
		alert("la proxima");
	}

}//FIN DE LA FUNCIÓN