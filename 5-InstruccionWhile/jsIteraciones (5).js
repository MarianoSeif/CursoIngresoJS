function mostrar()
{
    var sexo = prompt("ingrese f ó m .");
    while(sexo!="f" && sexo!="m"){
        console.log("adentro del while");
        sexo = prompt("Ingrese Nuevamente (f ó m)");
    }
    if(sexo=="f"){
        sexo="femenino"
    }else{
        sexo="masculino"
    }
    document.getElementById('Sexo').value = sexo;

}//FIN DE LA FUNCIÓN