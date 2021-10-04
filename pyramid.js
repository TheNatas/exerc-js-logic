// Escreva uma função que recebe um inteiro positivo não nulo n < 20 e imprime um triângulo isósceles formado apenas por símbolos de asterisco (“*" ) e de espaço (“ ”) como a seguir (para n = 6):
//      *
//     ***
//    *****
//   *******
//  *********
// ***********

const piramide = function(n){
  if (n<=0 || n>=20)
    return;

  let linhas = [];
  let numberOfAsteriscos = 1;

  for (let i = 0; i<n; i++){
    linhas[i] = ' '.repeat(n-i-1) + '*'.repeat(numberOfAsteriscos) + ' '.repeat(n-i-1);
    numberOfAsteriscos+=2;
  }

  for (let j = 0; j<linhas.length; j++){
    console.log(linhas[j]);
  }
}

piramide(10);