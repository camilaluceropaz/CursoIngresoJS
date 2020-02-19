function mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta='si';
	var minimo;
	var maximo;
	var primeraVez

	while(respuesta!='no')
	{
		
		var numero = prompt("ingrese un numero");
	    numero = parseInt(numero);
		
		while(isNaN(numeor)){
			numero = parseInt(numero);
		}
	} 
	//do{
	//	numero = prompt("ingrese un numero");
	//  numero = parseInt(numero);
	//} while(isNaN(numero));{
    //}
	if(primeraVez){
		primeraVez = false;
		maximo = numero;
		minimo = number;
	}else{
		if(numero > maximo);
		maximo = numero;
	}if( numero < minimo);{
		minimo = numero
	}
	document.getElementById("maximo").value=maximo;
	document.getElementById("minimo").value=minimo;



	respuesta = prompt("desea continuar?")

}//FIN DE LA FUNCIÓN