// Como coordenador de atividades no The Family Spot Resort, é seu trabalho sugerir atividades adequadas aos hóspedes com base no clima:

// temp >= 26°C: natação

// 15 <= temp < 26: tênis

// 5 <= temp < 15: golfe

// temp < 5: esqui

// Escreva uma função que receba uma temperatura e, em seguida, mostre no console a atividade apropriada para essa temperatura.

const recommendedActivity = function(temperature){
  if (temperature >= 26)
    console.log('natação');
  else if (temperature >= 15)
    console.log('tênis');
  else if (temperature >= 5)
    console.log('golfe');
  else
    console.log('esqui');
}