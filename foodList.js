// Escreva uma função nomeada listarComidas que receba esses dois arrays (frutas e vegetais) e implemente as operações solicitadas abaixo.

// a) Remova o primeiro item do array de vegetais

// b) Remova o último item do array de frutas

// c) Use um método para encontrar a posição de Mamão no array de frutas

// d) Adicione o número encontrado na letra c no começo do array de frutas

// e) Use a propriedade length para encontrar o tamanho do array de frutas

// f) Adicione o número encontrado na letra e no final do array de frutas.

// g) Junte esses dois arrays em um só. Vegetais primeiro. Chame o novo array de comidas.

// h) Atribua 3 elementos do seu novo array a outro array chamado melhoresComidas começando do index 2.

// i) Verifique com um método se o elemento "Maçã" existe no array melhoresComidas. Se não existe, mostre no console a mensagem "Maçã não é uma das melhores comidas".Se existe, mostre no console: "Maçã é uma das melhores comidas".

// j) Inverta o array melhoresComidas.

// k) Retorne o array melhoresComidas na função.

const frutas = ['Maçã', 'Mamão', 'Melão', 'Banana'];
const vegetais = ['Cenoura', 'Couve', 'Brócolis', 'Alface'];

const listarComidas = (frutas, vegetais) => {
  vegetais.shift();
  frutas.pop();
  frutas.unshift(frutas.indexOf('Mamão'));
  frutas.push(frutas.length);

  const comidas = [...vegetais, ...frutas];
  const melhoresComidas = comidas.slice(2,5);

  if (melhoresComidas.indexOf('Maçã') === -1){
    console.log('Maçã não é uma das melhores comidas');
  }else{
    console.log('Maçã é uma das melhores comidas');
  }

  melhoresComidas.reverse();

  return melhoresComidas;
}

listarComidas(frutas,vegetais);