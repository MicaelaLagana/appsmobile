const obtenerPersonaFake = require("./library");

obtenerPersonaFake().then(dataPerson => {
    dataPerson.results.forEach(person => {

        console.log("Nombre: " + person.name.first +  person.name.last +
        "Genero: " + person.gender + " Pais: " + person.location.country + ", Estado: " + person.location.state + 
        ", Calle: " + person.location.street.name + ", Numero: " + person.location.street.number +
        ", Codigo postal: " + person.location.postcode + " Email: " + person.email + " Usuario: " + person.login.username + " Password: " + person.login.password);
    })
});