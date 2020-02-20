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



	} while (respuesta == "s")

}
	//FIN DE LA FUNCIÓN