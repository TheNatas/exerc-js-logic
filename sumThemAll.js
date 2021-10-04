// Escreva uma função que receba um número acima de 50 e retorne a soma de todos os números entre 0 e este número.

// Obs: Use um loop while para resolver essa questão.

const sumAllNumbersUntil = (n) => {
  if (n <= 50)
    return;

  let counter = 1;
  let sum = n;

  while(counter < n){
    sum+=counter;
    counter++;
  }
  return sum;
}