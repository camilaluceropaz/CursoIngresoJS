function mostrar()
{

	var contador=0;
	var acumulador=0;
	
	while(contador <5){

		contador++;
		var numero = prompt("iIngrese un numero");
	
		numero = parseInt(numero);
		while(isNaN(numero)){
			numero = prompt("Error! Ingrese un numero");
			
			numero = parseInt(numero);
		}

		acumulador += numero;
	}

//do{
//	numero = prompt("iIngrese un numero");
	
//		numero = parseInt(numero);
//} while(isNaN(numero));{

//}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN