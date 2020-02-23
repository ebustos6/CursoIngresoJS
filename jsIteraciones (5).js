function mostrar()
{

var sexo;
sexo = prompt("Ingrese f ó m .");

while(sexo != "f" && sexo != "m"){
   sexo = prompt("Dato invalido, ingrese f o m"); 

}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN