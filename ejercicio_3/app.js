
const obtenerPokemon = require("./library");

// Codigo funcion callback

function estadisticasPokemon(x){
//console.log(x);
//console.log(x.stats);   
console.log("Nombre " + x.name);
console.log("Stats: ");
x.stats.forEach(estadistica => {console.log("-"+ estadistica.base_stat + " " + estadistica.stat.name)});

}

// Fin codigo

// Usar la funcion obtenerPokemon(pokemon,funcionCallback) en donde:
// - nombrePokemon es un string con el nombre del pokemon
// - funcionCallback es una función que recibe el objeto con los datos del pokemon extraido

obtenerPokemon("charizard", estadisticasPokemon);
