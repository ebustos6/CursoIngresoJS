function mostrar()
{
    var numero = parseInt(prompt("Ingrese un número:"));
    var cont_divisores = 0;
    var divisor;
    
    while(isNaN(numero)){
        parseInt(prompt("Eso no es un número. Ingrese un número:"));
    }

    for(divisor = 0;divisor < numero;divisor++){
        if(numero % divisor == 0){
            cont_divisores++;
            document.write((numero / divisor) + "<br>");
        }
    }
document.write("La cantidad de números divisores encontrados es: " + cont_divisores)
}//FIN DE LA FUNCIÓN