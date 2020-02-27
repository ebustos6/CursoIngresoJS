function mostrar()
{
var numero = parseInt(prompt("Ingrese un número:"));
var cont_pares = 0;
var contador;

while(isNaN(numero)){
    parseInt(prompt("Eso no es un número. Ingrese un número:"));
}

for(contador = 0; contador <= numero;contador++){
    if(contador % 2 == 0){
        cont_pares++;
        document.write(contador + "<br>");
    }

}
document.write("La cantidad de números pares encontrados es: " + cont_pares);


}//FIN DE LA FUNCIÓN