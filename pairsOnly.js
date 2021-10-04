// Escreva uma função que receba um array de números e retorne apenas os números pares.

// OBS: Use o loop while para resolver essa questão.

const retorneOsImpares = function(arr){
  let counter = 0;
  let pares = [];
  while(counter < arr.length){
    if (arr[counter]%2 === 0){
      pares.push(arr[counter]);
    }
    counter++;
  }
  return pares;
}