function mostrar() {

	var contador_pares = 0;
	var numero;
	var contador_positivo = 0;
	var positivo = 0;
	var contador_negativo = 0;
	var negativo = 0;
	var contador_ceros = 0;
	var respuesta;

	do {
		//pido numero al usuario
		numero = parseInt(prompt("Ingrese un número: "));
		//valido que sea un numero
		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un número. Ingrese un número: "));
		}

		if (numero > 0) {
			positivo = positivo + numero;
			contador_positivo++;
		}
		else if(numero < 0){
			negativo = negativo + numero;
			contador_negativo++;
		}
		else {
			contador_ceros++;
		}

		if(numero % 2 == 1){
			contador_pares++;
		}
		respuesta = prompt("Quiere ingresar otro número?");

	} while (respuesta == "s");

	document.write("<h1>Resultados</h1>" + "<p>La suma de números positivos es: " + positivo + "<br> La cantidad de números positivos es: " + contador_positivo + "<br> La suma de números negativos es: " + negativo + "<br> La cantidad de números negativos es: " + contador_negativo + "<br> La cantidad de ceros es: " + contador_ceros + "<br> La cantidad de números pares es: " + contador_pares + "<br> El promedio de números positivos es: " + (positivo / contador_positivo) + "<br> El promedio de números negativos es: " + (negativo / contador_negativo) + "<br> La diferencia entre positivos y negativos es: " + (positivo + negativo) + "</p>")


}

/* 
function mostrar() {
	var acumNegativos = 0;
	var acumPositivos = 0;
	var contadorPositivos = 0;
	var contadorNegativos = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	var promedioPos = 0;
	var promedioNeg = 0;
	var diferencia;
	var numero;
	var seguir;

	do {
		numero = parseInt(prompt("Ingrese un numero: "));
		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un numero. Ingrese un numero: "));
		}

		if (numero > 0) {
			acumPositivos = acumPositivos + numero;
			contadorPositivos++;
		}
		else if (numero < 0) {
			acumNegativos = acumNegativos + numero;
			contadorNegativos++;
		}
		else {
			contadorCeros++;
		}
		// ---------------------------
		if (numero % 2 == 0) {
			contadorPares++;
		}

		seguir = prompt("Quiere continuar?");
	} while (seguir == 's');

	if (contadorPositivos != 0) {
		promedioPos = acumPositivos / contadorPositivos;
	}
	if (contadorNegativos != 0) {
		promedioNeg = acumNegativos / contadorNegativos;
	}

	diferencia = contadorPositivos - contadorNegativos;

	document.write("1 - Suma de los negativos: " + acumNegativos + "</br>");
	document.write("2 - Suma de los positivos: " + acumPositivos + "</br>");
	document.write("3 - Cantidad de positivos: " + contadorPositivos + "</br>");
	document.write("4 - Cantidad de negativos: " + contadorNegativos + "</br>");
	document.write("5 - Cantidad de ceros: " + contadorCeros + "</br>");
	document.write("6 - Cantidad de números pares: " + contadorPares + "</br>");
	document.write("7 - Promedios de positivos: " + promedioPos + "</br>");
	document.write("8 - Promedios de negativos: " + promedioNeg + "</br>");
	document.write("9 - Diferencia entre positivos y negativos: " + diferencia + "</br>");




} HECHO POR EL PROFE 
*/