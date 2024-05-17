import fs from 'fs'
import chalk from 'chalk'

const cargarNotas = () => {
    try {
        const dataBuffer = fs.readFileSync("notas.json")
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson)
    } catch (error) {
        return [];
    }
}

const guardarNotas = (notas) => {
    const dataJson = JSON.stringify(notas)
    fs.writeFileSync('notas.json', dataJson)
}

const agregarNotas = (title, body) => {
    const notas = cargarNotas();
    const duplicateNote = notas.find((note)=>{
        note.title === title
    })

    if(!duplicateNote){
        notas.push({
            title,
            body,
        })
        guardarNotas(notas)
        console.log(chalk.green.inverse('Nota agregada'))
    }else{
        console.log(chalk.red.inverse('Nota no agregada'))
    }
}

const eliminarNotas = (title) =>{
    const notas = cargarNotas();
    const notasToKeep = notas.filter((note) => note.title !== title)

    if(notas.length > notasToKeep.length){
        guardarNotas(notasToKeep)
        console.log(chalk.green.inverse('Nota elminada'))
    }else{
        console.log(chalk.red.inverse('Nota no eliminada'))
    }
}

const listarNotas = () => {
    const notas = cargarNotas();
    console.log(chalk.inverse("Tus notas"))
    notas.forEach((element) => {
        console.log(element.title)
    });
}

const leerNotas = (title) => {
    const notas = cargarNotas();
    const note = notas.find((note) => note.title === title)

    if(note){
        console.log(chalk.inverse(note.title))
        console.log(chalk.blue(note.body))
    }else{
        console.log(chalk.red.inverse('Nota no encontrada'))
    }
}

export{
    agregarNotas,
    eliminarNotas,
    listarNotas,
    leerNotas
}