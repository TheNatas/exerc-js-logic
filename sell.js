// 1. Implemente o valor da propriedade hasDesconto. Esse valor deve ser uma função que verifica se o preço do produto é maior do que 450, se for, retorna verdadeiro, senão, retorna falso.

// 2. Implemente o valor da propriedade calcularValorFinal. Esse valor deve ser uma função que calcula o valor total a pagar se houver desconto e se não houver desconto no produto. O valor do desconto é de 10% para cada produto com preço maior que 450. Use a propriedade hasDesconto para saber se há desconto. Retorne o preço final da venda (com ou sem desconto).

// 3. Mostre no console a seguinte mensagem: [Amazon] - [ventilador Arno] - [5] - [Valor Total da Venda = ???]

const venda = {
  produto: "ventilador",
  marca: "Arno",
  loja: "Amazon",
  quantidade: 5,
  preco: 500,
  hasDesconto: function(){
    return this.preco > 450 ? true : false
  },
  calcularValorFinal: function(){
    return this.hasDesconto() ? 
    this.quantidade * (this.preco - this.preco*0.1) :
    this.quantidade * this.preco;
  },
  comprovante: function(){
    console.log(`[${this.loja}] - [${this.produto} ${this.marca}] - [${this.quantidade}] - [Valor Total da Venda = ${this.calcularValorFinal()}]`);
  }
}

venda.comprovante();