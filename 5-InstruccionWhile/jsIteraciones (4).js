function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	
	
while(numero <0 ||numero >9 || isNaN(numero))
{
	numero = prompt("ingrese un numero entre 0 y el 9");

    numero = parseInt(numero);

}
 
}//FIN DE LA FUNCIÓN