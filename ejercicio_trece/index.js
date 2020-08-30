//13- Crea una clase Profesor (que herede de Persona) que tenga un atributo estudiantes con un array de 
//Estudiante. Además debe tener dos métodos enseñando() que imprima por consola todos sus estudiantes a 
//los cuales les está enseñando y el método addEstudiante(unEstudiante) que agregue a ese estudiante a la lista. 
//Además este método es responsable de manejar de agregar al objeto profesor como profesor del estudiante 
//(manejo de doble referencia)

class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    presentarse(){
        return "Hola, un gusto, soy " + this.nombre + " y tengo " + this.edad + " años.";
    }
}

class Estudiante extends Persona{
    constructor(nombre, edad){
        super(nombre, edad);
    }
    setProfesor(profesor){
        this.profesor = profesor;
    }
    estudiando(){
        return "estudiando con " + this.profesor;
    }
}

class Profesor extends Persona{
    constructor(nombre, edad, estudiantes){ 
        super(nombre, edad);
        this.estudiantes = estudiantes;
    }

    addEstudiante(estudiante){
        estudiante.setProfesor(this.nombre);
       this.estudiantes.push(estudiante);
    }

    enseñando(){
        for (let estudiante of this.estudiantes){
            console.log("enseñando a " + estudiante.nombre);
        }
    }
}

estudiantes1 = [
    new Estudiante("Pepe", 15),
    new Estudiante("Pepa", 16),
    new Estudiante("Pipo", 14),
    new Estudiante("Pupa", 17)
];

estudiantes2 = [
    new Estudiante("Pepi", 18),
    new Estudiante("Pipe", 13),
    new Estudiante("Pupu", 12)
];

prof1 = new Profesor("Prof. Garccia", 60, estudiantes1);
prof2 = new Profesor("Prof. Lopez", 50, estudiantes2);

for (let estudiante of estudiantes1){
    estudiante.setProfesor(prof1.nombre);
}

for (let estudiante of estudiantes2){
    estudiante.setProfesor(prof2.nombre);
}

prof1.addEstudiante(new Estudiante("Nuevo", 12));
prof2.addEstudiante(new Estudiante("Nueva", 15));

console.log(prof1.estudiantes);
console.log(prof2.estudiantes);

console.log(prof1.presentarse());
console.log(prof2.presentarse());

for (let estudiante of estudiantes1){
    console.log(estudiante.presentarse());
    console.log(estudiante.estudiando());
}

for (let estudiante of estudiantes2){
    console.log(estudiante.presentarse());
    console.log(estudiante.estudiando());
}

prof1.enseñando();
prof2.enseñando();