function mostrar()
{
var nota;
var sexo;
var i = 0;
var acumulador = 0;
var minimo;
var flag = 0;
var varones_ap = 0;

do{
    nota = parseInt(prompt("Ingrese la nota:"));

    while(isNaN(nota)){
        nota = parseInt(prompt("Ingrese un número valido:"));
      }

    sexo = prompt("Ingrese el sexo del alumno.");
      
    while(sexo != "f" && sexo != "m"){
        sexo = prompt("Dato incorrecto, ingrese nuevamente el sexo del alumno.");
    }
    acumulador = acumulador + nota;
    i++;
   
    if(flag == 0 || nota < minimo){
        minimo = nota;
        flag = 1;
    }

    if(nota >= 6 && sexo == "m"){
        varones_ap++;
    }
    

} while(i < 5);

alert("El promedio de las notas es: " + (acumulador / 5)) = acumulador;
alert("La nota mas baja es " + minimo + " y su sexo es " + sexo) = minimo;
alert("Cantidad de varones aprobados: " + varones_ap) = varones_ap;

}


//