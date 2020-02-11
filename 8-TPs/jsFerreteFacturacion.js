/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno = parseInt(document.getElementById("PrecioUno").value);
    var precioDos = parseInt(document.getElementById("PrecioDos").value);
    var precioTres = parseInt(document.getElementById("PrecioTres").value);
    
    alert("La suma es: "+(precioUno+precioDos+precioTres).toString());

}
function Promedio () 
{
	var precioUno = parseInt(document.getElementById("PrecioUno").value);
    var precioDos = parseInt(document.getElementById("PrecioDos").value);
    var precioTres = parseInt(document.getElementById("PrecioTres").value);
    
    alert("El promedio es: "+((precioUno+precioDos+precioTres)/3).toString());
}
function PrecioFinal () 
{
	var precioUno = parseInt(document.getElementById("PrecioUno").value);
    var precioDos = parseInt(document.getElementById("PrecioDos").value);
    var precioTres = parseInt(document.getElementById("PrecioTres").value);
    
    alert("La suma es: "+((precioUno+precioDos+precioTres)*1.21).toString());
}