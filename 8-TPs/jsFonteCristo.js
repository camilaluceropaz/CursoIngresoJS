/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
var numero;
function ComenzarIngreso () 
{
     numero = document.getElementById("numero").value;
    
    numero = parseInt(numero);
    
    while(isNaN(numeor)|| numeor <0){
        numero = prompt("ingrese un numero positivo");
        numero = parseInt(numero);

    }
}

function NumerosPares(){
    ComenzarIngreso();
    var contador=numero+ 1;
    var contadorPares =0;


    while(contador> 1){
        contador --;
        console.log(contador);

    if(contador %2 == 0){
        contadorPares++;
    }    
    }
alert("numeros pares" + contadorPares);
}
function NumerosImpares(){
    ComenzarIngreso();
    var contador=numero+ 1;
    var contadorImpares =0;


    while(contador> 1){
        contador --;
        console.log(contador);

    if(contador %2 == 1){
    
    contadorImpares++;
    }    
    }
    var contadorImpares =0;
    alert("numeros impares" +contadorImpares );
}
function NumerosDivisibles(){
    ComenzarIngreso()
    var contadorDeDivisibles = 0;
    var contador = 0;
 
    while(contador < 101){
        contador ++;

    if(numero%contador == 0){

        contadorDeDivisibles ++;

}
   }
alert("numeros divisibles"+contadorDeDivisibles);
} 

function VerificarPrimos(){
    ComenzarIngreso();

  
    var contador = 2;
    var noEsPrimo = false;

    while(contador < numero /2){
        

    if(numero % contador == 0){

        noEsPrimo = true;
        break;
    }
    contador ++;
} 

if(noEsPrimo){
    alert("el numero no es primo");

}else{
    alert("el numero es primo");
}
}

function NumerosPrimos(){
    ComenzarIngreso()
    var contador = 1
    var contadorPrimos = 2;

    while(contador <= numero);{
        console.log(contador);

        while(contadorPrimos < contador){
            if(contador % contadorPrimos ==0){

            }
        } contador++;

    }
}

  