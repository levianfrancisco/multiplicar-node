const argv = require('./config/yargs').argv;

const colors = require('colors');

const { crearArchivo } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite).
        then((tabla) => { console.log(tabla); }).catch((err) => { console.log(err); });
        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite).then((archivo) => {

            console.log(colors.green(`Archivo creado: `) + colors.magenta(`tabla-${ argv.base}`));
        }).catch((err) => {
            console.log(err);
        });
        break;
    default:
        console.log('Comando no reconocido');
}

// let argv2 = process.argv;

// console.log(argv.base);

// let parametro = argv[2];
// let base = parametro.split('=')[1];