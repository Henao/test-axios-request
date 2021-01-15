const express = require('express'); //Crea el server
const cors = require('cors');
const app = express(); // Ejecuta el server


// settings

app.set('port', process.env.PORT || 4000);

// middlewares

app.use(cors());
app.use(express.json());

// routes

app.use('/api/users', require('./routes/users')) //use en lugar de get porque hago uso de otro archivo
app.use('/api/notes', require('./routes/notes'))




module.exports = app; // Exportar server para iniciarlo en index.js