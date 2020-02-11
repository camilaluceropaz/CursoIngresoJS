function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
switch(mesDelAño){
case("Febrero"):
    alert("tiene 28 días");
    break;
case "Enero":
case "Marzo":
case "Mayo":
case "Julio":
case "Agoto":
case "Octubre":
case "Diciembre":
alert("tiene 31 días")
break;
default:
alert("tiene 30 dias")



}	



}//FIN DE LA FUNCIÓN