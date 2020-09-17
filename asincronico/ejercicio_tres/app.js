const obtenerPokemon = require("./library");

function callback(data){
	//Pokemon
	console.log("Nombre del pokemón:",data.forms[0].name);
	
	//Ataque
    data.abilities.forEach(ability => console.log(ability.ability.name));
}

obtenerPokemon("pikachu", callback);