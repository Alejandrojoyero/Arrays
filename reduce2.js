const nombres = ["Rodrigo", "Pablo", "Leonardo", "Gonzalo", "Pablo", "Mauro", "Gastón", "Leonel", "José", "Cristian", "Jzmín", "Alejandro", "Cristian", "Gonzalo", "Matias", "Roxana", "Daiana", "Alejandra", "José", "Rodrigo", "Juan", "Matias", "José"];

function contarNombres(array) {
    return array.reduce( (contador,elemento) => {
        [contador] = (contador[elemento] || 0) + 1
        console.log(contador,elemento);
        return contador
    },{})
}
console.log(contarNombres(nombres));