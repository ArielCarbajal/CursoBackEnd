//Ejercicio 1
// function contarPalabras(array){
//     let contadorPalabras = {};
//     array.forEach(cadena => {
//         let palabras = cadena.split(/\s+/);
//         palabras.forEach(palabra =>{
//             if(contadorPalabras[palabra]){
//                 contadorPalabras[palabra]++;
//             }else{
//                 contadorPalabras[palabra]=1;
//             }
//         })
//     });
//     return contadorPalabras;
// }

// let palabrasArray = ["Hola buenos dias", "Hola buenas tardes", "hola buenas noches"];
// let resultado = contarPalabras(palabrasArray);
// console.log(resultado);

//Ejercicio 2
// let productoA = {
//     nombre: "Camisa",
//     precio: 25,
//     cantidad: 5
// }

// let productoB = {
//     nombre: "Jeans",
//     precio: 40,
//     cantidad: 3
// }

// let costoTotalProductoA = productoA.precio * productoA.cantidad;
// let costoTotalProductoB = productoB.precio * productoB.cantidad;

// console.log(costoTotalProductoA);
// console.log(costoTotalProductoB);

// let costoTotalProductosAyB = costoTotalProductoA+costoTotalProductoB;

// console.log(`Costo total de todos los productos: ${costoTotalProductosAyB}`);

// Ejercicio 3
// let personas = [
//     {nombre: "Sergio", edad: 33, ciudad:"San Salvador"},
//     {nombre: "Martha", edad: 35, ciudad:"San Salvador"},
//     {nombre: "Marleni", edad: 50, ciudad:"Santa Tecla"},
//     {nombre: "Sonia", edad: 25, ciudad:"San Miguel"}
// ];

// function filtrarPersonas(personaObjeto, ciudad){
//     return personaObjeto.filter(persona => persona.edad > 30 && persona.ciudad === ciudad);
// }

// let personasFiltradas = filtrarPersonas(personas, 'San Salvador');
// console.log(personasFiltradas);

//Ejercicio 4
// let numeros = [2,5,6,9,12];

// let cuadradosNewArray = numeros.map(numero => numero ** 2);
// console.log(numeros);
// console.log(cuadradosNewArray);

//Ejercicio 5
// let arreglo = [1,2,3,4,5,6,7,8,9,10];
// let sumaPares = 0;

// for(let i = 0; i<arreglo.length; i++){
//     if(arreglo[i] % 2 === 0){
//         sumaPares += arreglo[i];
//     }
// }
// console.log(sumaPares);

//Ejercicio6
// let personas = [
//     {nombre: "Sergio", edad: 33, ciudad:"San Salvador"},
//     {nombre: "Martha", edad: 35, ciudad:"San Salvador"},
//     {nombre: "Marleni", edad: 50, ciudad:"Santa Tecla"},
//     {nombre: "Sonia", edad: 25, ciudad:"San Miguel"}
// ];

// function buscarNombre(arrayPersonas, nombre){
//     return personas.find(objeto => objeto.nombre === nombre)    
// }

// let personaBuscada = buscarNombre(personas, "Martha");
// console.log(personaBuscada);