require('dotenv').config();//Importa Variables de entorno

const app = require('./app'); // importa app desde app.js
require('./database');

async function main(){
   await app.listen(app.get('port')); //Inicio el server en el puerto definido - puerto importado desde app - Metodo asincrono
   console.log('Server en puerto', app.get('port'));
} // Función principal encargada de iniciar el programa

main();

