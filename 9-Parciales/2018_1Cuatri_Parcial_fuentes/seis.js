function mostrar()
{
var hora = parseInt(document.getElementById("laHora").value);

switch(hora){
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
        alert("Es de mañana.");
        break;
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 19:
        alert("Es de tarde.");
        break;
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        if(hora < 6 && hora > 0){
            alert("A dormir.");
        }
        else{
            alert("Es de noche.");
        }
        break;
    default:
        alert("La hora ingresada no es válida.");
}



}
