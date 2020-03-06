function mostrar()
{
    var nombre, habitantes, paisMenosHabitantes, paisesHot=0;
    var continuar = true, cantTemperaturasPares=0, contador=0, acumulador=0, tempMinima=0, paisCold, minimoHabitantes;
    
    while(continuar)
    {

        nombre = prompt('Ingrese nombre: ');
        while(nombre==null || nombre==''){
            nombre = prompt('Incorrecto!. Ingrese nombre nuevamente: ');
        }

        habitantes = parseInt(prompt('Ingrese cantidad de habitantes(en millones): '));
        while(habitantes<1 || habitantes>7000){
            habitantes = parseInt(prompt('Incorrecto!. Ingrese cantidad de habitantes nuevamente: '));
        }

        temperatura = parseInt(prompt('Ingrese la temperatura minima registrada: '));
        while(temperatura<-50 || temperatura>50){
            temperatura = parseInt(prompt('Incorrecto!. Ingrese cantidad de habitantes nuevamente: '));
        }

        console.log(nombre);
        console.log(habitantes);
        console.log(temperatura);

        if((temperatura%2) == 0){
            cantTemperaturasPares++;
        }

        if(contador==0 || habitantes<minimoHabitantes){
            minimoHabitantes = habitantes;
            paisMenosHabitantes = nombre;
        }

        if(temperatura>40){
            paisesHot++;
        }

        acumulador += habitantes;

        if(contador==0 || temperatura<tempMinima){
            tempMinima = temperatura;
            paisCold = nombre;
        }

        contador++;
        continuar = confirm('Desea continuar?: ');
    }

    document.write('Temp pares: ', cantTemperaturasPares, '<br>',
                   'Pais con menos hab: ', paisMenosHabitantes, '<br>',
                   'Paises que superan los 40 grados: ', paisesHot, '<br>',
                   'Prom hab: ', acumulador/contador, '<br>',
                   'El pais mas frio es ', paisCold, ' con ', tempMinima, ' grados de temp <br>'
    
    );
}
