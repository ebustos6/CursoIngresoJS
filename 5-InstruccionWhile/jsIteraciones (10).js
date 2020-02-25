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
/*	1-Suma de los negativos.| if, elseif
	2-Suma de los positivos.|
	3-Cantidad de positivos. |
	4-Cantidad de negativos. |
	5-Cantidad de ceros. |
	6-Cantidad de números pares. | if aparte
	7-Promedio de positivos.|
	8-Promedios de negativos.|
	9-Diferencia entre positivos y negativos, (positvos-negativos).|
	*/
}
	//FIN DE LA FUNCIÓN