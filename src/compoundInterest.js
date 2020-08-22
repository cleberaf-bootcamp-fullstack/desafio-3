function calculaJuros(capital, taxaJuros, tempoAplicacao) {
  // capital = 5900;
  // taxaJuros = 0.8;
  // tempoAplicacao = 12;
  taxaJuros = taxaJuros / 100;
  var montante = capital * Math.pow(1 + taxaJuros, tempoAplicacao);
  // var tot = montante.toString();
  var men = montante / tempoAplicacao;

  return {
    montante,
    men,
  };
}
function calcJuros(capital, taxaJuros, tempoAplicacao) {
  let arrayParcelas = [];
  taxaJuros = taxaJuros / 100;
  let capitalAcrescido = capital;

  for (let index = 0; index < tempoAplicacao; index++) {
    let jurosParcela = capitalAcrescido * taxaJuros;

    // valorJurosParcela =
    capitalAcrescido = capitalAcrescido + jurosParcela;
    let valorParcela = capitalAcrescido;
    let valorJurosParcela = capitalAcrescido - capital;
    let valorJurosParcelaPorcentagem = (valorJurosParcela / capital) * 100;

    arrayParcelas.push({
      valor: valorParcela,
      valorjuros: valorJurosParcela,
      valorjurosporcentagem: valorJurosParcelaPorcentagem,
    });
  }

  return arrayParcelas;
}
export { calculaJuros, calcJuros };
