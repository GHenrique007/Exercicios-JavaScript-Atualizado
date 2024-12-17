function converterTemperatura(temperatura, unidade) {
  if (unidade === "C") {
    return (temperatura * 9/5) + 32; // Celsius para Fahrenheit
  } else {
    return (temperatura - 32) * 5/9; // Fahrenheit para Celsius
  }
}