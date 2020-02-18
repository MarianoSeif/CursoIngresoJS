
var eleccionMaquina = Math.floor(Math.random()*3) + 1;
console.log(eleccionMaquina);

function comenzar()
{
    
}

function piedra()
{
    switch(eleccionMaquina){
        case 1:
            alert("empate");
            break;
        case 2:
            alert("Ud. pierde");
            break;
        case 3:
            alert("Ud. gana");
            break;
    }
}


function papel()
{
    switch(eleccionMaquina){
        case 2:
            alert("empate");
            break;
        case 3:
            alert("Ud. pierde");
            break;
        case 1:
            alert("Ud. gana");
            break;
    }
}

function tijera()
{
    switch(eleccionMaquina){
        case 3:
            alert("empate");
            break;
        case 1:
            alert("Ud. pierde");
            break;
        case 2:
            alert("Ud. gana");
            break;
    }
}
