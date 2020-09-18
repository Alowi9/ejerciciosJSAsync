
const obtenerPokemon = require("./library");

// Usar la funcion obtenerChiste(nombrePokemon) la cual recibe como string un nombre de pokemon y devuelve la promesa de traer el objeto pokemon extraido
obtenerPokemon("dragonite").then(function estadisticaPokeon(x){
    console.log("Nombre : " + x.name);
    console.log("Stats:");
    x.stats.forEach(estadistica => {console.log("-"+ estadistica.base_stat + " " + estadistica.stat.name)});

}).catch(function (err){
console.log("Error :C " + err.message);
});  

