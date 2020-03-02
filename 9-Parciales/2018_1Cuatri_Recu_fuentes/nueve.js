function mostrar()
{
    var continuar='s';
    var nombre, peso, temperatura, cantTempPares = 0, contador = 0, tempMasPesado, nombreMasPesado, cantBajoCero = 0;
    var acumuladorPeso = 0, pesoMaximoBajoCero = 0, pesoMinimoBajoCero = 0, pesoMasPesado;

    while(continuar=='s'){
        nombre = prompt('Ingrese nombre: ');
        
        peso = parseInt(prompt('Ingrese el peso: '));
        while(peso<1 || peso>1000 || isNaN(peso)){
            peso = parseInt(prompt('Ingrese el peso: '));
        }

        temperatura = parseInt(prompt('Ingrese la temperatura: '));
        while(temperatura<-30 || temperatura>30 || isNaN(temperatura)){
            temperatura = parseInt(prompt('Ingrese la temperatura: '));
        }

        if((temperatura%2) == 0){
            cantTempPares++;
        }

        if(contador==0 || peso>pesoMasPesado){
            pesoMasPesado = peso;
            tempMasPesado = temperatura;
            nombreMasPesado = nombre;
        }
        
        if(temperatura<0){
            cantBajoCero++;
            if(pesoMaximoBajoCero == 0 || peso>pesoMaximoBajoCero){
                pesoMaximoBajoCero = peso;
            }
            if(pesoMinimoBajoCero == 0 || peso<pesoMinimoBajoCero){
                pesoMinimoBajoCero = peso;
            }
        }

        acumuladorPeso += peso;
        contador++;

        continuar = prompt('Desea continuar?(S/N): ');
        continuar = continuar.toLocaleLowerCase();

    }

    document.write('Cant. temp. pares: ', cantTempPares, '<br>',
                   'Nombre mas pesado: ', nombreMasPesado, '<br>',
                   'Temp. mas pesado: ', tempMasPesado, '<br>',
                   'Cant. animales bajo cero: ', cantBajoCero, '<br>',
                   'Promedio de peso: ', acumuladorPeso/contador, '<br>',
                   'Peso maximo bajo cero: ', pesoMaximoBajoCero, '<br>',
                   'Peso minimo bajo cero: ', pesoMinimoBajoCero, '<br>'
    );
}
