const express = require('express');
const Producto = require('../models/producto');
const router = express.Router();

// POST - Crear un nuevo producto
router.post('/', async (req, res) => {
    try {
        const nuevoProducto = new Producto(req.body);
        const productoGuardado = await nuevoProducto.save();
        res.status(201).json(productoGuardado);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET - Obtener todos los productos
router.get('/', async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET - Obtener un producto por ID
router.get('/:id', async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id);
        if (!producto) return res.status(404).json({ message: 'Producto no encontrado' });
        res.json(producto);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// PUT - Actualizar un producto
router.put('/:id', async (req, res) => {
    try {
        const productoActualizado = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(productoActualizado);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE - Eliminar un producto
router.delete('/:id', async (req, res) => {
    try {
        const productoEliminado = await Producto.findByIdAndDelete(req.params.id);
        res.json(productoEliminado);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;