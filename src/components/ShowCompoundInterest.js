import React, { useState, useEffect } from 'react';
import { calcJuros } from '../compoundInterest';

const CALC_JUROS_COMPOSTO = [
  { id:0, valor: 0, valorjuros: 0, valorjurosporcentagem: 0 },
];

export default function ShowCompoundInterest() {
  const [currentCapital, setCurrentCapital] = useState(0);
  const [currentJurosMes, setCurrentJurosMes] = useState(0);
  const [currentPeriodoMes, setCurrentPeriodoMes] = useState(0);
  const [currentCalcJurosComposto, setCurrentCalcJurosComposto] = useState(
    CALC_JUROS_COMPOSTO
  );
  // const { id } = currentCalcJurosComposto;

  const handleInputCapital = (event) => {
    setCurrentCapital(Number(event.target.value));
  };
  const handleInputJurosMes = (event) => {
    setCurrentJurosMes(Number(event.target.value));
  };
  const handleInputPeriodoMes = (event) => {
    setCurrentPeriodoMes(Number(event.target.value));
  };
  console.log(currentCapital);
  useEffect(() => {
    setCurrentCalcJurosComposto(
      calcJuros(currentCapital, currentJurosMes, currentPeriodoMes)
    );
  }, [currentCapital, currentJurosMes, currentPeriodoMes]);
  console.log(currentCalcJurosComposto);
  const listaParcelas = currentCalcJurosComposto.map((calc, i) => {
    const { id, valor, valorjuros, valorjurosporcentagem } = calc;
    return (
      <div key={i}>
        <li>{id}</li>
        <li>{valor}</li>
        <li> {valorjuros}</li>
        <li>{valorjurosporcentagem}</li>
      </div>
    );
  });
  return (
    <div className="container">
      <h1>React - Juros Composto</h1>
      <label htmlFor="">
        Capital inicial:
        <input
          type="number"
          name=""
          id=""
          min="0"
          max="100000"
          defaultValue="0"
          onChange={handleInputCapital}
        />
      </label>
      <label htmlFor="">
        Taxa juros mensal:
        <input
          type="number"
          name=""
          id=""
          min="-12"
          max="12"
          defaultValue="0"
          onChange={handleInputJurosMes}
        />
      </label>
      <label htmlFor="">
        Período (meses):
        <input
          type="number"
          name=""
          id=""
          min="1"
          max="36"
          defaultValue="0"
          onChange={handleInputPeriodoMes}
        />
      </label>
      <ul>{listaParcelas}</ul>
    </div>
  );
}
