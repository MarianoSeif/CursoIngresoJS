function mostrar()
{
    var continuar = 's';
    var marcas, pesos, temperaturas;
    var marca, peso, temperatura, cantTemperaturasPares = 0, marcaMasPesado, acumuladorPeso = 0, pesoMasPesado = 0;
    var pesoMasLiviano = 0, productosBajoCero = 0, contador= 0;
        

    while (continuar=='s'){

        marca = prompt('Ingrese marca: ');
        while(marca==null || marca==''){
            marca = prompt('Incorrecto. Ingrese marca nuevamente: ');
        }
                
        peso = parseInt(prompt('Ingrese peso (entre 1 y 100): '));
        while (peso<1 || peso>100 || isNaN(peso)){
            peso = parseInt(prompt('Incorrecto. Ingrese peso (entre 1 y 100): '));
        }
        
        temperatura = parseInt(prompt('Ingrese temperatura (entre -30 y 30): '));
        while (temperatura<-30 || temperatura >30 || isNaN(temperatura)){
            temperatura = parseInt(prompt('Incorrecto. Ingrese temperatura (entre -30 y 30): '));
        }

        if (pesoMasPesado == 0){
            pesoMasPesado = peso;
            pesoMasLiviano = peso;        
        }
        
        if (peso>pesoMasPesado){
            pesoMasPesado = peso;
            marcaMasPesado = marca;
        }else if (peso<pesoMasLiviano){
            pesoMasLiviano = peso;
        }
        
        acumuladorPeso += peso;
        
        if ((temperatura%2) ==0){
            cantTemperaturasPares++;
        }
        if (temperatura<0){
            productosBajoCero++;
        }
        
        continuar = prompt('Desea continuar (S/N)?: ');
        continuar = continuar.toLocaleLowerCase();
        
        contador++;
    }

    document.write('Cant temp pares: ', cantTemperaturasPares, '<br>',
                   'El prod mas pesado es: ', marcaMasPesado, '<br>',
                   'prod bajo cero: ', productosBajoCero, '<br>',
                   'Peso promedio', acumuladorPeso/contador, '<br>',
                   'Peso maximo: ', pesoMasPesado, '<br>',
                   'Peso minimo: ', pesoMasLiviano);
}
