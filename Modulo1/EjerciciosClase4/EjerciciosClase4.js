//Ejercicio 1
// function saludar(nombre, callback){
//     const saludo = `Hola, ${nombre}`
//     callback(saludo)
// }
// function mostrar(saludo){
//     console.log(saludo)
// }
// saludar('William', mostrar)

//Ejercicio 2
// function multiplicarPromise(a, b){
//     return new Promise((resolve, reject) => {
//         const resultado = a*b
//         if(isNaN(resultado)){
//             reject('ERROR NO HAY DATOS')
//         }else{
//             resolve(resultado)
//         }
//     })
// }

// multiplicarPromise(2,'e')
// .then((resultado) => {
//     console.log(resultado)
// })
// .catch((error) => {
//     console.log(error)                
// })

//Ejercicio 3
// function multiplicar(a,b, callback){
//     const resultado = a*b
//     callback(resultado)
// }

// multiplicar(6,3, (resultado) =>{
//     console.log('Resulado: ', resultado)
// })

//Ejercicio 4
// function retrasarPromesa(ms){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             resolve(`La promesa se ha resuelto en ${ms} milisegundos`)
//         }, ms)
//     })
// }

// retrasarPromesa(2000)
// .then((mensaje) => {
//     console.log(mensaje)
// }).catch((error) => {
    
// });