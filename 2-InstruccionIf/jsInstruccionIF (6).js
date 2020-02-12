function mostrar()
{
    var edad;
    //tomo la edad  
    edad = parseInt(document.getElementById("edad").value);
    if(edad>=18){
        alert("Mayor de edad")  
    }
    else if(edad>=13 && edad<=17){
        alert("Adolescente")
        
    }
    else{
        alert("Niño")
    } 




}//FIN DE LA FUNCIÓN