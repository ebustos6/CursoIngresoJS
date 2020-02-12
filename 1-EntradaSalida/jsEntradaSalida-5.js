/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var num1;
    var num2;

    num1 = document.getElementById("elNombre").value;
    num2 = document.getElementById("laEdad").value;

    alert(" " + num1 + " Y su edad es " + num2 + ".")
}

