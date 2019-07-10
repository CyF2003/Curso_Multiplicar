const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido de base: ${base } no es un numero`);
            return
        }
        if (!Number(limite)) {
            reject(`El valor introducido de limite: ${limite } no es un numero`);
            return
        }

        console.log('======================='.green);
        console.log(`== Tabla de ${ base } ==`.green);
        console.log('======================='.green);

        for (let i = 1; i <= limite; i++) {
            console.log(`${ base } *  ${ i } = ${ base* i}`);
        }


    });
}
let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base } no es un numero`);
            return
        }
        if (!Number(limite)) {
            reject(`El valor introducido de limite: ${limite } no es un numero`);
            return
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } *  ${ i } = ${ base* i}\n`;
        }


        fs.writeFile(`tablas/tabla-${base}-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}-${limite}.txt`);
        });

    });
}
module.exports = { crearArchivo, listarTabla }