/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var precioUno
var precioDos
var PrecioTres
var resultado

function Sumar () 
{
    
    

    precioUno = document.getElementById("PrecioUno").value;
    precioDos = document.getElementById("PrecioDos").value;
    precioTres = document.getElementById("PrecioTres").value;
    
    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    
    resultado = precioUno + precioDos + precioTres;

     alert(resultado);
     console.log(resultado);


    }
	

function Promedio () 
{
	
    precioUno = document.getElementById("PrecioUno").value;
    precioDos = document.getElementById("PrecioDos").value;
    precioTres = document.getElementById("PrecioTres").value;
    
    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    
    resultado = (precioUno + precioDos + precioTres) / 3;

     alert(resultado);
     console.log(resultado);

}
function PrecioFinal () 
{
    var IVA

    precioUno = document.getElementById("PrecioUno").value;
    precioDos = document.getElementById("PrecioDos").value;
    precioTres = document.getElementById("PrecioTres").value;
    
    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    IVA = parseInt(IVA);
    resultado = (precioUno + precioDos + precioTres)
    IVA = resultado * 0.21 
    resultado = resultado + IVA

     alert(resultado);
     console.log(resultado);

 
    
    
}