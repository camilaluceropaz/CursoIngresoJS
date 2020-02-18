function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';
	var interacciones 

	interacciones = prompt("Cuantos numeros quiere ingresar?");
	interacciones = parseInt(interacciones);
	
	while(isNaN(interacciones)){
		interacciones = prompt("Error! Ingese un numero");
		interacciones = parseInt(interacciones);
	}

	while(contador - interacciones){
		contador++;

		var numero = prompt("ingrese un numero");
		numero = parseInt(numero);

    
	}
	acumulador += numero;

	


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN