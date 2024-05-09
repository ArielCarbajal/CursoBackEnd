const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Ingrese su nombre: ', (nombre) => {
   rl.question('Ingrese su apellido: ',(apellido) =>{
       console.log(`Hola mi nombre es ${nombre} ${apellido}`)
   })
})

rl.question('Ingrese una cadena de texto: ', (cadena) => {
   console.log(`Numero de caracteres: ${cadena.length}`)    
})

rl.question('Ingrese una palabra: ', (palabra) => {
   console.log(palabra.toUpperCase())    
})

rl.question('Ingrese una frase: ', (frase) => {
    rl.question('Ingrese la palabra que quiera remplazar: ', (palabraCambiar) => {
        rl.question('Ingrese la palabra nueva: ', (palabraNueva) => {
            const frasemodificada = frase.replace(new RegExp(palabraCambiar, 'gi'), palabraNueva)
            console.log('Frase modificada: ', frasemodificada)
        })
    })    
})

rl.question('Ingrese una cadena: ', (cadena) => {
    const inicio  = 6;   
    const longitud = 5;
    const subcadena = cadena.substring(inicio, inicio + longitud);
    console.log(`Subcadena es: ${subcadena}`)
 })

rl.question('Ingrese una frase: ', (frase) => {
   const palabras = frase.split(' ');
   console.log(`Numero de palabras: ${palabras.length}`)    
})

rl.question('Ingrese una cadena: ', (cadena) => {
   const cadenaInvertida = cadena.split('').reverse().join('');
   console.log(`Cadena invertida: ${cadenaInvertida}`)    
})

rl.question('Ingrese una palabra: ', (palabra) => {
    const palabraInvertida = palabra.split('').reverse().join('');
    if(palabra === palabraInvertida){
        console.log(`${palabra} es un palindromo`)
    }else{
        console.log(`${palabra} no es un palindromo`)
    }    
 })

rl.question('Ingrese una palabra: ', (palabra) => {
    const vocales = palabra.match(/[aeiou]/gi);
    const numeroVocales = vocales ? vocales.length:0;
    console.log(`Numero de vocales: ${numeroVocales}`)
 })

rl.question('Ingrese una frase: ', (frase) => {
    const palabras = frase.split(' ');
    const fraseCapitalizada = palabras.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')
    console.log(`Frase capitalizada: ${fraseCapitalizada}`)
 })