const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://tobivelazquez80:dbMarketpw@dbmarket.1ngbz.mongodb.net/')
    .then(() => console.log('Conectado a MongoDB en localhost'))
    .catch((err) => console.error('Error al conectar a MongoDB:', err));

const productosRoutes = require('./routes/productos');
app.use('/api/productos', productosRoutes);

// Puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
