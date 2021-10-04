// Escreva um método dentro do objeto que vai retornar a string:
// 'Natanael tem 19 anos, é estudante e possui carteira de motorista';

// const larissaObjMelhorado = {
//   firstName: "Natanael",
//   lastName: "Alves",
//   birthYear: 2002,
//   job: "estudante",
//   friends: ["Marcelo", "Brina", "Jessé", "Júlio"],
//   hasCarteiraMotorista: true,
//   calcAge: function () {
//     this.age = 2021 - this.birthYear;
//     return this.age;
//   },
//   summary: function () {
//     return `${this.firstName} tem ${this.age}, é ${this.job} e ${this.hasCarteiraMotorista?'':'não'} possui carteira de motorista`;
//   }
// };

// larissaObjMelhorado.calcAge();
// console.log(larissaObjMelhorado.summary());

// --------------------------------------------------------------------------

// DESAFIO

// Vamos voltar para Mark e John comparando seus IMCs! Dessa vez, vamos utilizar objetos para implementar os cálculos! Lembre: IMC = peso/(altura * altura). (peso em kg e altura em metros).

// 1. Para cada um deles, crie um objeto com propriedades para nomeCompleto, peso e altura (Mark Miller e John Smith).
// 2. Crie um método 'calcIMC' em cada objeto para calcular o IMC (o mesmo método nos dois objetos). Guarde o valor do IMC em uma propriedade, e também retorne ele no método.
// 3. Log no console quem tem o maior IMC, junto com o nomeCompleto e o respectivo IMC.
// Exemplo: "O IMC de John (28.3) é maior que o IMC de Mark (23.9)!"

// TEST DATA: Mark pesa 78kg e tem 1.69m de altura.
// John pesa 92kg e tem 1.95m de altura.

// const mark = {
//   nomeCompleto: 'Mark Miller',
//   peso: 78,
//   altura: 1.69,
//   calcIMC: function(){
//     if (this.IMC)
//       return this.IMC
//     this.IMC = this.peso / this.altura**2;
//     return this.IMC;
//   }
// }
// const john = {
//   nomeCompleto: 'John Smith',
//   peso: 92,
//   altura: 1.95,
//   calcIMC: function(){
//     this.IMC = this.peso / this.altura**2;
//     return this.IMC;
//   }
// }

// console.log(mark.calcIMC() > john.calcIMC() ?
//   `O IMC de Mark (${mark.IMC.toFixed(2)}) é maior que o IMC de John (${john.IMC.toFixed(2)})!` :
//   `O IMC de John (${john.IMC.toFixed(2)}) é maior que o IMC de Mark (${mark.IMC.toFixed(2)})!`);

// --------------------------------------------------------------------------

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// const {
//   name: restaurantName, 
//   openingHours: opHours, 
//   categories: cat
// } = restaurant;
// console.log(restaurantName, opHours, cat);

// --------------------------------------------------------------------------

// DESAFIO

// Vamos melhorar a calculadora de gorjeta de Steven, dessa vez usando loops!
// 1. Crie um array 'contas' contendo todos os valores testes de conta;
// 2. Crie um array vazio para as gorjetas e os totais (gorjetas e totais)
// (um array para gorjetas e um array para totais)
// 3. Use a função 'calcGorjeta' que nós usamos anteriormente (não precisa repetir)
// para calcular as gorjetas e valores totais (conta + gorjeta)
// para cada valor de conta no array de contas.
// Use um loop for para fazer 10 cálculos.

// TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 e 52.

// DICA: Chame calcGorjeta no loop e use o método push
// para adicionar valores aos arrays de gorjeta e totais.

// 4. BONUS: Escreva uma função 'calcMedia' que receba um array chamado
// 'arr' como argumento.
// Essa função calcula a média de todos os números do array.
// 4.1 Chame a função com o array 'totais'.

// const prices = [22,295,176,440,37,105,10,1100,86,52];
// const tips = [];
// const totals = [];

// function calcGorjeta(value){
//   return value >= 50 && value <= 300? value*0.15 : value*0.2;
// };

// for (let i = 0; i < prices.length; i++){
//   tips.push(calcGorjeta(prices[i]));
//   totals.push(prices[i] + tips[tips.length-1]);
// }

// function calcMedia(arr){

//   let media = 0;

//   for (let i = 0; i < arr.length; i++){
//     media += arr[i];
//   }
  
//   return media/arr.length;
// }
// console.log(prices)
// console.log(tips);
// console.log(totals);
// console.log(calcMedia(totals).toFixed(2));

// --------------------------------------------------------------------------

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// ----------------------------------------------------------------------------

// const notes = [10,9,8,7];

// let media = 0;
// for (let i = 0; i < notes.length; i++){
//   media += notes[i];
// }
// console.log(media / notes.length);

// ----------------------------------------------------------------------------

// const arr = [7,2,4,5,8,9];
// let uneven = 0;

// for (let i = 0; i < arr.length; i++){
//   if (arr[i]%2 === 1){
//     uneven++;
//   }
// }
// console.log(uneven);

// ----------------------------------------------------------------------------

// const arr1 = [1,2,3];
// const arr2 = [4,5,6];
// let result = 0;
// for (let i = 0; i < arr1.length; i++){
//   result = result + (arr1[i] * arr2[i]);
// }
// console.log(result);

// ----------------------------------------------------------------------------

// const revert = (str) => {
//   let newStr = '';
//   for (let i = str.length-1; i >= 0; i--){
//     newStr += str[i];
//   }
//   return newStr;
// }
// console.log(revert('abacate'));

// ----------------------------------------------------------------------------

// const fat = (n) => {
//   let fat = 1;
//   for (let i = n; i > 0; i--){
//     fat *= i;
//   }
//   return fat;
// }
// console.log(fat(0));

// ----------------------------------------------------------------------------

// const triangle = function(n){
//   for (let i = 1; i <= n; i++){
//     console.log('*'.repeat(i));
//   }
// };
// triangle(5);

// ----------------------------------------------------------------------------

