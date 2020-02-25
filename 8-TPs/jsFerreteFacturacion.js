/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/


function Sumar () 
{
    var num1;
    var num2;
    var num3;
    var suma;

    num1 = parseInt(document.getElementById("PrecioUno").value);
    num2 = parseInt(document.getElementById("PrecioDos").value);
    num3 = parseInt(document.getElementById("PrecioTres").value);
    suma = num1 + num2 + num3;
    alert("La suma es " + suma + ".");
}
function Promedio () 
{
    var num1;
    var num2;
    var num3;
    var promedio;
    
    num1 = parseInt(document.getElementById("PrecioUno").value);
    num2 = parseInt(document.getElementById("PrecioDos").value);
    num3 = parseInt(document.getElementById("PrecioTres").value);
    promedio = (num1 + num2 + num3) / 3;
    alert("El promedio es: " + promedio + ".");
    
}
function PrecioFinal () 
{
    var num1;
    var num2;
    var num3;
    var precio_final;

    num1 = parseInt(document.getElementById("PrecioUno").value);
    num2 = parseInt(document.getElementById("PrecioDos").value);
    num3 = parseInt(document.getElementById("PrecioTres").value);
    precio_final = (num1 + num2 + num3) + (((num1 + num2 + num3)*21)/100);
    alert("El precio final es: " + precio_final + ".");
}