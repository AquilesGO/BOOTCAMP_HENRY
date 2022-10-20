'use strict';

// EJERCICIO 1
function nFactorial(n) {
   if (n === 1){
      return 1
   }
   else  {
      return n * nFactorial(--n)
   }
}

// EJERCICIO 2

//n=    0            1           2              3      4      5      6       7       8       9      10      11       12     ... 
//fibo  0            1           1              2      3      5      8      13      21      34      55      89      144     ...
// return 0     return 1    (n-1) + (n-2)

function nFibonacci(n) {
// si me pide lo que hay en una posición negativa retorno null.
  if (n < 0) return null;
// si me pide lo que hay en la posición 0, retorno 0.
// si me pide lo que hay en la posición 1, retorno 1.
if (n === 0 || n === 1) return n;
// en cualquier otro cas, retorno la suma de lo que haya
// en la posición (n-1) y lo que haya en la posición (n-2)
return nFibonacci (n - 1) + nFibonacci (n - 2);
}
console.log(nFibonacci(8))



//-----------------------DE AQUÍ EN ADELANTE ES ESTRUCTURA DE DATOS: ---------------------------------------------

// EJERCICIO 3
function Queue() {
   this.queue = [];
}

Queue.prototype.enqueue = function (element){
   this.queue.push(element);
};

Queue.prototype.dequeue = function (){
   return this.queue.shift();
};

Queue.prototype.size = function (){
   return this.queue.length;
};

var laFilaDelBanco = new Queue();
console.log(laFilaDelBanco.size());

laFilaDelBanco.enqueue('Hola');

//------------Mismo ejercicio con class:-----------
// class Queue {
//    constructor(){
//       this.queue = [];
//    }
// enqueue(element) {
//    this.queue.push(element);   
// }
// dequeue(){
//    return this.queue.shift();
// }
// size(){
//    return this.queue.length;
// }
// }


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
