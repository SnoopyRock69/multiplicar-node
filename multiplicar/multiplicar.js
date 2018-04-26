const fs = require('fs'); // módulo para manejo de archivos.
const colors = require('colors'); // Módulo para cambiar colores en la consola.



let listarTabla = (base, limite = 10) => { //se puede dar un valor inicial al parámetro.

    console.log('======================'.green);
    console.log(`=== Tabla del ${base}`.green);
    console.log('======================'.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base}*${i}=${base*i}`);
    }
}

let crearArchivo = (base, limite = 10) => { // Esta función recibe un parámatro (base) y retorna una promesa.
        return new Promise((resolve, reject) => {
            if (!Number(base)) {
                reject(`La base ${base} no es un número`);
                return;
            }
            let data = ''; //Almacenamos la información en data.
            for (let i = 1; i <= limite; i++) {
                data += (`${base} * ${i} = ${base*i}\n`); //Se concatena la información.
            }
            //Vamos a escribir la tabla de multiplicar en un archivo de texto.
            fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => { //Creamos archivo de texto y escribimos la información.
                if (err)
                    reject(err) //Si ocurre un error en la creación y/o escritura lo retornamos .
                else
                    resolve(`tabla-${base}.txt`); //Si no hay error, retornamos el archivo de texto.
            })
        });
    }
    //Exportamos la función para poder usarla desde otros archivos.
module.exports = {
    crearArchivo,
    /*creamos un objeto que tiene la propiedad de crearArchivo, gracias a ES6 no es necesario
     * definir el objeto así: crearArchivo : crearArchivo.
     */
    listarTabla
}