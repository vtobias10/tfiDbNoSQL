const mongoose = require('mongoose');

// Esquema de la colección productos
const ProductoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String },
    precio: { type: Number, required: true },
    stock: { type: Number, required: true },
    categoria: { type: String, required: true },
    fechaCreacion: { type: Date, default: Date.now },
});

// Modelo exportado
module.exports = mongoose.model('productos', ProductoSchema);