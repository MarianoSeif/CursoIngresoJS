function mostrar()
{
    var planeta = prompt('Ingrese un planeta: ').toLocaleLowerCase();
    console.log(planeta);

    switch(planeta){
        case 'mercurio':
        case 'venus':
            alert('aca hace mas calor');
            break;
        case 'tierra':
            alert('aca vivimos');
            break;
        case 'marte':
        case 'jupiter':
        case 'saturno':
        case 'urano':
        case 'neptuno':
        case 'pluton':
            alert('aca hace mas frio');
            break;
        default:
            alert('no es un planeta válido');
            break;
    }

}