/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 
function CalcularPrecio () 
{
    var num_lamp = parseInt(document.getElementById('Cantidad').value);
    var valor_lamp = 35;
    var marca = parseInt(document.getElementById('Marca').value);
    var suma;
    
    suma = valor_lamp * num_lamp;

    if(num_lamp > 2 && num_lamp <= 5){
       switch(marca) {
            case "ArgentinaLuz":
                if(num_lamp = 5){
                    suma = suma - (suma * 0.40);
                }
                else if(num_lamp = 4){
                    suma = suma - (suma * 0.25);
                }
                else {
                    suma = suma - (suma * 0.15);
                }
                break;

            case "FelipeLamparas":
                if(num_lamp = 5){
                    suma = suma - (suma * 0.30);
                }
                else if(num_lamp = 4){
                    suma = suma - (suma * 0.25);
                }
                else{
                    suma = suma - (suma * 0.10);
                }
                break;

            case "JeLuz":
            case "HazIluminacion":
            case "Osram":
                if(num_lamp = 5){
                    suma = suma - (suma * 0.30);
                }
                else if(num_lamp = 4){
                    suma = suma - (suma * 0.20);
                }
                else{
                    suma = suma - (suma * 0.05);
                }
                break;
       }
    }

    else if(num_lamp > 5){
        suma = suma - (suma * 0.50);
    }
    
    if(suma > 120){
        suma = (suma * 0.10) + suma;
        alert("Usted pagó " + (suma * 0.10) + " de IIBB.");
    }

    document.getElementById("precioDescuento") = suma;
}
*/
function CalcularPrecio() {
	var precio = 35;
	var cantidad = parseInt(document.getElementById("Cantidad").value)
	var marca = document.getElementById("Marca").value
	var descuento;
	var desc;

	switch (cantidad) {
		case 1:
		case 2:
			descuento = 0;
			break;
		case 3:
			if (marca == "ArgentinaLuz") {
				descuento = 15;
			} else if (marca == "FelipeLamparas") {
				descuento = 10;
			} else {
				descuento = 5;
			} break;
		case 4:
			if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
				descuento = 25;
			} else {
				descuento = 20;
			} break;
		case 5:
			if (marca == "ArgentinaLuz") {
				descuento = 40;
			} else {
				descuento = 30;
			} break;
		default:
			descuento = 50;
			break;
	}
	desc = (precio * descuento) / 100;
	document.getElementById("precioDescuento").value = (precio - desc)
	precio = (precio + desc) * cantidad;
	alert(`El precio final es de: ${precio}`)
}

