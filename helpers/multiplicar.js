const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar, hasta = 10) => {

    try {

        let salida = '';

        for (let x = 1; x <= hasta; x++) {
            const multiplicacion = base * x;

            salida += `    ${base} X ${x} = ${multiplicacion}\n`;
        }

        if (listar) {

            console.log('========================='.brightYellow);
            console.log('       Tabla del:'.brightYellow, colors.brightBlue(base));
            console.log('========================='.brightYellow)

            console.log(salida)

        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        console.log(`Tabla del ${base} creada`.brightGreen);
        return `tabla-${base}.txt`.underline.blue;

    } catch (error) {
        throw error;
    }

}

module.exports = {
    crearArchivo
}