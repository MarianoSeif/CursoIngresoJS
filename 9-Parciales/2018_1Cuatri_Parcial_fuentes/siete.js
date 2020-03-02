function mostrar()
{
    var i, nota, sexo, acumulador = 0, minimo=10, sexoDelMinimo, cantVaronesMayorSeis = 0;

    for(i=0; i<5; i++){
        nota = parseInt(prompt('Ingrese nota (0-10): '));
        while (nota<0 || nota>10 || isNaN(nota)){
            nota = parseInt(prompt('Ingrese nota nuevamente: '));
        }

        sexo = prompt('Ingrese sexo (m o f): ');
        sexo = sexo.toLocaleLowerCase();
        while (!( sexo == 'f' || sexo == 'm')){
            sexo = prompt('Ingrese sexo nuevamente: ');
            sexo = sexo.toLocaleLowerCase();
        }

        acumulador += nota;
        
        if (nota<=minimo){
            minimo = nota;
            sexoDelMinimo = sexo;
        }

        if (nota>=6 && sexo == 'm'){
            cantVaronesMayorSeis++;
        }
    }

    alert('Promedio: '+(acumulador/5));
    alert('mas baja: '+minimo+' sexo: '+sexoDelMinimo);
    alert('varones mayor o igual a 6: '+cantVaronesMayorSeis);
}
