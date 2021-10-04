// Steven ainda está construindo sua calculadora de gorjeta usando
// as mesmas regras de antes: Gorjeta de 15% da conta se o valor da conta for entre
// 50 e 300, e se o valor for diferente, a gorjeta é 20%.

// Escreva uma função 'calcGorjeta' que receba qualquer valor de conta como um input
// e retorne a gorjeta correspondente, calculada baseada nas regras acima
// (você pode checar o código da primeira calculadora de gorjeta se você precisar).
// Teste a função usando o valor de conta de 100.

// Agora vamos usar arrays! Crie um Array 'contas' contendo o dado de teste abaixo.
// Crie um array 'gorjetas' contendo o valor da gorjeta para cada conta,
// calculado pela função que você criou antes.

// BONUS: Crie um array 'total' contendo os valores total, a conta + gorjeta.
// TEST DATA: 125, 555 e 44.

function calcGorjeta(value){
  return value >= 50 && value <= 300? value*0.15 : value*0.2;
};

const test = [125,555,44];

const tips = [calcGorjeta(test[0]), calcGorjeta(test[1]), calcGorjeta(test[2])]
const total = [tips[0]+test[0], tips[1]+test[1], tips[2]+test[2]];

console.log(tips);
console.log(total);

const menuRestaurant = ['Macarrone', 'Soup', 'Bread'];
const newMenu = [...menuRestaurant, 'Pizza'];

console.log(menuRestaurant);
console.log(newMenu);

const lastMenu = [...newMenu, ...menuRestaurant];

console.log(lastMenu);