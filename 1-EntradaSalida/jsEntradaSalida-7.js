/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var numeroUno = parseInt(document.getElementById("numeroUno").value, 10);
    var numeroDos = parseInt(document.getElementById("numeroDos").value, 10);
    var resultado = numeroUno + numeroDos;

    alert("la suma es " + resultado);
}

function restar()
{
	var numeroUno = parseInt(document.getElementById("numeroUno").value, 10);
    var numeroDos = parseInt(document.getElementById("numeroDos").value, 10);
    var resultado = numeroUno - numeroDos;

    alert("la resta es " + resultado);
}

function multiplicar()
{ 
	var numeroUno = parseInt(document.getElementById("numeroUno").value, 10);
    var numeroDos = parseInt(document.getElementById("numeroDos").value, 10);
    var resultado = numeroUno * numeroDos;

    alert("el producto es " + resultado);
}

function dividir()
{
	var numeroUno = parseInt(document.getElementById("numeroUno").value, 10);
    var numeroDos = parseInt(document.getElementById("numeroDos").value, 10);
    var resultado = numeroUno / numeroDos;

    alert("el cociente es " + resultado);
}

