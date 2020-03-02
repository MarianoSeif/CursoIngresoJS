function mostrar()
{
    var precio = parseInt(prompt('Ingrese el precio: '));
    var descuento = parseInt(prompt('Ingrese el porcentaje de descuento: '));

    document.getElementById('elPrecioFinal').value = precio - (precio*descuento/100);
}
