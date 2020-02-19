function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta="si";
	var interacciones
	var acumuladores
	var numero

	while(respuesta!="no")
	{do{
		interacciones = prompt("Ingrese un numero");
		interacciones = parseInt(interacciones);
	} while(isNaN(interacciones));{

	}
	if(numero <0){
		numero = 0
		numero = numero + numero;
		acumuladores += numero
	}
	else{
	if(numero > 0){
	    numero = 0
		numero = numero + numero; 
		acumuladores += numero
	}
	} if(numero = 0){
		numero = 0
		acumuladores += numero
	}
	
	respuesta = prompt("desea continuar?")
	
	}




}//FIN DE LA FUNCIÓN