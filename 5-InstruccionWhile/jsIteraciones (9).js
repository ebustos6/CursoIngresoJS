function mostrar() {

	var flag = 0;
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
		// me fijo si es maximo o minimo
		if (flag == 0 || numero > maximo) {
			maximo = numero;
		}
		if (flag == 0 || numero < minimo) {
			minimo = numero;
			flag = 1;
		}

		// pregunto si quiere continuar
		respuesta = prompt("Quiere ingresar otro número?");



	} while (respuesta == 'si')

	document.getElementById("minimo").value = minimo
	document.getElementById("maximo").value = maximo
}



//FIN DE LA FUNCIÓN