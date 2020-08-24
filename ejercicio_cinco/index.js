//5- Define la función aprobó, que dada la lista de las notas de 
//un alumno devuelve si el alumno aprobó. 
//Un alumno aprobó si todas sus notas son mayores o iguales a 4

const aprueba = (nota) => nota >= 4;

var aprobado = [4,5,6,7];
var desaprobado = [1,2,3,4];

function aprobo(notas) {
    return notas.every(aprueba);
}

console.log("notas 4,5,6,7: ", aprobo(aprobado));
console.log("notas 1,2,3,4: ", aprobo(desaprobado));