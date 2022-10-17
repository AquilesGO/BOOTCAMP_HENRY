'use strict';

// ### 🟡 **Ejercicio 1: BinarioADecimal**

// Declara una función que reciba por parámetro un número en formato string en base binaria y retorne el mismo número en base decimal. El valor retornado debe ser de tipo number. Por ejemplo:

// ```javascript
// BinarioADecimal('1100'); // debe retornar 12
// ```
function BinarioADecimal(num) {
   var decimal = 0;
   var numArray = num.split('');
 
   for (var i = 0; i < numArray.length; i++) {
     decimal += numArray[i] * (Math.pow(2,(numArray.length-1-i)));
   } 
   return decimal;
}

function DecimalABinario(num) {
// Forma 1 de hacerlo:
   // var decimalToBinary = 0;
   // decimalToBinary = num.toString(2);
   // return decimalToBinary;

// Forma 2 de hacerlo (tutora Ana de Henry):
   let binary = '';
   while (num > 0){
      binary = (num % 2).toString() + binary;
      num = Math.floor(num/2);
   }
   return binary;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
