function mostrar()
{
    var continuar=true, pares=0, impares=0, ceros=0, acumuladorPositivos=0, contadorPositivos=0, flag=true, acumuladorNegativos=0;
    var letra, numero, maximo, letraMaximo, minimo, letraMinimo;

    while(continuar)
    {
        letra = prompt('Ingrese una letra: ');
        largo = letra.length;
        
        while(
                !(
                    (letra>='a' && letra<='z') || (letra>='A' && letra<='Z')
                )
            ){
            letra = prompt('INCORRECTO. Ingrese nuevamente: ');
        }

        numero = parseInt(prompt('Ingrese un numero: '));
        while(isNaN(numero) || numero<-100 || numero>100){
            numero = parseInt(prompt('INCORRECTO. Ingrese un numero: '));
        }

        console.log(letra);
        console.log(numero);

        if(flag){
            maximo = numero;
            letraMaximo = letra;
            minimo = numero;
            letraMinimo = letra;
            flag=false;
        }
        
        if(numero%2 == 0){
            pares++;
        }else{
            impares++;
        }

        if(numero>0){
            acumuladorPositivos+=numero;
            contadorPositivos++;
        }else if(numero<0){
            acumuladorNegativos += numero;
        }else{
            ceros++;
        }

        if(numero<minimo){
            minimo = numero;
            letraMinimo = letra;
        }
        
        if(numero>maximo){
            maximo = numero;
            letraMaximo = letra;
        }

        continuar=confirm('Desea continuar?');
    }
       
    document.write('cantidad de números pares es ', pares, '<br>',
                   'cantidad de números impares es ', impares, '<br>',
                   'cantidad de ceros es ', ceros, '<br>',
                   'promedio de todos los números positivos ingresados es ', acumuladorPositivos/contadorPositivos, '<br>',
                   'suma de todos los números negativos es ', acumuladorNegativos, '<br>',
                   'El número y la letra del máximo: ', maximo, ', ',letraMaximo, '<br>',
                   'El número y la letra del mínimo: ', minimo,  ', ',letraMinimo, '<br>',

    );

 
    
    
    /* letra = prompt('ingrese una letra: ');
    while(!((letra>='a' && letra<='z') || (letra>='A' && letra<='Z')))
    {
        letra = prompt('DIJE. Ingrese una letra');
    }
    console.log(letra);

    max=parseInt(prompt('Ingrese maximo: '));
    min=parseInt(prompt('Ingrese minimo: '));
    
    for(i=0; i<50; i++){
        console.log(Math.floor( Math.random()*(max-min)+min ));
    } */
}


