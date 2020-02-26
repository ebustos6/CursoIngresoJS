function mostrar()
{
var precio;
var descuento;
var precio_final;

precio = prompt("Ingrese el precio del producto: ");
descuento = prompt("ingrese el porcentaje de descuento a aplicar: ");
precio_final = precio - ((precio * descuento) / 100);

document.getElementById("elPrecioFinal").value = precio_final;
}
