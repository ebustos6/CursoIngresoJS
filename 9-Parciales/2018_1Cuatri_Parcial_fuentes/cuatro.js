function mostrar()
{
var num1;
var num2;
var suma;

num1 = parseInt(prompt("Ingrese el primer numero: "));
num2 = parseInt(prompt("Ingrese el segundo número: "));
suma = num1 + num2;

if (num1 > num2){
alert("La resta es: " + (num1 - num2));
}
else if (num1 == num2){
alert("La concatenación es: " + num1 + num2);
}
else if (num1 < num2){
    if (suma > 10){ 
        alert("La suma es: " + suma + " y superó el 10");
    }
    else{
        alert("La suma es: " + suma);
    }
}
}
