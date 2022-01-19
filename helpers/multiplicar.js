const fs = require("fs");
var colors = require('colors/safe')

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = "";



    for (let i = 0; i <= `${hasta}`; i++) {
      salida += `${colors.blue(base)} ${colors.yellow('x')} ${colors.blue(i)} ${colors.yellow("=")} ${colors.blue(base * i)}\n`;
    }
 
    if(listar){
        
        console.log(colors.yellow("======================"));
        console.log(colors.blue(`Tabla del: ${base} hasta ${hasta}`));
        console.log(colors.yellow("======================"));

        console.log(colors.green(salida));

        console.log("Lista de numeros pares de las respuestas: ")
        for(let i = 0; i<=`${hasta}`; i++){
          let numerosPares = (base*i);
          if(numerosPares%2==0){
            console.log(colors.green(`${numerosPares}`))
          }
        }
        
    }   
        
        //NO HACE FALTA UN ELSE, YA QUE EL CODIGO SE CORTA. UNICAMENTE QUE NO MUESTRE LA TABLA.
    
    

    fs.writeFileSync(`tabla-${base}.txt`, salida);

    return colors.cyan(`la tabla-${base} se creo correctamente!`);

  } catch (error) {
      throw error;
  }
};

module.exports = {
  crearArchivo: crearArchivo,
};
