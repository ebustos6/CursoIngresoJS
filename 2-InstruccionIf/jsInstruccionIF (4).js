function mostrar()
{ 
var edad;
//tomo la edad  
edad = parseInt(document.getElementById("edad").value);
if(edad>=18){
    alert("Mayor de edad")  
}
// si la edad esta dentro del rango
else if(edad>=13 && edad<=17){
    alert("Adolescente")
    
}

/*si la edad no esta fuera del rango
else if(!(edad<13 || edad>17)){
    alert("Adolescente")
}
*/
else{
    alert("Menor de edad")
}
/*if(edad>=13){
    if(edad<=17)
    alert("Adolescente")
    
}

        |(pipe)---> or
&& (ampersand) ---> and
             ! ---> not
*/
}//FIN DE LA FUNCIÓN