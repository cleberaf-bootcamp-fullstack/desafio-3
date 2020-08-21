function calculaJuros(capital, taxaJuros, tempoAplicacao) {
  capital = 5900;
  taxaJuros = 0.8;
  tempoAplicacao = 12;
  var taxaJuros = taxaJuros / 100;
  var montante = capital * Math.pow(1 + taxaJuros, tempoAplicacao);
  // var tot = montante.toString();
  var men = montante / tempoAplicacao;

  return {
    montante,
    men,
  };
}
console.log(men);
export { calculaJuros };
