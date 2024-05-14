const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function Menu(){
    rl.question("Ingrese el numero de ejercicio que desea revisar: ", (numEjercicio) => {
        let mostrarEj
        switch(parseInt(numEjercicio)){
            case 1:
                Ejercicio1()
                break;
            case 2:
                Ejercicio2()
                break;
            case 3:
                Ejercicio3()
                break;
            case 4:
                Ejercicio4()
                break;
            case 5:
                Ejercicio5()
                break;
            case 6:
                Ejercicio6()
                break;
            case 7:
                Ejercicio7()
                break;
            case 8:
                console.log("Cerrando el programa...")
                rl.close
                break;
            default:
                console.log("Numero no valido")    
                Menu()
                break;
        }
    })
}
Menu()

//Ejercicio 1
function Ejercicio1(){
    function evaluar(numero){
        if(numero >= 1){
            return console.log(numero + " es positivo")
        }else if(numero <= -1){
            return console.log(numero + " es negativo")
        }else{
            return console.log("El numero es 0")
        }
    }
    
    rl.question("Ingrese un numero: ", (numero) => {
        const num = evaluar(numero)
        Menu()
    })
}

//Ejercicio2
function Ejercicio2(){
    function evaluarCalculo(numero1, numero2, numero3){
        if(parseFloat(numero1) > parseFloat(numero2) && parseFloat(numero1) > parseFloat(numero3)){
            return console.log(numero1 + " es el mayor")
        }else if(parseFloat(numero2) > parseFloat(numero1) && parseFloat(numero2) > parseFloat(numero3)){
            return console.log(numero2 + " es el mayor")
        }else if(parseFloat(numero3) > parseFloat(numero1) && parseFloat(numero3) >parseFloat(numero2)){
            return console.log(numero3 + " es el mayor")
        }    
    }
    
    rl.question("Ingrese el primer numero: ",(numero1)=> {
        rl.question("Ingrese el segundo numero: ",(numero2)=> {
            rl.question("Ingrese el tercer numero: ",(numero3)=> {
                const solucion = evaluarCalculo(numero1, numero2, numero3)
                Menu()
            })
        })   
    })
}

//Ejercicio3
function Ejercicio3(){
    rl.question("Digite el numero a realizar el factorial: ", (n1) => {
        let resultado = 1
        for(let i = 1; i <= parseFloat(n1); i++){
            resultado *= i; 
        }
        console.log("El factorial es: "+ resultado)
        Menu()
    })
}

//Ejercicio 4
function Ejercicio4(){
    function evaluarPar(num){
        if(parseFloat(num) % 2 === 0){
            console.log("El numero es par")
        }else{
            console.log("El numero no es par")
        }
    }
    
    rl.question("Ingrese un numero a evaluar: ", (num) => {
        const respuesta = evaluarPar(num)
        Menu()
    })
}

//Ejercicio 5
function Ejercicio5(){
    rl.question("Ingrese el color 1: ", (color1) => {
        rl.question("Ingrese el color 2: ", (color2) => {
            if(color1==="azul" && color2==="amarillo"){
                console.log("La mezcla genera el color verde")            
            }else if(color1==="azul" && color2==="rojo"){
                console.log("La mezcla genera el color morado")            
            }else if(color1==="rojo" && color2==="amarillo"){
                console.log("La mezcla genera el color naranja")                        
            }else{
                console.log("La combinacion no se encuntra disponible.")            
            } 
            Menu()         
        })
    })
}

//Ejercicio 6
function Ejercicio6(){
    rl.question("Ingrese el numero del mes: ", (nMes) => {
        let nombreMes
        switch(parseInt(nMes)){
            case 1:
                nombreMes = "Enero";
                break;
            case 2:
                nombreMes = "Febrero";
                break;
            case 3:
                nombreMes = "Marzo";
                break;
            case 4:
                nombreMes = "Abril";
                break;
            case 5:
                nombreMes = "Mayo";
                break;
            case 6:
                nombreMes = "Junio";
                break;
            case 7:
                nombreMes = "Julio";
                break;
            case 8:
                nombreMes = "Agosto";
                break;
            case 9:
                nombreMes = "Septiembre";
                break;
            case 10:
                nombreMes = "Octubre";
                break;
            case 11:
                nombreMes = "Noviembre";
                break;
            case 12:
                nombreMes = "Diciembre";
                break;
    
            default:
                nombreMes = "Numero no valido"
                break;         
        }
        console.log(nombreMes)
        Menu()
    })
}

//Ejercicio 7
function Ejercicio7(){
    rl.question("Ingrese la categoria del vehiculo: ", (categoria) => {
        let tipoVehiculo
        switch(categoria){
            case 'Moto':
                tipoVehiculo = "Moto";
                break;
            case 'Auto':
                tipoVehiculo = "Auto";
                break;
            case 'Camion':
                tipoVehiculo = "Camion";
                break;       
            case 'Bicicleta':
                tipoVehiculo = "Bicicleta";
                break;             
            default:
                tipoVehiculo = "La categoria no existe";
                break;        
        }
        console.log(tipoVehiculo)
        Menu()
    })
}