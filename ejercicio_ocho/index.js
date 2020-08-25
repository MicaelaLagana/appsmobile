//8- Escribi una función cuantosCumplen que dada una 
//condición y una lista, diga cuantos elementos la cumplen


function cuantosCumplen7Letras(elementos){
    cumplen = elementos.filter(elemento => elemento.length === 7);
    return cumplen.length;
}

console.log(cuantosCumplen7Letras(["pepe","babilon", "libro", "mate", "escuela", "computadora"]));