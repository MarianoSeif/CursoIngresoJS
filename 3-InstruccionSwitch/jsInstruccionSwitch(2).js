function mostrar()
{
    var mes = document.getElementById('mes').value;

    switch(mes){
        case "Julio":
        case "Agosto":
            alert("Abrigate!");
            break;
        case "Septiembre":
        case "Octubre":
        case "Noviembre":
        case "Diciembre":
            alert("ahora calor!");
            break;
        case "Enero":
        case "Febrero":
        case "Marzo":
        case "Abril":
        case "Mayo":
        case "Junio":
            alert("Falta para el invierno!");
            break;
        
    }




}//FIN DE LA FUNCIÓN