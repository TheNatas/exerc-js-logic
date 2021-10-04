// Escreva uma função que receba 2 arrays e retorne a quantidade de elementos em comum entre os dois.

const commonBetween = (arr1, arr2) => {
  let numberOfCommons = 0;
  
  for (let i = 0; i < arr1.length; i++){
    for (let j = 0; j < arr2.length; j++){
      if (arr1[i] === arr2[j]){
        numberOfCommons++;
      }
    }
  }
  return numberOfCommons;
}

const arr1 = [1,2,3];
const arr2 = [3,4,5,1];

console.log(commonBetween(arr1,arr2));