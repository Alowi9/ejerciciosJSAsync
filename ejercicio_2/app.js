
const obtenerChiste = require("./library");

// Usar la funcion obtenerChiste() la cual devuelve la promesa de traer el objeto chiste extraido

obtenerChiste().then( function (x) { 
    console.log(x[0].setup + " " +x[0].punchline );
}).catch(function (e){
    console.log("Error " + e.message);
});
