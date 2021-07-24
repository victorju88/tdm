function fecha(){
    let fecha = new Date();
    let anio = fecha.getFullYear();
    //console.log("Año " + anio);
    //document.write(anio);
    return anio
}
console.log(fecha())
document.write(fecha());