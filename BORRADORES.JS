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

function saludar(idioma){
    if(idioma === 'ingles')
        return function(){
            console.log('Hello');
    }

    if(idioma === 'espa'){
        return function (){
            console.log('Hola');
        }
    }
}

var saludarEnIngles = saludar('ingles');
saludarEnIngles();
var saludarEnEspa = saludar('espa');
saludarEnEspa();
















