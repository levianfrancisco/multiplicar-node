//requireds
const fs = require('fs');
const colors = require('colors');

listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`'${base}' no es un número.`);
            return;
        }
        if (!Number(limite)) {
            reject(`'${limite}' no es un número.`);
            return;
        }
        if (limite < 0) {
            reject(`'${limite}' no puede ser negativo.`);
            return;
        }
        console.log('=================='.green);
        console.log(`==tabla de ${ base }==`.green);
        console.log('=================='.green);

        let tabla = '';
        for (let i = 0; i <= limite; i++) {
            tabla += (`${ base } * ${ i } = ${ base * i }\n`);
        }

        resolve(tabla);
    });
}

crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`'${base}' no es un número.`);
            return;
        }
        if (!Number(limite)) {
            reject(colors.red(`'${limite}' no es un número.`));
            return;
        }
        if (limite < 0) {
            reject(`'${limite}' no puede ser negativo.`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${base}`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}