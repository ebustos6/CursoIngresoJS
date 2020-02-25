function mostrar()
{
	var numero;
	var contador=0;
	var acumulador=0;



	do {

		numero = parseInt(prompt("Ingrese un número: "));


		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un número. Ingrese un número: "));
		}
		
		if (contador <5){
		acumulador = acumulador + numero;
		contador++;

		}

	} while (contador <5);
	

	
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN