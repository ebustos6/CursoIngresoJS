function mostrar() {

	var seguir;
	var numero;
	var maximo;
	var minimo;
	var respuesta;

	do {
		//pido numero al usuario
		numero = parseInt(prompt("Ingrese un número: "));
		//valido que sea un numero
		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un número. Ingrese un número: "));
		}

		respuesta = prompt("Quiere ingresar otro número?");

	} while (respuesta == "s");
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