//10- Define la función contiene que dado un elemento y una lista,
// nos diga si la lista contiene al elemento

function contiene(palabras, palabraAEncontrar) {
    return palabras.find(palabra => palabra === palabraAEncontrar);
}

console.log(contiene(["pepe", "array", "tarot", "carpincho"], "carpincho"));
console.log(contiene(["pepe", "array", "tarot", "bombero"], "bombero"));