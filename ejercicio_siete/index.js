//7- Define la función hayAlgunNegativo, que dada una lista 
//de números nos dice si hay algún negativo

const isNegative = (num) => num < 0;

function hayAlgunNegativo(numeros){
    return numeros.find(isNegative);
}

console.log(hayAlgunNegativo([0,3,5,-7,1]));