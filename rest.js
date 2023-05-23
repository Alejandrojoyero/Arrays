function listarNombres(nombre1,nombre2, ...otrosNombres){
    return [nombre1,nombre2, ...otrosNombres]
}

//console.log(listarNombres("Juan","Pedro","diego","Elisa"));

function promedio(...numeros){
    
    let resultadoDeLaSuma = numeros.reduce((acum.num) => acum + num)

    return resultadoDeLaSuma / numeros.length
}
console.log(promedio(2,3,4,5,6,7,8,9,10)