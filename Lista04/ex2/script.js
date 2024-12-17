// Função para encontrar o maior número entre três inteiros diferentes
function encontrarMaiorNumero() {
    // Pergunta ao usuário para inserir três números inteiros diferentes
    let num1 = parseInt(prompt("Digite o primeiro número inteiro:"));
    let num2 = parseInt(prompt("Digite o segundo número inteiro:"));
    let num3 = parseInt(prompt("Digite o terceiro número inteiro:"));

    // Variável para armazenar o maior número
    let maior;

    // Usa operadores relacionais para determinar o maior número
    if (num1 > num2 && num1 > num3) {
        maior = num1;
    } else if (num2 > num1 && num2 > num3) {
        maior = num2;
    } else {
        maior = num3;
    }

    // Exibe o maior número
    alert("O maior número é: " + maior);
}

// Chama a função para executar a comparação
encontrarMaiorNumero();
