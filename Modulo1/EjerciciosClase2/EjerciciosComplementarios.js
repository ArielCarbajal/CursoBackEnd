//Ejercicio 1
// class bebe{
//     constructor(nombre, edad, accion){
//         this._nombre = nombre;
//         this._edad = edad;
//         this._accion = accion;
//     }

//     llorar(){
//         console.log('esta llorando')
//     }

//     dormir(){
//         console.log('esta dormido')
//     }

//     comer(){
//         console.log('esta comiendo')
//     }

//     accion(){
//         if(this._accion === 'llorar'){
//             console.log(`El nombre del bebe es: ${this._nombre} tiene: ${this._edad} y:`)
//             this.llorar();
//         }else if(this._accion === 'dormir'){
//             console.log(`El nombre del bebe es: ${this._nombre} tiene: ${this._edad} y:`)
//             this.dormir();
//         }else if(this._accion === 'comer'){
//             console.log(`El nombre del bebe es: ${this._nombre} tiene: ${this._edad} y:`)
//             this.comer();
//         }
//     }
// }

// let bebe1 = new bebe('Antonio', '3 meses', 'llorar');
// let bebe2 = new bebe('Sonia', '5 meses', 'dormir');
// let bebe3 = new bebe('Javier', '8 meses','comer');

// bebe1.accion();
// bebe2.accion();
// bebe3.accion();


//Ejercicio 2
// let obtenerHora = new Date();
// let hora = obtenerHora.getHours();
// let minuto = obtenerHora.getMinutes();
// let segundos = obtenerHora.getSeconds();
// console.log(`La hora actual es: ${hora}:${minuto}:${segundos}`);

//Ejercicio 3
// class formula{
//     constructor(peso, altura){
//         this._peso = peso;
//         this._altura = altura;
//     }

//     calculo(){
//         return this._peso / this._altura ** 2
//     }

//     respuesta(){
//         const respuesta = this.calculo();
//         console.log(`El IMC es: ${respuesta}`);
//     }
// }

// let datos = new formula(40, 2.2);
// datos.respuesta();