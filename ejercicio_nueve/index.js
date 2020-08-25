//9- Escribí una función rechazar, que dada una condición y un array, 
//devuelva un array con los elementos que no la cumplen


function rechazarPares(numeros){
    aceptados = numeros.filter(num => num % 2 !== 0);
    return aceptados;
}

console.log(rechazarPares([1,2,3,4,5,6,7,8,9]));