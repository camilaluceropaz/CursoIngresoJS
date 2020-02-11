function mostrar()
{
//tomo la edad  

    var edad
    var estado
    edad = document.getElementById(edad).value;
    estado = document.getElementById(estadoCivil).value;

    if(edad < 18 && estado !== soltero ){
        alert("es muy peueño para no ser soltero")
    }


}//FIN DE LA FUNCIÓN