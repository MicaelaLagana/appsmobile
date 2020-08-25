//6- Define la función quienesAprobaron, que dada la información de un 
//curso devuelve la información de los alumnos que aprobaron. 
//Podés usar la función que hiciste en el ejercicio anterior.

var curso = [[1,2,3],[4,5,6],[3,3,3],[7,7,7],[8,7,9]]

const aprueba = (nota) => nota >= 4;

function quienesAprobaron(alumnos){
    for (let i in alumnos){
        aprobados = alumnos.map(function aprobo(i) {
            return i.every(aprueba);
        });
    }
    return aprobados;
}

console.log(quienesAprobaron(curso));