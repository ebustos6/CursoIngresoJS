function mostrar()
{
var planetas;

planetas = prompt("Ingrese un planeta: ");

switch(planetas){
    case "mercurio":
    case "venus":
        alert("Acá hace más calor!");
        break;
    case "tierra":
        alert("Acá vivimos!");
        break;
    case "marte":
    case "jupiter":
    case "saturno":
    case "urano":
    case "neptuno":
        alert("Acá hace más frio!");
        break;
    case "pluton":
        alert("Ya no es mas un planeta!");
        break;
    default:
        alert("No es un planeta válido!");
    
    }
}
