const express = require('express') 
const axios = require('axios')
const port = 3000;
const url = "https://jsonplaceholder.typicode.com/todos"
   
const app = express();

app.get('/todos', async(req,res)=>{
  try {
    const response = await axios.get(url)
    res.json(response.data)
    console.log(response.data)
    console.log("--------------------------------------------------")
  } catch (error) {
    res.status(500).json({error: 'Error de server'})
  }
})

app.get('/todos/:id', async(req,res)=>{
  try {
    const id = parseInt(req.params.id)
    const response = await axios.get(url)
    const titulo = response.data.filter((a) => a.id === id).map((a) => a.title)
    res.json(titulo)
    console.log(titulo)
    console.log("--------------------------------------------------")
  } catch (error) {
    res.status(500).json({error: 'Error de server'})
  }
})  

app.get('/todos/titulo/:titulo', async(req,res)=>{
  try {
    const titulo = req.params.titulo
    const response = await axios.get(url)
    const datos = response.data.find((a) => a.title === titulo)
    res.json(datos)
    console.log(datos)
    console.log("--------------------------------------------------")
  } catch (error) {
    res.status(500).json({error: 'Error de server'})
  }
})

app.get('/todos/registrosamostrar/5', async(req,res)=>{
  try {
    const response = await axios.get(url)
    const datos = response.data.slice(0, 5)
    res.json(datos)
    datos.forEach((data) => {
      console.log(data);
    });
    console.log("--------------------------------------------------")
  } catch (error) {
    res.status(500).json({error: 'Error de server'})
  }
})

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto: ${port}`);
});