/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var num1;
    var num2;
    var num3;

    num1 = parseInt(document.getElementById("importe").value);
    num2 = (num1 * 25) / 100;
    num3 = num1 - num2

    document.getElementById("resultado").value = num3;
}
