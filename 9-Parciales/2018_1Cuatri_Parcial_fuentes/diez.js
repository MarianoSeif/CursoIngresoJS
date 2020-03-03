function mostrar()
{
    var continuar=true;
    var contenedor = 0, marca, kilosPorBolsa, cantBolsas, importePorBolsa;

    while(continuar && contenedor < 1000){
        marca=prompt('Ingrese nombre: ');
        while(marca==null || marca==''){
            marca=prompt('Incorrecto. Ingrese marca: ');
        }

        kilosPorBolsa=parseInt(prompt('Ingrese kilos por bolsa: '));
        while(kilosPorBolsa<1 || kilosPorBolsa > 1000 ||isNaN(kilosPorBolsa)){
            kilosPorBolsa=parseInt(prompt('Incorrecto. Ingrese kilos por bolsa: '));
        }

        cantBolsas=parseInt(prompt('Ingrese cant de bolsas: '));
        while(cantBolsas<1 || (cantBolsas*kilosPorBolsa) > 1000 ||isNaN(cantBolsas)){
            cantBolsas=parseInt(prompt('Incorrecto. Ingrese cant de bolsas: '));
        }

        importePorBolsa=parseInt(prompt('Ingrese importe por bolsa: '));
        while(isNaN(importePorBolsa)){
            importePorBolsa=parseInt(prompt('Incorrecto. Ingrese importe por bolsa: '));
        }

        console.log(marca);
        console.log(kilosPorBolsa);
        console.log(cantBolsas);
        console.log(importePorBolsa);

        contenedor += (kilosPorBolsa*cantBolsas);
        continuar = confirm('Desea continuar?: ');
        
    }
}
