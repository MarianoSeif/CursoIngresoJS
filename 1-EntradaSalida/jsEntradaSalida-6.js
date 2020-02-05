/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var numeroUno = parseInt(document.getElementById("numeroUno").value, 10);
    var numeroDos = parseInt(document.getElementById("numeroDos").value, 10);
    var resultado = numeroUno+numeroDos;
    alert("la suma es " + resultado);
}

