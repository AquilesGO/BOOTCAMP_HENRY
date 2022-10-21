'use strict'
// No cambies los nombres de las funciones.


function swap(array, idx1, idx2){
  var aux = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = aux;
}

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  var array = [1];
  var divisor = 2 
  while(num !== 1){
    if(num % divisor === 0) {
      array.push(divisor);
      num = num / divisor;
    } else{
      divisor++;
    }
  }
  return array;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = array.length - 1; i>0; i--){
    for(let j = 0; j < i; j++){
      if(array[j] > array[j+1]) swap(array, j, j + 1);
    }
  }
  return array;
};



function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
for (let i = 0; i < array.length; i++) {
 var valueToInsert = array[i];
 var j = i - 1;

 for (j; j >= 0; j--) {
    if (array[j] > valueToInsert)  array[j+1] = array[j];
    else break; 
 }

 array[j+1] = valueToInsert;
}
return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length -1; i++){
    var min = i;
    for (let j = i + 1; j < array.length; j++){
      if(array[j] < array[min]) min = j;
    }
    if (min!==i) swap(array, i, min);
  }
  return array;
};


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
