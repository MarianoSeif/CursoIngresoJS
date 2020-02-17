function mostrar()
{
    var mes = document.getElementById('mes').value;
    switch(mes)
    {
        case "Febrero":
            alert("Este mes no tiene mas de 29 dias");
            break;
        default:
            alert("Tiene 30 o mas");
            break;
    }

}