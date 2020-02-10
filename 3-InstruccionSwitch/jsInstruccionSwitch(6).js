function mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;
console.log("running");

switch(laHora){
    case "7":
    case "8":
    case "9":
    case "10":
    case "11":
        alert("Es de mañana!");
        break;
    case "12":
    case "13":
    case "19":
        alert("Es de tarde");
        break;
    case "20":
    case "6":
        alert("Es de noche");
        break;
    default:
        alert("Ingrese una hora correcta");
        break;
}

}//FIN DE LA FUNCIÓN