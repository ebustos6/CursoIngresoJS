function mostrar()
{
    var edad;
//tomo la edad  
edad = parseInt(document.getElementById("edad").value);
if(edad===15){
//document.getElementById("edad").value = "Niña bonita." (hinchando las bolas!)
// el === es mas restrictivo que ==, porque pide que sea del mismo tipo (numero o string)
alert("Niña bonita.")
}


}//FIN DE LA FUNCIÓN