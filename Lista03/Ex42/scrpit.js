function verificarMaioridade(idade, pais) {
  const maioridadeBrasil = 18;
  const maioridadeEUA = 21;
  const maioridadePais = pais === "Brasil" ? maioridadeBrasil : maioridadeEUA;
  return idade >= maioridadePais ? "Maior de idade" : "Menor de idade";
}