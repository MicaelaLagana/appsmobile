// 4- Define una función que dado un array de números nos dice si alguno es par.

var nums = [1,2,3,4,5,6,7,8,9,10];
var impares = [1,3,5,7,9];
var pares = [2,4,6,8];

const par = (element) => element % 2 === 0;
function algunoEsPar(numeros) {
    return numeros.some((par));
}

console.log("array nums: ", algunoEsPar(nums));
console.log("array con pares: ", algunoEsPar(pares));
console.log("array con impares: ", algunoEsPar(impares));
