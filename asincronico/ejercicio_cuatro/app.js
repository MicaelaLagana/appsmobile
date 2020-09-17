const obtenerPokemon = require("./library");

    obtenerPokemon("pikachu").then(pokemonData => {
        console.log("Pokemon: " + pokemonData.forms[0].name);
        pokemonData.abilities.forEach(ability => console.log("habilidades: ", ability.ability.name));
    }).catch((e)=>{
        console.log("Error : ",e.error);
    });
