const {crearArchivo}=require ('./helpers/multiplicar.js');
const argv=require('./config/yargs.js');
//Esto es para los colores en consola.
require('colors');

console.clear();

crearArchivo(argv.base,argv.listar,argv.hasta)
    .then(nombreArchivo=> console.log(nombreArchivo.rainbow,'creado'))
    .catch(err=>console.log(err));

