function mostrar()
{

var mes = document.getElementById('mes').value;
switch(mes){
case "Febrero":
    alert("Este mes no tiene 28 dias.");
    break;
case "Abril":	
case "Junio":
case "Septiembre":	
case "Noviembre":
    alert("Este mes tiene 30 dias.");
    break;
case "Enero":
case "Marzo":
case "Mayo":
case "Julio":
case "Agosto":    
case "Octubre":
case "Diciembre": 
    alert("Este mes tiene 31 dias.");
    break;
    }
}//FIN DE LA FUNCIÓN