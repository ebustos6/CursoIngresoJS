function mostrar()
{
	var numero;
	var contador=0;
	var acumulador=0;
	var respuesta;
	do {
		
		numero = parseInt(prompt("Ingrese un número: "));
		
		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un número. Ingrese un número: "));
		}
	
		acumulador = acumulador + numero;
		contador++;

		respuesta = prompt("Quiere ingresar otro número?");



	} while (respuesta == 'si')

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN