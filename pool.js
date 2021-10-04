// Uma empresa especializada em conservação de piscinas utiliza um produto para tratamento da água cujas especificações técnicas sugerem que seja adicionado 1,5 mL desse produto para cada 1000 L de água da piscina. Essa empresa foi contratada para cuidar de uma piscina de base retangular, de profundidade constante igual a 1,7 m, com largura e comprimento iguais a 3 m e 5 m, respectivamente. O nível da lâmina d’água dessa piscina é mantido a 50 cm da borda da piscina.

// Escreva um programa que calcule a quantidade desse produto, em mililitro, que deve ser adicionada a essa piscina de modo a atender às suas especificações técnicas.

const mLparaCada1000L = 1.5;
const volumePiscinaEmMetrosCubicos = (1.7 - 0.5) * 3 * 5;
const volumePiscinaEmLitros = volumePiscinaEmMetrosCubicos * 1000;
const quantidadeProdutoEmML = mLparaCada1000L * volumePiscinaEmLitros;