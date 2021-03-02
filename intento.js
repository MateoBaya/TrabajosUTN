function mostrar(){
    let datoIngresado;
    datoIngresado = parseInt(prompt("ingrese num"))
    while(datoIngresado<0 || isNaN(datoIngresado)){
        datoIngresado = parseInt(prompt("ERROR. ingrese num"))
    }
    alert("JA")
}