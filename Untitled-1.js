
 var edad;
 var sexo;
 var paisaje;
 var contador;
 var respuesta;
 var contFemenino;
 var contMasculino;
 var pasajeUrbano 
 var pasajeNacional
 var pasajeInternacional


 while(respuesta== true){
     

 }
while(edad< 18){
   edad = prompt("ingrese su edad");
   edad = parseInt(edad);


} while(isNaN(edad)){
    edad = prompt("ingrese su edad");
    edad = parseInt(edad);
}

while(sexo != "f"|| sexo != "m"){
    sexo = prompt("ingrese f o m");


} if(sexo== "f") {
    contFemenino ++;


} else(sexo== "m"){
    contMasculino++;

}
while(paisaje== "urbano"|| paisaje== "nacional"|| paisaje== "internacional" ){
     paisaje = prompt("ingrese si su pasaje es urbano, nacional o internacional ")
}