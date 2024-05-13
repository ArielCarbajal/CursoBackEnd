const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Ejercicio 1
// function evaluar(numero){
//     if(numero >= 1){
//         return console.log(numero + " es positivo")
//     }else if(numero <= -1){
//         return console.log(numero + " es negativo")
//     }else{
//         return console.log("El numero es 0")
//     }
// }

// rl.question("Ingrese un numero: ", (numero) => {
//     const num = evaluar(numero)
// })

//Ejercicio2
// function evaluarCalculo(numero1, numero2, numero3){
//     if(parseFloat(numero1) > parseFloat(numero2) && parseFloat(numero1) > parseFloat(numero3)){
//         return console.log(numero1 + " es el mayor")
//     }else if(parseFloat(numero2) > parseFloat(numero1) && parseFloat(numero2) > parseFloat(numero3)){
//         return console.log(numero2 + " es el mayor")
//     }else if(parseFloat(numero3) > parseFloat(numero1) && parseFloat(numero3) >parseFloat(numero2)){
//         return console.log(numero3 + " es el mayor")
//     }    
// }

// rl.question("Ingrese el primer numero: ",(numero1)=> {
//     rl.question("Ingrese el segundo numero: ",(numero2)=> {
//         rl.question("Ingrese el tercer numero: ",(numero3)=> {
//             const solucion = evaluarCalculo(numero1, numero2, numero3)
//         })
//     })   
// })

//Ejercicio3
// rl.question("Digite el numero a realizar el factorial: ", (n1) => {
//     let resultado = 1
//     for(let i = 1; i <= parseFloat(n1); i++){
//         resultado *= i; 
//     }
//     console.log("El factorial es: "+ resultado)
// })

//Ejercicio 4
// function evaluarPar(num){
//     if(parseFloat(num) % 2 === 0){
//         console.log("El numero es par")
//     }else{
//         console.log("El numero no es par")
//     }
// }

// rl.question("Ingrese un numero a evaluar: ", (num) => {
//     const respuesta = evaluarPar(num)
// })