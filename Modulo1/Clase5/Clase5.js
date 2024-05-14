//Ejercicio 1
// const shuffle = require('lodash/shuffle')

// const array = [9,3,5,3,4]
// const arrayAcomodado = shuffle(array)
// console.log(arrayAcomodado)

//Ejercicio 2
const express = require('express')
const app = express()

const PORT = 4000;

app.get('/',(req, res)=>{
    res.send("Servidor basico usando express")
})

app.listen(PORT, ()=>{
    console.log(`Server iniciado http://localhost:${PORT}`)
})

