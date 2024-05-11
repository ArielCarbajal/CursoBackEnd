//Ejercicio 1
function contarPalabras(array){
    let contadorPalabras = {};
    array.forEach(cadena => {
        let palabras = cadena.split(/\s+/);
        palabras.forEach(palabra =>{
            if(contadorPalabras[palabra]){
                contadorPalabras[palabra]++;
            }else{
                contadorPalabras[palabra]=1;
            }
        })
    });
    return contadorPalabras;
}

let palabrasArray = ["Hola buenos dias", "Hola buenas tardes", "hola buenas noches"];
let resultado = contarPalabras(palabrasArray);
console.log(resultado);

//Ejercicio 2
let productoA = {
    nombre: "Camisa",
    precio: 25,
    cantidad: 5
}

let productoB = {
    nombre: "Jeans",
    precio: 40,
    cantidad: 3
}

let costoTotalProductoA = productoA.precio * productoA.cantidad;
let costoTotalProductoB = productoB.precio * productoB.cantidad;

console.log(costoTotalProductoA);
console.log(costoTotalProductoB);

let costoTotalProductosAyB = costoTotalProductoA+costoTotalProductoB;

console.log(`Costo total de todos los productos: ${costoTotalProductosAyB}`);

// Ejercicio 3
let personas1 = [
    {nombre: "Sergio", edad: 33, ciudad:"San Salvador"},
    {nombre: "Martha", edad: 35, ciudad:"San Salvador"},
    {nombre: "Marleni", edad: 50, ciudad:"Santa Tecla"},
    {nombre: "Sonia", edad: 25, ciudad:"San Miguel"}
];

function filtrarPersonas(personaObjeto, ciudad){
    return personaObjeto.filter(persona => persona.edad > 30 && persona.ciudad === ciudad);
}

let personasFiltradas = filtrarPersonas(personas1, 'San Salvador');
console.log(personasFiltradas);

//Ejercicio 4
let numeros = [2,5,6,9,12];

let cuadradosNewArray = numeros.map(numero => numero ** 2);
console.log(numeros);
console.log(cuadradosNewArray);

//Ejercicio 5
let arreglo = [1,2,3,4,5,6,7,8,9,10];
let sumaPares = 0;

for(let i = 0; i<arreglo.length; i++){
    if(arreglo[i] % 2 === 0){
        sumaPares += arreglo[i];
    }
}
console.log(sumaPares);

//Ejercicio6
let personas2 = [
    {nombre: "Sergio", edad: 33, ciudad:"San Salvador"},
    {nombre: "Martha", edad: 35, ciudad:"San Salvador"},
    {nombre: "Marleni", edad: 50, ciudad:"Santa Tecla"},
    {nombre: "Sonia", edad: 25, ciudad:"San Miguel"}
];

function buscarNombre(arrayPersonas, nombre){
    return personas2.find(objeto => objeto.nombre === nombre)    
}

let personaBuscada = buscarNombre(personas2, "Martha");
console.log(personaBuscada);

//Ejercicio 7
let personas3 = [
    {nombre: "Juan", edad: 24},
    {nombre: "Maria", edad: 23},
    {nombre: "Manfredis", edad: 25},
    {nombre: "Ester", edad: 30}
];

let personasOrdenadas = personas3.sort((a,b) => a.edad -b.edad)
console.log(personasOrdenadas)

// Ejercicio 8
function validarObjeto(objeto){
    const propiedades = ['nombre','direccion','telefono'];
    for(let propiedad of propiedades){
        if(objeto.hasOwnProperty(propiedad)){
            let msj = "Objeto Aprobado";
            return msj;
        }else{
            let msj = "Objeto no Aprobado";
            return msj;
        }
    }
}

let cliente = {nombre: "William", direccion: "San Miguel", telefono: "78905644"}
console.log(validarObjeto(cliente))

//Ejercicio 9
let listaCompras = {
    "Manzanas": 3,
    "Elotes": 2,
    "Pan": 1
}

function generarLista(){
    let listaLegible = "Lista de compras: \n"

    for(let elemento in listaCompras){
        listaLegible += `${elemento}: ${listaCompras[elemento]} unidades \n`
    }

    return listaLegible
}

let listaLegible = generarLista(listaCompras);
console.log(listaLegible)

//Ejercicio 10
let estudiante = [
    {nombre: "Grecia", edad: 20},
    {nombre: "Luis", edad: 22},
    {nombre: "Anderson", edad: 21}
]

let profesores = [  
    {nombre: "Juan", materia: "Matematicas"},
    {nombre: "Medrado", materia: "Lenguaje"},
    {nombre: "Antonio", materia: "Ciencias"}
]

function combinarObjetos(a,b){
    let comunidadEducativa = [...a, ...b]
    return comunidadEducativa
}

let comunidad = combinarObjetos(estudiante, profesores)
console.log(comunidad)