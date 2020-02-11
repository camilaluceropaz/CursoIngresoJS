function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje 
switch(mesDelAño){
 case "Enero":
 
 mensaje ="que comiences bien el año!!!";
 break;
 
 case "Marzo":
 mensaje = "a clases";
break;

 case "Julio":
 mensaje ="se vienen las vaciones";

break;
 case "Diciembre":
 mensaje = "felices fiestas";
 

}

alert(mensaje);

}//FIN DE LA FUNCIÓN