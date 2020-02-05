function mostrar()
{
//tomo la edad  

    var edad = parseInt(document.getElementById("edad").value);
    var estadoCivil = document.getElementById("estadoCivil").value;

    console.log(edad);
    console.log(estadoCivil);
    
    if(edad>17 && estadoCivil == "Soltero"){
        alert("demasiado joven para...");
    }
    

}//FIN DE LA FUNCIÓN