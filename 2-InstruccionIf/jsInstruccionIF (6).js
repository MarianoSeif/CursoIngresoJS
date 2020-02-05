function mostrar()
{
//tomo la edad  

var edad = parseInt(document.getElementById("edad").value);
if (edad<0){
    alert("ingrese una edad!")
}else if(edad<13){
    alert("niño!");
}else if(edad>=13 && edad<=17){
    alert("adolescente");
}else{
    alert("mayor de edad");
}


}//FIN DE LA FUNCIÓN