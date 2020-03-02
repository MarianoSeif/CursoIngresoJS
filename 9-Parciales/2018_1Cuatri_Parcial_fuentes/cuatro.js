function mostrar()
{
    var primerNumero = parseInt(prompt('Ingrese el primer numero: '));
    var segundoNumero = parseInt(prompt('Ingrese el segundo numero: '));

    if (primerNumero == segundoNumero){
        alert('Resultado: '+primerNumero+segundoNumero);
    }else if(primerNumero > segundoNumero){
        alert('Resultado: '+(primerNumero-segundoNumero));
    }else {
        if ((primerNumero+segundoNumero)>10){
            alert('Resultado: '+(primerNumero+segundoNumero)+ ' - la suma es: '+(primerNumero+segundoNumero)+' y superó el 10');
        }else{
            alert('Resultado: '+(primerNumero+segundoNumero));
        }
    }
    
}
