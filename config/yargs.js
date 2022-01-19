const argv = require("yargs")
                    .option("b", {
                      //alias es B
                      alias: "base", //pero B significa BASE. se lo especifico aca
                      type: "number",//de tipo NUMERO. como el 5, si pongo algo en string tira error
                      describe: "Es la base de la tabla de multiplicar" 
                    })
                    .option("l", {
                        alias:"listar",
                        type:"boolean",
                        default:false,
                        describe: "Muestra la tabla en consola" 
                    })
                    .option("h", {
                      alias:"hasta",
                      type:"number",
                      describe:"hasta que numero quiero multiplicar"
                    })
                    .option("p",{
                      alias:"pares",
                      type:"number",
                      describe:"numeros pares"
                    })
                    .check((argv, options) => {
                      console.log("yargs", argv);
                      if (isNaN(argv.b)) {
                        throw "La base tiene que ser un numero.";
                      }
                      return true;
                    }).argv;

module.exports = argv;