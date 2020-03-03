function mostrar()
{
    var continuar = true;
    var nombre, cantPersonas, diasEstadia, formaDePago, huespedMasPersonas, maxCantPersonas=0, maxDiasEstadia = 0;
    var tarjeta=0, efectivo=0, qr=0, contador=0, acumuladorDias=0, formaPagoMasUsado;

    while(continuar){
        nombre=prompt('Ingrese nombre: ');
        while(nombre==null || nombre==''){
            nombre=prompt('Incorrecto. Ingrese nombre: ');
        }
        
        cantPersonas=parseInt(prompt('Ingrese cant personas: '));
        while(cantPersonas<=0 || isNaN(cantPersonas)){
            cantPersonas=parseInt(prompt('Incorrecto. Ingrese cant personas: '));
        }

        diasEstadia=parseInt(prompt('Ingrese cant dias: '));
        while(diasEstadia<=0 || isNaN(diasEstadia)){
            diasEstadia=parseInt(prompt('Incorrecto. Ingrese cant dias: '));
        }

        formaDePago=prompt('Ingrese forma de pago');
        formaDePago=formaDePago.toLocaleLowerCase();
        while((formaDePago!='efectivo' && formaDePago!='tarjeta' && formaDePago!='qr')||formaDePago==null||formaDePago==''){
            formaDePago=prompt('Incorrecto. Ingrese forma de pago');
            formaDePago=formaDePago.toLocaleLowerCase();
        }

        console.log(nombre);
        console.log(cantPersonas);
        console.log(diasEstadia);
        console.log(formaDePago);

        if(cantPersonas>maxCantPersonas){
            maxCantPersonas=cantPersonas;
            huespedMasPersonas=nombre;
        }

        if(diasEstadia>maxDiasEstadia){
            maxDiasEstadia=diasEstadia;
            huespedesMasDias=cantPersonas;
        }

        switch(formaDePago){
            case 'tarjeta':
                tarjeta++;
                break;
            case 'efectivo':
                efectivo++;
                break;
            case 'qr':
                qr++;
                break;
        }

        if(tarjeta>efectivo && tarjeta>qr){
            formaPagoMasUsado = 'tarjeta';
        }else if(efectivo>tarjeta && efectivo>qr){
            formaPagoMasUsado = 'efectivo';
        }else if(qr>efectivo && qr>tarjeta){
            formaPagoMasUsado='qr';
        }

        acumuladorDias += diasEstadia;

        contador++;
        continuar=confirm('Desea continuar?');
    }

    document.write('El huesped con mas personas fue: ', huespedMasPersonas, '<br>',
                   'Cant de personas que se quedaron mas dias fue: ', huespedesMasDias, '<br>',
                   'Forma de pago mas utilizada: ', formaPagoMasUsado, '<br>',
                   'Promdedio dias reserva: ', acumuladorDias/contador, '<br>'
    );
}
