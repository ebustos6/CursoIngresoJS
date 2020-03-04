function mostrar()
{
var letra;
var numero;
var seguir;
var cantidad_pares = 0;
var cantidad_impares = 0;
var cantidad_ceros = 0;
var acumulador_positivos = 0;
var acumulador_negativos = 0;
var contador_positivos = 0;
var maximo;
var minimo;
var letra_min;
var letra_max;
var letramin_min;
var numeromin_min;
var flag = 0;


do{

    letra = prompt("Ingrese una letra: ");

    while(!((letra>= "A" && letra <= "Z") || (letra >= "a" && letra <= "z")) ){
    letra = prompt("Eso no es una letra. Ingrese una letra: ");

    }
    
    numero = parseInt(prompt("Ingrese un número (-100 y 100): "));
    while(numero < - 100 || numero > 100 || isNaN(numero)){
        numero = parseint(prompt("Dato inválido. Ingrese un número (-100 y 100): "));

    }

    if(numero % 2 != 0){
        cantidad_impares++;
        
    }
    else {
        cantidad_pares++;
    }

    if(numero == 0){
        cantidad_ceros++;
    }

    else if(numero > 0){
        acumulador_positivos = acumulador_positivos + numero;
        contador_positivos++;
    }

    else{
       acumulador_negativos = acumulador_negativos + numero;
    }

    if(flag == 0 || numero > maximo){
        numero = maximo;
        letra = letra_max;
        flag = 1
    }

    else if(numero < minimo){
        numero = minimo;
        letra = letra_min;
    }

    if(letra )
}while(seguir == "s")




}


/* 
function mostrar() {
    var letra;
    var numero;
    var seguir;
    var contadorPares = 0;
    var contadorImpares = 0;
    var contadorCeros = 0;
    var contadorPos = 0;
    var acumuladorPos = 0;
    var acumuladorNeg = 0;
    var maximo;
    var minimo;
    var letraMax;
    var letraMin;
    var flag = 0;
    var minimoMinus;
    var letraMinMinus;
    var flagMinus = 0;
    var promedioPos = 0;

    do {
        // pido los datos
        letra = prompt("Ingrese una letra: ");
        while (!((letra >= 'A' && letra <= 'Z') || (letra >= 'a' && letra <= 'z'))) {
            letra = prompt("Eso no es una letra. Ingrese una letra: ");
        }

        numero = parseInt(prompt("Ingrese un numero (-100 y 100): "));
        while (numero < -100 || numero > 100 || isNaN(numero)) {
            numero = parseInt(prompt("Dato invalido. Ingrese un numero (-100 y 100): "));
        }
        // ------------- paridad ---------------

        if (numero % 2 == 0) {
            // pares
            contadorPares++;
        }
        else {
            // impares
            contadorImpares++;
        }

        // --------------- signo ---------------

        if (numero == 0) {
            // ceros
            contadorCeros++;
        }
        else if (numero > 0) {
            // positivos
            acumuladorPos = acumuladorPos + numero;
            contadorPos++;
        }
        else {
            // negativo
            acumuladorNeg = acumuladorNeg + numero;
        }

        // ------------- maximos y minimos -------------

        if (flag == 0 || numero < minimo) {
            minimo = numero;
            letraMin = letra;
        }
        if (flag == 0 || numero > maximo) {
            maximo = numero;
            letraMax = letra;
            flag = 1;
        }

        // --------------- g --------------

        if ((letra >= 'a' && letra <= 'z') && (flagMinus == 0 || numero < minimoMinus)) {
            minimoMinus = numero;
            letraMinMinus = letra;
            flagMinus = 1;
        }

        seguir = prompt("Quiere continuar?: ");
    } while (seguir == 's');

    if (contadorPos != 0) {
        promedioPos = acumuladorPos / contadorPos;
    }

    document.write("a) La cantidad de números pares: " + contadorPares + "</br>");
    document.write("b) La cantidad de números impares: " + contadorImpares + "</br>");
    document.write("c) La cantidad de ceros: " + contadorCeros + "</br>");
    document.write("d) El promedio de todos los números positivos ingresados: " + promedioPos + "</br>");
    document.write("e) La suma de todos los números negativos: " + acumuladorNeg + "</br>");
    document.write("f) Maximo: " + maximo + " Letra: " + letraMax + "</br>");
    document.write("f) Minimo: " + minimo + " Letra: " + letraMin + "</br>");
    document.write("g) El menor numero de las letras minusculas: " + minimoMinus + " Letra: " + letraMinMinus + "</br>");

    
}

HECHO POR EL PROFE */