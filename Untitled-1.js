
 var edad;
 var sexo;
 var paisaje;
 var contador;
 var respuesta;
 var contFemenino;
 var contMasculino;
 var pasajeUrbano;
 var pasajeNacional;
 var pasajeInternacional;

 while(respuesta== true){
     edad= prompt("ingrese su edad");
     sexo= prompt("ingrese f o m");
     paisaje = prompt("ingrese si su pasaje es urbano, nacional o internacional");


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
while(paisaje != "urbano"|| "nacional"|| "internacional" ){

    pasajeUrbano++;

} if(paisaje== "nacional"){
    pasajeNacional++;

}else(paisaje== "internacional"){
    pasajeInternacional++;

}
/*
var repuesta
do{
    do{
        nombre = prompt("ingresar nombre");
    }while(nombre ==null || nombre== "");
    do{
        var edad = prompt("ingrese su eddad");
        edad = parseInt(edad);
    }while(isNaN(edad)|| edad< 18);
    do{
        var sexo= prompt("ingrese sexo")
    }while(sexo!= "m" && sexo != "f");
    do{
        var pasaje = prompt("ingrese su pasaje");

    }while(psaje== "urbano" || pasaje =="nacional" || pasaje== "internaconal");
    

respuesta = comfilm("desea continuar");
}while(repuesta);
*/