const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    }).option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        describe: 'Define el multiplicador final de la tabla'
    }).option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en la consola'
    }).check( (argv, options) => {
        if( isNaN( argv.b ) ){
            throw 'La base tiene que ser un numero';
        }
        return true
    } )
.argv

module.exports = argv