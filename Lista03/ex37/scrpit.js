function calcularDesconto(valorCompra, codigoDesconto) {
  return codigoDesconto === "DESC10" ? valorCompra * 0.9 : valorCompra;
}

// Exemplo de uso:
console.log(calcularDesconto(100, "DESC10")); // Saída: 90