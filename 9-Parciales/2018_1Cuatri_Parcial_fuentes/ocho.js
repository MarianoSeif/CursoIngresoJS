function mostrar()
{
    var continuar = 's';
    var maximo, minimo, letraMaximo, letraMinimo, cantPares = 0, cantImpares = 0, cantCeros = 0, acumuladorPositivos = 0;
    var acumuladorNegativos = 0, contadorPositivos = 0;
    var flag = true;

    while (continuar == 's') {
        letra = prompt('Ingrese letra: ');
        while(!((letra>='A' && letra<='Z') || (letra>='a' && letra<='z'))){
            letra = prompt('Ingrese letra nuevamente: ');
        }
        
        numero = parseInt(prompt('Ingrese numero: '));
        while (numero<-100 || numero>100 || isNaN(numero)){
            numero = parseInt(prompt('Ingrese numero: '));
        }

        if (flag){
            minimo = numero;
            letraMinimo = letra;
            maximo = numero;
            letraMaximo = letra;
            flag = false;
        }

        if (numero<minimo){
            minimo = numero;
            letraMinimo = letra;
        }
        if (numero>maximo){
            maximo = numero;
            letraMaximo = letra;
        }

        if ((numero%2) == 0){
            cantPares++;
        }else{ cantImpares++; }

        if (numero>0){
            acumuladorPositivos += numero;
            contadorPositivos++;
        }else if (numero<0){
            acumuladorNegativos += numero;
        }else {
            cantCeros++;
        }

        continuar = prompt('Desea continuar? (S/N): ');
        continuar = continuar.toLocaleLowerCase();
    }

    document.write('cant pares: ', cantPares, '<br>',
                   'cant impares: ', cantImpares, '<br>',
                   'cant ceros: ', cantCeros, '<br>',
                   'prom positivos: ', acumuladorPositivos/contadorPositivos, '<br>',
                   'suma negativos: ', acumuladorNegativos, '<br>',
                   'letra maximo: ', letraMaximo, '<br>',
                   'numero maximo: ', maximo, '<br>',
                   'letra minimo: ', letraMinimo, '<br>',
                   'numero minimo: ', minimo, '<br>'
    );
}
