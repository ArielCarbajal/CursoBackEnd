// const suma = require('./app')
//     test('Sumar dos numeros a + b', ()=>{
//         expect(suma(5,4)).toBe(9)
//     })

// const numeroPositivo = require('./app')
//     test('Evaluar que 5 es positivo', ()=>{
//         expect(numeroPositivo(5)).toBe(true)
//     })

//     test('Evaluar que -1 no es positivo', ()=>{
//         expect(numeroPositivo(-1)).toBe(false)
//     })

//     test('Evaluar que 0 no es positivo ni negativo', ()=>{
//         expect(numeroPositivo(0)).toBe(false)
//     })

const valores = require('./app')
    test('Evaluar que 5 es positivo', ()=>{
        expect(valores(5)).toBe('positivo')
    })

    test('Evaluar que -1 no es positivo', ()=>{
        expect(valores(-1)).toBe('negativo')
    })

    test('Evaluar que 0 no es positivo ni negativo', ()=>{
        expect(valores(0)).toBe('cero')
    })