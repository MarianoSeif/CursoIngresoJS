function mostrar()
{
    var i, altura, sexo, acumulador=0, masBajo, sexoMasBajo, esAlta=0, alturaPromedio;

    for(i=0; i<5; i++)
    {
        altura = parseInt(prompt('Ingrese altura: '));
        while(altura<0 || altura>250 || isNaN(altura)){
            altura = parseInt(prompt('Incorrecto!. Ingrese altura: '));
        }

        sexo = prompt('Ingrese sexo(m/f): ');
        sexo = sexo.toLocaleLowerCase();
        console.log(sexo);
        while(sexo!='m' && sexo!='f'){
            sexo = prompt('Incorrecto. Ingrese sexo(m/f): ');
            sexo = sexo.toLocaleLowerCase();
            console.log(sexo);
        }

        acumulador += altura;

        if(i==0 || altura < masBajo){
            masBajo = altura;
            sexoMasBajo = sexo;
        }

        if(altura>190 && sexo=='f'){
            esAlta++;
        }
    }

    alturaPromedio = acumulador/5;

    alert('El promedio es '+alturaPromedio+' cms\n'+
          'La altura mas baja es '+masBajo+' y corresponde al sexo '+sexoMasBajo+'\n'+
          'La cant de mujeres qie supera el 190 es '+esAlta
    )
}
