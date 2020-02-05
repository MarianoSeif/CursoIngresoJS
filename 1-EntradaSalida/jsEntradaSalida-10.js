/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var sueldo = parseInt(document.getElementById("importe").value, 10);
    var sueldoDescontado = parseInt(sueldo - (sueldo * 0.25));
    document.getElementById("resultado").value = sueldoDescontado;
}
