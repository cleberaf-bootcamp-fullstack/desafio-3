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
    let id = 0;
    id = index + 1;
    let jurosParcela = capitalAcrescido * taxaJuros;
    capitalAcrescido = capitalAcrescido + jurosParcela;
    let valorParcela = capitalAcrescido;
    let valorJurosParcela = capitalAcrescido - capital;
    let valorJurosParcelaPorcentagem = (valorJurosParcela / capital) * 100;

    arrayParcelas.push({
      id: id,
      valor: valorParcela,
      valorjuros: valorJurosParcela,
      valorjurosporcentagem: valorJurosParcelaPorcentagem,
    });
  }

  return arrayParcelas;
}
export { calculaJuros, calcJuros };
