const express = require('express')
const app = express()
const port = 6000
app.use(express.json());
let datos = []

app.get('/datos', (req, res) => {
    try {
        res.status(200).json(datos);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

app.post('/datos', (req, res) => {
    try {
        const newDato = {
            id: datos.length + 1,
            nombre: req.body.nombre,
            edad: req.body.edad,
            genero: req.body.genero,
            departamento: req.body.departamento
          };

        datos.push(newDato)  
        res.status(200).json({message: 'Dato agregado correctamente'});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
})

app.put('/datos/:id', (req, res) => {
    try {
        const datoID = parseInt(req.params.id);
        const dato = datos.find((t) => t.id === datoID);
        if(dato)
            Object.assign(dato, req.body);
            res.status(200).json({message: 'Dato actualizado correctamente'});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
})

app.delete('/datos/:id', (req, res) => {
    try {
        const datoID = parseInt(req.params.id);
        const dato = datos.findIndex((t) => t.id === datoID);
        if(dato !== -1)
            datos.splice(dato, 1)
            res.status(200).json({message: 'Dato eliminado correctamente'});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
})

app.get('/datos/:id', (req, res) => {
    try {
        const datoID = parseInt(req.params.id);
        const dato = datos.find((t) => t.id === datoID);
        if(dato)
        res.status(200).json(dato);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))