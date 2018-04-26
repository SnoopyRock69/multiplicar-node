// Definimos los comandos y sus opciones.
const opts = {
    base: { //el comando que la persona tendría que escribir.
        demand: true, //el valor o comando es obligatorio definirlo.
        alias: 'b' //para rápido acceso o uso del comando.
    },
    limite: {
        alias: 'l',
        default: 10 //Por defecto siempre será 10 si el usuario no lo define.
    }
}
const argv = require('yargs')
    //el primer parámetro es el comando a usar, el segundo es una ayuda al usuario.
    //el tercero es un objeto con la configuración de parámetros que ese comando puede introducir.
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', opts)
    .argv;

//Exportamos el objeto.
module.exports = {
    argv
}