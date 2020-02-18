function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var interacciones;

	interacciones = prompt("Cuantos numeros quiere ingresar?");
	interacciones = parseInt(interacciones);

	while(isNaN(interacciones)){
		interaciones = prompt("error ingrese un numero");
		interaciones = parseInt(interacciones);
	}
	
	while(contador-interacciones){
		
	contador++;

	var numero = prompt("Ingrese un numero");
			
	numero = parseInt(numero);
		while(isNaN(numero)){
		numero = prompt("Error! Ingrese un numero");
					
		numero = parseInt(numero);
	}
	acumulador += numero;

	
    }
		
		

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN