'use strict';

// EJERCICIO 1
function nFactorial(n) {
   if (n === 1){
      return 1
   }
   else {
      return n * nFactorial(--n)
   }
}

// EJERCICIO 2
function nFibonacci(n) {

   
}

// EJERCICIO 3
function Queue() {
   // this.cola: []
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
