function mostrar()
{
//tomo la edad  

var edad = document.getElementById("edad").value;
if(edad >=18){

alert("mayor");
} else{
    if(edad< 13){
        alert("es menor");
    } else{
        alert("adolescente");
    }
}




}//FIN DE LA FUNCIÓN