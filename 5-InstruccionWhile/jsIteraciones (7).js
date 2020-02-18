function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var interacciones;

	
    while(confirm("desea ingresar un numero")){
		var numero = prompt("ingrese un numero");
		numero = parseInt(numero);
		while(isNaN(numero)){
			numero = prompt("ingrese un numero");
			numero = parseInt(numero);
		}

	} 
	if(numero >= 0){
		positivo = positivo + numero;
	}else{
		negativo = negativo * numero;
	}

	
    }
		
		

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN