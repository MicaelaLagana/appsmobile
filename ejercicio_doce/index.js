//12- Crea una clase Estudiante (que herede de Persona) que tenga un atributo profesor y tenga dos métodos.
//El método estudiando() que imprime el mensaje “Estudiando con ” 
//y el nombre del profesor con el que se encuentra estudiando.
//El método setProfesor(profesor) que setea con qué profesor se encuentra estudiando.


class Estudiante{
    setProfesor(profesor){
        this.profesor = profesor;
    }
    estudiando(){
        return "estudiando con " + this.profesor;
    }
}

var estudiante = new Estudiante();
estudiante.setProfesor("Prof. Gonzales");

console.log(estudiante.estudiando());