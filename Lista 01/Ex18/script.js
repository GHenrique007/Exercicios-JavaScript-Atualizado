// Função para calcular o salário total com bônus
function calcularSalarioComBonus() {
    // Pergunta ao usuário o valor do salário
    let salario = parseFloat(prompt("Digite o valor do salário:"));

    // Pergunta ao usuário o valor do bônus
    let bonus = parseFloat(prompt("Digite o valor do bônus:"));

    // Calcula o valor total com o bônus incluído
    let total = salario + bonus;

    // Exibe o valor total
    alert("O valor total com bônus incluído é: " + total);
}

// Chama a função para executar o cálculo
calcularSalarioComBonus();
