function verificarPeriodoDoDia(hora) {
  return hora >= 5 && hora <= 11 ? "Manhã" : 
         hora >= 12 && hora <= 17 ? "Tarde" : 
         hora >= 18 && hora <= 23 ? "Noite" : "Madrugada";
}

// Exemplo de uso:
console.log(verificarPeriodoDoDia(22)); // Saída: Noite