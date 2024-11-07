const express = require('express');
const cors = require('cors'); // Importar el paquete CORS

const app = express();

app.use(cors()); // Habilitar CORS para todas las rutas
app.use(express.json());

// Ruta de prueba para verificar que el servidor funciona
app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente');
});

// Ruta de prueba de login (POST)
app.post('/auth/login', (req, res) => {
  res.send('Ruta de login funcionando');
});
// Ruta de prueba de login (GET)
app.get('/auth/login', (req, res) => {
  res.send('Ruta de login funcionando');
});

const PORT = process.env.PORT || 5003;
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
