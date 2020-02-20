function mostrar() {

	var contador = 0;
	var positivo = 0;
	var negativo = 1;
	var respuesta = 'si';
	var numero;

	do {

		numero = parseInt(prompt("Ingrese un número: "));

		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un número. Ingrese un número: "));
		}

		if (numero >= 0) {
			positivo = positivo + numero;
		}

		else {
			negativo = negativo * numero;
			contador++;
			//o se puede poner flag +1 y agregar la variable flag, si no quiero estar contando.
		}

		respuesta = prompt("Quiere continuar ingresando numeros?")

	} while (respuesta == "si");

	if (contador == 0) {
		negativo = 0;
	}
	// se puede poner if(flag == 0) en lugar de la variable contador.
	document.getElementById('suma').value = positivo;
	document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN