function mostrar()
{

    var valor =  parseInt(prompt("Ingrese un numero: "));
    var i, cant_divisores=0;

    for(i=1; i<=valor; i++){
        if((valor%i) == 0){
            cant_divisores ++;
        }
    }

    if(cant_divisores<3){
        alert("El numero ES primo");
    }else{
        alert("El numero NO ES primo");
    }


}//FIN DE LA FUNCIÓN