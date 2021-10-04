// Escreva uma função que receba um array de números e retorne o array com seus elementos em ordem crescente.

const swap = (arr, index) => {
  if (index < 1) return arr;

  let temp;

  if (arr[index] < arr[index-1]){
    temp = arr[index-1];
    arr[index-1] = arr[index];
    arr[index] = temp;
  }

  swap(arr, index-1);
  return arr;
  
}

const sortByAscending = (arr) => {
  for (let i = 1; i < arr.length; i++){
    arr = swap(arr, i);
  }
  return arr;
};

const numbers = [3,2,5,7,1,9,40,24,12,4,0.4];
console.log(sortByAscending(numbers));