// Factorial()
// En este ejercicio, deberás crear una Función factorial que reciba un número y devuelva el factorial de este número.
// Por ejemplo, si hacemos factorial(5) la Función deberá hacer la operación 5x4x3x2x1 y devolver el resultado: 120.
// Para hacer el ejercicio, tené en cuenta estas indicaciones:

// Deberás hacer una Variable para almacenar el resultado.
// Deberás usar un Loop hasta alcanzar el número que recibís como input.
// En cada vuelta del Loop deberás actualizar el resultado para no caer en un Loop infinito.
// En caso de que el usuario ingrese 0 o un número negativo, deberás generar acciones compatibles con la definición del Factorial de un Número.


// let num = parseInt (prompt("Ingrese el num al que desea hacerle un factorial."));

// function factorial (num) { 
//     let i=num;
//     let acumulador=1;
//     while (i!=0) {
    
//         acumulador= acumulador * i;
//         i--;
//     }
//     return acumulador
// }

// console.log(`Resultado de factorial ${num} es ` + factorial(num));


////                  CADENA DE CARACTERES

// let textoPrueba = `Muy buenas a todos`
// let arregloDeTexto = []
// let prueba = textoPrueba.split(" ")

// function cadenaDeCaracteres(texto){
//     let nuevaVariable = texto.split(" ")

//     console.log(nuevaVariable[0])
//     console.log(nuevaVariable[nuevaVariable.length-1])
//     console.log(nuevaVariable.length)

// }

// Fecha De Hoy
// Escribí una función que indique si la fecha de hoy es par o impar.


// let fecha = new Date();
// function parOImpar (fecha){
// if (fecha.getDay%2!=0){
//     console.log ("La fecha es impar") }
//     else {
//         console.log ("La fecha es par")
//     }
// };



// Conversión
// Deberás creas una función llamada conversion la cual reciba una temperatura en grados Fahrenheit pasada por parámetro y la pase a Celsius (y viceversa). Luego deberá mostrar la siguiente información:

// Si la temperatura está entre 14°F/32°F o -10°C/0°C, debe retornar "Temperatura baja".

// Si la temperatura está entre 33°F/68°F o 1°C/20°C, debe retornar "Temperatura adecuada".

// Si la temperatura está entre 69°F/95°F o 21°C/35°C, debe retornar "Temperatura alta".

// Si ingresa un valor inválido o una temperatura fuera de ese rango, debe retornar "Temperatura desconocida".

// function conversion (temperatura) {
//     Grados Fahrenheit = (grados centígrados × 9/5) +32
// }