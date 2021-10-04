// Escreva uma função que receba um array de temperaturas medidas durante um período de 24h e retorne uma mensagem informando qual foi a maior e menor temperatura registrada no dia.

const highestAndLowest = (temperatures) => {
  let highest = temperatures[0];
  let lowest = temperatures[0];
  for (let i = 1; i < temperatures.length; i++){
    if (temperatures[i] > highest){
      highest = temperatures[i];
    }
    if (temperatures[i] < lowest){
      lowest = temperatures[i];
    }
  }
  return `A maior temperatura do dia foi ${highest} e a menor temperatura do dia foi ${lowest}`;
};

const temperatures = [26,19,22,23,20,24,25];
console.log(highestAndLowest(temperatures));