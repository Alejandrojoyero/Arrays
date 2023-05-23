const comision20 = {
    turno : "noche",
    horario : "19 a 21hs",
    profes : [
        "Eric",
        "Emanuel"
    ]
}

const comision21 = {
    turno : "mañana",
    horario : "11 a 13hs",
    profes : [
        "Eric",
        "Fabián"
    ]
}

const alumno1 = {
    nombre :"Pablo",
    apellido : "Alcaraz"
}

const alumno2 = {
    nombre :"Leonardo",
    apellido : "García"
}

const alumno3 = {
    nombre : "Camilo",
    apellido : "Carrizo"
}

function crearInscripcion{nombre,apellido},comision){
    return {
        nombre,
        apellido,
        turno : comision.turno,
        horario : comision.horario,
        profes : comision.profes
    }
}
function crearInscripcion(datosPersonales,comision) {
    

}
console.log(crearInscripcion(alumno1,comision20));
console.log(crearInscripcion2)