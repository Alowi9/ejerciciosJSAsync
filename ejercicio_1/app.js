
const obtenerChiste = require("./library");

// Codigo funcion callback

function Chiste(x){
 console.log(x[0].setup + x[0].punchline);
}

// Fin codigo

// Usar la funcion obtenerChiste(funcionCallback) en donde funcionCallback es una función que recibe el objeto chiste extraido
obtenerChiste(Chiste);
