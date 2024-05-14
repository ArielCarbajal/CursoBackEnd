//Ejercicio 1
// const shuffle = require('lodash/shuffle')

// const array = [9,3,5,3,4]
// const arrayAcomodado = shuffle(array)
// console.log(arrayAcomodado)

//Ejercicio 2
// const express = require('express')
// const app = express()

// const PORT = 4000;

// app.get('/',(req, res)=>{
//     res.send("Servidor basico usando express")
// })

// app.listen(PORT, ()=>{
//     console.log(`Server iniciado http://localhost:${PORT}`)
// })

const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
        user: 'ariel.carbajal21@itca.edu.sv',
        pass: '' //Sin contraseña pa que no me roben :D
    }
});

let mailOptions = {
    from: 'ariel.carbajal21@itca.edu.sv',
    to: 'j.william03@hotmail.com', 
    subject: 'Practica Correo', 
    text: 'Servidor de correo funcionando, Ariel Enoc Carbajal Amaya' 
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Correo electrónico enviado: ' + info.response);
    }
});
