const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs") //lo que se hace aca es poner toda la info de yargs en otro directorio
                                        //para que a la hora de programar sea mas limpio el codigo app.js. y se importa y exporta.

console.clear();


crearArchivo(argv.b, argv.l, argv.h, argv.p) //SE PUEDEN PASAR ESTOS DATOS POR PARAMENTROS, YO NO SABIA.
          .then(nombreArchivo => console.log(nombreArchivo))
          .catch(err => console.log(err))



