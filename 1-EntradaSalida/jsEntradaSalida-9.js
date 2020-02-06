/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var num1;
    var num2;
    var num3;

    num1 = parseInt(document.getElementById("sueldo").value);
    num2 = (num1 * 10) / 100;
    num3 = num1 + num2

    document.getElementById("resultado").value = num3;
    //alert ("Su sueldo es " + num3)

	
}
