/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
function comenzar()
{
    document.getElementById("PrimerNumero").value = Math.round(Math.random()*10);
    document.getElementById("SegundoNumero").value = Math.round(Math.random()*10);
    var operacion = Math.floor(Math.random()*3);
    switch(operacion){
        case 0:
            document.getElementById("Operador").value = "Suma";
            respuesta = parseInt(document.getElementById("PrimerNumero").value) + parseInt(document.getElementById("SegundoNumero").value); 
            break;
        case 1:
            document.getElementById("Operador").value = "Resta";
            respuesta = parseInt(document.getElementById("PrimerNumero").value) - parseInt(document.getElementById("SegundoNumero").value);
            break;
        case 2:
            document.getElementById("Operador").value = "Multiplicacion";
            respuesta = parseInt(document.getElementById("PrimerNumero").value) * parseInt(document.getElementById("SegundoNumero").value);
            break;
        case 3:
            document.getElementById("Operador").value = "Division";
            respuesta = parseInt(document.getElementById("PrimerNumero").value) / parseInt(document.getElementById("SegundoNumero").value);
            break;
    }

}

function Responder()
{
    respuestaUsuario = parseInt(document.getElementById("Respuesta").value);
    if(respuesta == respuestaUsuario){
        alert("correcto");
    }else{
        alert("incorrecto");
    }

}


