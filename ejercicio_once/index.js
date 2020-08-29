//11- Crea una clase Persona que tenga los atributos nombre y edad. Además agregale un método presentarse() 
//que como resultado imprima un mensaje diciendo su nombre y edad.

class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    presentarse(nombre){
        return "Hola, un gusto, soy " + this.nombre + " y tengo " + this.edad + " años.";
    }

}

var persona1 = new Persona("Micaela", 25);
console.log(persona1.presentarse());