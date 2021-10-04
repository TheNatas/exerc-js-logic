// Faça uma função que receba uma string e uma letra. A função deve tornar maiúscula todas as letras da string igual a letra recebida como parâmetro na função. Retorne na função a string modificada. Exemplo: turnUpperCase('paralelepipedo', 'p') => 'ParalelePiPedo'

// OBS: Utilize o loop for para resolver essa questão

const thisLetterToUpperCase = (str, char) => {
  for (let i = 0; i < str.length; i++){
    if (str[i] === char){
      str = str.slice(0,i) + str[i].toUpperCase() + str.slice(i+1);
    }
  }
  return str;
}