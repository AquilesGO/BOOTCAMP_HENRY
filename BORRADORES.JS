// function saludar (saludo){
//    return function (nombre){
//     console.log(saludo + ' ' + nombre);
//    }
// }
// var saludoCompleto = saludar('Hola');

// saludoCompleto ('Aquileo');


// function cacheFunction(cb) {
//     var cache = {};
//     return function (arg){

//     }
//   }



// function creaFunc(nombre) {
//     return function (apellido) {
//      console.log('Mi nombre es ' + nombre + ' ' + apellido);
//     }
   
// }
//   var miFunc = creaFunc('Aquileo');

//     // miFunc('Gutierrez');
//     console.log(miFunc('Gutiérrez'));

// function creaSumador(x) {
//     return function(y) {
//         return x + y;
//     };
    
//   }
//   var suma5 = creaSumador(5);
//   var suma10 = creaSumador(10);
  
//    console.log(suma5(2));  // muestra 7
//   console.log(suma10(2)); // muestra 12














// contexto creación de creaSumador(x)
    //creación

// contexto global
    //creación
        // function creaSumador
        // var suma5
    //ejecución
        // creaSumador(x) 




// function sumar(x){
//     return function (y){
//         return x * y
//     }
// }

// var resultado = sumar (5);
// var resultado2 = sumar (4)


// console.log(resultado (2))
// console.log(resultado2 (2))


// function cacheFunction(cb) {
//     var cache = {};
//     return function (arg){
//         if(cache.hasOwnProperty(arg)){
//             return cache [arg];
//         } else {
//             cache[arg] = cd(arg);
//             return caja[arg];
//         }
//     }  
// }





// function saludar(idioma){
//     if(idioma === 'ingles')
//         return function(){
//             console.log('Hello');
//     }

//     if(idioma === 'espa'){
//         return function (){
//             console.log('Hola');
//         }
//     }
// }

// var saludarEnIngles = saludar('ingles');
// saludarEnIngles();
// var saludarEnEspa = saludar('espa');
// saludarEnEspa();



// var instructor = {
//     nombre: 'Franco',
//     edad: 25,
//  };
 
//  var alumno = {
//     nombre: 'Juan',
//     curso: 'FullStack',
//  };
 
//  function getNombre() {
//     return this.nombre
//  }


//  let getNombreInstructor = getNombre.bind(instructor);
//  console.log(getNombreInstructor())
//  let getNombreAlumno = getNombre.bind(alumno);
//  console.log(getNombreAlumno())





//  function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
//     return delimitadorIzquierda + cadena + delimitadorDerecha;
//   }
  
//   let textoAsteriscos = crearCadena.bind(this, '*', '*');
//   let textoGuiones = crearCadena.bind(this, '-', '-');
//   let textoUnderscore = crearCadena.bind(this, '_', '_');

//   console.log(textoAsteriscos('Hola'));
//   console.log(textoGuiones('Hola'));
//   console.log(textoUnderscore('Hola'));




// function factorial(n) {
//     if (n === 0 || n === 1) return 1;
   
//     else if (n < 0) return 0; 
    
//     return n * factorial(n - 1);  
//  }
 
//  console.log(factorial (5));

function fibonacci(n){
    if (n === 0 || n === 1) return n;
    if (n < 0) return undefined;
    
    return fibonacci(n-1) + fibonacci(n-2);   
}

console.log (fibonacci(6))

//n=    0            1           2              3      4      5      6       7       8       9      10      11       12     ... 
//fibo  0            1           1              2      3      5      8      13      21      34      55      89      144     ...
// return 0     return 1    (n-1) + (n-2)