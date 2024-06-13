// function esNumeroPar(numero) {
//     return numero % 2 === 0;
//     }

// module.exports = esNumeroPar;


function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

module.exports = factorial;

