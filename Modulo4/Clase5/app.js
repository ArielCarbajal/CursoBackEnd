// function suma(a, b){
//     return a + b
// }

// module.exports = suma

// function numeroPositivo(numero){
//     if(numero >= 1){
//         return true
//     }
//     return false
// }

// module.exports = numeroPositivo

function valores(numero){
    if(numero > 0){
        return 'positivo'
    }else if(numero < 0){
        return 'negativo'
    }
    return 'cero'
}

module.exports = valores