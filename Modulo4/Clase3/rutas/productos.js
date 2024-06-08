const express = require('express')
const rutas = express.Router()
const Producto = require('../modelos/productos')
const multer = require('multer')
const path = require('path')
const fs = require('fs')

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb){
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const carga = multer ({storage:storage})

rutas.get('/', async(req, res) => {
    try {
        const productos = await Producto.find()
        res.status(200).json(productos)
    } catch (error) {
        res.status(500).json ({error:err.message})       
    }
})

rutas.post('/', carga.single('imagen'), async function(req,res) {
    const { producto, categoria, existencia, precio } = req.body
    const imagen = req.file ? req.file.filename : null
    try {
        const nuevoProducto = new Producto({producto, categoria, existencia, precio, imagen})
        await nuevoProducto.save()
        res.status(201).json(nuevoProducto)
    } catch (error) {
        res.status(500).json({error:err.message})
    }
})


rutas.put('/:id', carga.single('imagen'), async function(req, res) {
    const {producto, categoria, existencia, precio} = req.body
    const imagen = req.file ? req.file.filename : null
    try {
        const productos = await Producto.findById(req.params.id)
        if(!productos)
            return res.status(404).json({error:'Producto no encontrado'})

            productos.producto = producto || productos.producto
            productos.categoria = categoria || productos.categoria
            productos.existencia = existencia || productos.existencia
            productos.precio = precio || productos.precio   
            if(imagen){
                productos.imagen = imagen
            }
            await productos.save()
            res.status(200).json(productos)

    } catch (error) {
        res.status(500).json({error:err.message})
    }
})

rutas.delete('/:id', async function(req, res){
    try {
        const productos = await Producto.findByIdAndDelete(req.params.id)
        if(!productos)
        return res.status(404).json({error: 'Producto no encontrado'})
        if (productos.imagen) {
            const imagenPath = path.join(__dirname, "..", "uploads", productos.imagen);
            fs.unlink(imagenPath, (err) => {
              if (err) {
                console.log("error al eliminar");
              } else {
                console.log("Archivo eliminado", productos.imagen);
              }
            });
          }
        res.status(200).json({message: 'Producto eliminado'})
    } catch (error) {
        res.status(500).json({error:err.message})
    }
})

rutas.get('/:id', async(req, res) => {
    try {
        const productos = await Producto.findById(req.params.id)
        if(!productos)
            return res.status(404).json({error:'Producto no encontrado'})
        res.status(200).json(productos)
    } catch (error) {
        res.status(500).json ({error:err.message})       
    }
})

module.exports = rutas