import { agregarNotas, eliminarNotas, listarNotas, leerNotas, editarNotas } from './utiles/notas.js'
import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function Menu(){        
    rl.question("Elija una opcion: \n 1. Agregar nota \n 2. Ver notas \n 3. Eliminar nota \n 4. Leer nota \n 5. Editar nota \n 6. Salir \n Opcion: ", (opciones) =>{
        switch(opciones){
            case '1':
                rl.question("Ingrese el titulo de la nota: ", (tituloNota) => {
                    rl.question("Ingrese el cuerpo de la nota: ", (cuerpoNota) => {
                        agregarNotas(tituloNota, cuerpoNota)
                        Menu()
                    })
                })
                break;
            case '2':
                console.log("Tus notas: ")
                    listarNotas()
                    Menu()
                break;
            case '3':
                rl.question("Ingrese el titulo para eliminar nota: ", (titulo) => {
                    eliminarNotas(titulo)                   
                    Menu()
                })
                break;
            case '4':
                rl.question("Ingrese el titulo de la nota que quiera leer: ", (titulo) => {
                    leerNotas(titulo)                    
                    Menu()
                })
                break;
            case '5':
                rl.question("Ingrese el titulo de la nota que quiera editar: ", (titulo) => {
                    rl.question("Ingrese la nueva nota: ", (nuevaNota) => {
                        editarNotas(titulo, nuevaNota)
                        Menu()
                    })
                }) 
                break; 
            case '6':
                console.log("Cerrando el programa...")
                rl.close
                break;     
            default:
                rl.question("Numero no valido") 
                Menu()
                break;           
        }
    })
}
Menu()

// yargs(hideBin(process.argv))
//     .command({
//         command: 'agregar',
//         describe: 'Agregar nueva nota',
//         builder: {
//             title: {
//                 describe: 'Titulo de la nota',
//                 demandOption: true,
//                 type: 'string'
//             },
//             body: {
//                 describe: 'Cuerpo de la nota',
//                 demandOption: true,
//                 type: 'string'
//             },
//         }, 
//         handler(argv){
//             agregarNotas(argv.title, argv.body);
//         }
//     })
//     .command({
//         command: 'eliminar',
//         describe: 'Eliminar una nota',
//         builder: {
//             title: {
//                 describe: 'Titulo de la nota',
//                 demandOption: true,
//                 type: 'string'
//             },
//         },
//         handler(argv){
//             eliminarNotas(argv.title)
//         }
//     })
//     .command({
//         command: 'ver',
//         describe: 'Lista de notas',
//         handler(){
//             listarNotas()
//         }
//     })
//     .command({
//         command: 'leer',
//         describe: 'Leer una nota',
//         builder: {
//             title: {
//                 describe: 'Titulo de la nota',
//                 demandOption: true,
//                 type: 'string'
//             },  
//         },  
//         handler(argv){
//             leerNotas(argv.title)
//         }
//     })
//     .command({
//         command: 'modificar',
//         describe: 'Modificar una nota',
//         builder: {
//             title: {
//                 describe: 'Nota a modificar',
//                 demandOption: true,
//                 type: 'string',
//             },
//             body: {
//                 describe: 'Nuevo contenido de la nota',
//                 demandOption: true,
//                 type: 'string',
//             },
//         },
//         handler(argv) {
//             editarNotas(argv.title, argv.body);
//         },
//     })
//     .parse();