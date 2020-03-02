function mostrar()
{
    var continuar = 's';
    var marcas = new Array();
    var pesos = new Array();
    var temperaturas = new Array();
    var marca, peso, temperatura, cantTemperaturasPares = 0, marcaMasPesado, acumuladorPeso = 0, pesoMasPesado;
    var pesoMasLiviano, productosBajoCero = 0, contador= 0;
    var flag = true;
    

    while (continuar=='s'){

        marca = prompt('Ingrese marca: ')
        marcas.push(marca);
        
        peso = parseInt(prompt('Ingrese peso (entre 1 y 100): '));
        while (peso<1 || peso>100 || isNaN(peso)){
            peso = parseInt(prompt('Ingrese peso (entre 1 y 100): '));
        }
        pesos.push(peso);
        if (flag){
            pesoMasPesado = peso;
            pesoMasLiviano = peso;
            flag = false;
        }
        
        if (peso>pesoMasPesado){
            pesoMasPesado = peso;
            marcaMasPesado = marca;
        }
        if (peso<pesoMasLiviano){
            pesoMasLiviano = peso;
        }
        acumuladorPeso += peso;
        
        temperatura = parseInt(prompt('Ingrese temperatura (entre -30 y 30): '));
        while (temperatura<-30 || temperatura >30 || isNaN(temperatura)){
            temperatura = parseInt(prompt('Ingrese temperatura (entre -30 y 30): '));
        }
        temperaturas.push(temperatura);
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
