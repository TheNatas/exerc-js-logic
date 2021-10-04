// O Triângulo de Pascal é um triângulo numérico infinito formado por números binomiais. Ele é representado por linhas e colunas iniciando a contagem a partir do zero. Os números nos lados do triângulo são sempre 1, e cada número do interior do triângulo é a soma dos dois números acima dele.

// Implemente uma função que imprime o Triângulo de Pascal, dado um número de linhas.

// Comente cada linha do seu código explicando a implementação.

const pascalTriangle = function(numberOfLines){
  let currentNumberLine = []; // Os números da linha atual devem ser guardados em uma array para que se possa acessá-los sem depender dos espaçamentos da String.
  let currentStringLine; // Pela quebra automática de linha do console.log(), a linha a ser impressa deve ser guardada até o momento de imprimí-la.
  let prevLine = []; // A linha anterior deve ser guardada para auxiliar na construção da próxima.
  let numberOfNumbersDifferentThan1InThisLine = -2; // Apenas a partir da 3° linha temos um número diferente de 1, que é quando precisaremos da linha anterior.
  let numberOnUpperLeft = undefined; // Essa variável pegará o número de cima à esquerda em relação ao número atual.
  let numberOnUpperRight = undefined; // Essa variável pegará o número de cima à direita em relação ao número atual.

  for (let i = 0; i < numberOfLines; i++){

    prevLine = [...currentNumberLine]; // Linha atual é guardada como linha anterior.

    while (currentNumberLine.length > 0){
      currentNumberLine.pop(); // Limpando a linha atual.
    }

    numberOfNumbersDifferentThan1InThisLine++; // -2 -> -1 -> 0 -> 1...etc.

    currentNumberLine[0] = 1; // O primeiro número da linha é sempre 1.
    currentStringLine = ' '.repeat(numberOfLines-i-1) + currentNumberLine[0]; // A linha inicia com um número de espaços baseado em quantas linhas faltam, concatenando depois o número 1 da borda esquerda.
    currentStringLine += ' '; // Os números devem ter um espaço entre si.
    
    for (let j = 0; j < numberOfNumbersDifferentThan1InThisLine; j++){ // Iniciará apenas a partir da 3° linha, preenchendo a linha com os números internos (!== 1).
      numberOnUpperLeft = parseInt(prevLine[currentNumberLine.length-1], 36); // O número à diagonal superior esquerda estará acima do último número guardado em currentNumberLine.
      numberOnUpperRight = parseInt(prevLine[currentNumberLine.length], 36); // Pela escolha da base 36, os números >= 10 devem ser convertidos para number novamente (mais sobre essa escolha abaixo).

      currentNumberLine.push((numberOnUpperLeft + numberOnUpperRight) >= 10 ? // Para evitar que valores acima de 10 quebrem a simetria da pirâmide, esses valores são convertidos para a base 36,
        (numberOnUpperLeft + numberOnUpperRight).toString(36).toUpperCase() : // mantendo-se assim em apenas 1 caractere por uma maior quantidade de linhas.
        numberOnUpperLeft + numberOnUpperRight); 
      
      currentStringLine += currentNumberLine[currentNumberLine.length-1] + ' '; // Os números devem ter um espaço entre si.
    }

    if (i !== 0){ // Sendo a primeira linha, não precisamos concetenar outro número 1 ao final.
      currentNumberLine.push(1);
      currentStringLine += currentNumberLine[currentNumberLine.length-1] + ' '.repeat(numberOfLines-i-1); 
    }
    
    console.log(currentStringLine);
  }

}

pascalTriangle(10);