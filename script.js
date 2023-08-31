
function leerGET(){ 
    //obtiene la cadena de variables y valores es decir url despues del ?
    var cadGET = location.search.substr(1,location.search.length); 
    //rompe la cadena para separar pares variable=valor
    var arrGET = cadGET.split("&"); 
    var asocGET = new Array(); 
    var variable = ""; 
    
    var valor = ""; 
    //llena el arreglo asociativo
    for(i=0;i<arrGET.length;i++){ 

        var aux = arrGET[i].split("="); 
        variable = aux[0]; 
        var valor = aux[1].replace("+", " ");
        asocGET[variable] = valor; 
    } 
    return asocGET; 
} 

function escribir(){
    var paresVarValor = leerGET(); 
    document.getElementById("Nombre").innerHTML=paresVarValor["Nombre"];
    document.getElementById("Apellido").innerHTML=paresVarValor["Apellido"];
    document.getElementById("Pregrado").innerHTML=paresVarValor["Pregrado"];
    document.getElementById("Email").innerHTML=paresVarValor["Email"];
    document.getElementById("Movil").innerHTML=paresVarValor["Movil"];
    document.getElementById("Identificacion").innerHTML=paresVarValor["Identificacion"];
    document.getElementById("Sexo").innerHTML=paresVarValor["Sexo"];
    document.getElementById("Ciudad").innerHTML=paresVarValor["Ciudad"];
    document.getElementById("Domicilio").innerHTML=paresVarValor["Domicilio"];
    document.getElementById("Pregrado").innerHTML=paresVarValor["Pregrado"];
    document.getElementById("Experiencia").innerHTML=paresVarValor["Experiencia"];
    document.getElementById("Posgrado").innerHTML=paresVarValor["Posgrado"];
    document.getElementById("Descripcion").innerHTML=paresVarValor["Descripcion"];

}
