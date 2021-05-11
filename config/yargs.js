const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs').
command('crear', 'Crea en un archivo la tabla de multiplicar hasta el limite definido', opts).
command('listar', 'Imprime en consola la tabla de multiplicar', opts).
help().
argv;

module.exports = {
    argv
};