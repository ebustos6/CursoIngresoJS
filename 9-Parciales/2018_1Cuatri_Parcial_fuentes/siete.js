function mostrar()
{
var nota;
var sexo;
var i;
var acumulador = 0;
var minimo;
var min_sex;
var flag = 0;
var varones_ap = 0;

for(i = 0;i < 5;i++){
    nota = parseInt(prompt("Ingrese la nota:"));

    while(isNaN(nota)||nota< 0||nota > 10){
        nota = parseInt(prompt("Ingrese un número valido:"));
      }

    sexo = prompt("Ingrese el sexo del alumno.");
      
    while(sexo != "f" && sexo != "m"){
        sexo = prompt("Dato incorrecto, ingrese nuevamente el sexo del alumno.");
    }
    acumulador = acumulador + nota;
   
    if(flag == 0 || nota < minimo){
        minimo = nota;
        min_sex = sexo;
        flag = 1;
    }

    if(nota >= 6 && sexo == "m"){
        varones_ap++;
    }
    

} 

alert("El promedio de las notas es: " + (acumulador / 5) + " ." + "La nota mas baja es " + minimo + " y su sexo es " + min_sex + " ."+ "Cantidad de varones aprobados: " + varones_ap) = acumulador;

}


//