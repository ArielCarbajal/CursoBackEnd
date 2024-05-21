const fs = require("fs");
const path = require('path')
const readline = require('readline')

const documentos = path.join(process.env.Home || process.env.USERPROFILE, 'Documents')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// fs.readFile("archivo.txt", "utf8", (error, data) => {
//   if (error) {
//     console.log("error al leer archivo", error);
//   } else {
//     console.log("contenido", data);
//   }
// });

// const contenido = "Este es el nuevo contenido"
// fs.writeFile('archivo.txt', contenido, err =>{
//     if(err){
//         console.error('Error al escribir el archivo')
//     }else{
//         console.log('El archivo esta escrito')
//     }
// })

// const archivo = 'archivo.txt'
// const contenidoAgregado = '\n Este es un contenido agregado'

// fs.appendFile(archivo, contenidoAgregado, err => {
//     if(err){
//         console.error('Error al agregar el contenido')
//     }else{
//         console.log('Contenido agregado')
//     }
// })

// const ruta = 'C:/Users/Ariel Carbajal/Desktop/code.txt'

// fs.readFile(ruta, 'utf-8', (err,data) => {
//     if(err){
//         console.error('Error al leer el archivo', err)
//     }else{
//         console.log('El archivo esta leido\n', data)
//     }
// })

// rl.question('Nombre de la carpeta a crear: ', (carpeta) =>{
//     const nuevaCarpeta = path.join(documentos, carpeta)
//     fs.mkdir(nuevaCarpeta, {recursive: true}, (err) => {
//         if(err){
//             console.error('Error al crear la carpeta', err)
//         }else{
//             console.log('Carpeta creada exitosamente')
//         }
//     })
// })

// rl.question('Nombre de la carpeta a eliminar: ', (carpeta) =>{
//     const carpetaDel = path.join(documentos, carpeta)
//     fs.rmdir(carpetaDel, {recursive: true}, (err) => {
//         if(err){
//             console.error('Error al eliminar la carpeta', err)
//         }else{
//             console.log('Carpeta eliminada exitosamente')
//         }
//     })
// })