//Esta es la configuración de la librería yargs.
const argv=require('yargs')
    .option('b',{
        alias:'base',
        type:'number',
        demandOption:true, //Este es como un required
        describe:'Es la base de la tabla de multiplicar'
    })
    //Este es para cuando quieran listar
    .option('l',{
        alias:'listar',
        type:'boolean',
        default:false,
        describe:'Muestra la tabla en consola'
    })
    .option('h',{
        alias:'hasta',
        type:'number',
        default:10,
        describe:'Es el límite de la tabla de multiplicar'
    })
    .check((argv,options)=>{
        if(isNaN(argv.base)){
            throw 'La base tiene que ser un número';
        }
        return true;
    })
    .argv;

    module.exports=argv;