function mostrar()
{

    var valor =  parseInt(prompt("Ingrese un numero: "));
    var i, cant_divisores=0;
    var divisores = new Array();

    for(i=1; i<=valor; i++){
        if((valor%i) == 0){
            cant_divisores ++;
            divisores.push(i);
        }
    }

    document.write("Los divisores son: ", divisores, "<br>", "La cantidad de divisores es: ", cant_divisores);


}//FIN DE LA FUNCIÓN