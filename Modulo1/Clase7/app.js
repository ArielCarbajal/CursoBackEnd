const express = require('express')
const app = express()

const PORT=3000

app.get('/', (req,res) => {
    res.send("Este es un server usando express")
})
app.listen(PORT, () => {
    console.log(`Server iniciado http://localhost:${PORT}`)
})