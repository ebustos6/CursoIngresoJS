function mostrar()
{

var mes = document.getElementById('mes').value;
switch(mes){
    
    case "Febrero":
        alert("Este mes no tiene más de 29 dias.");
        break;
    case "Enero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
    case "Julio":
    case "Agosto":  
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":  
        alert("Este mes tiene 30 dias o más.");
        break;

    }

	
	


}//FIN DE LA FUNCIÓN