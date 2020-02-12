function mostrar()
{
	var num;
	num = Math.floor(Math.random()*((10+1)-1)+1);
		//Genero el número RANDOM entre 1 y 10 
	if(num>=9){
		alert(num + " Excelente");
	}
	else if(num>=4){
		alert(num + " Aprobó");
	}
	else{
		alert(num + " Vamos, la próxima se puede");
	}

}//FIN DE LA FUNCIÓN