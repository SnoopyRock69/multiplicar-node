//Utillizarémos el yargs
const argv = require('./config/yargs.js').argv; // del archivo yargs.js extraigo solo el argv y lo guardo en argv para usarlo aquí.
const colors = require('colors'); // Módulo para cambiar colores en la consola.

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0]; // almacenamos el vector con los comandos.

switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite)
        break
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado:', colors.red(archivo)))
            .catch((err) => console.log(err));
        break
    default:
        console.log('Comando no reconocido');
}