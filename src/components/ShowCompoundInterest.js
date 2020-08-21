import React, { useState } from 'react';
import {calculajuros} from '../compoundInterest';

const CALC_JUROS_COMPOSTO={montante:0, men:0}


export default function ShowCompoundInterest() {
  const [currentcapital, setCurrentCapital] = useState(0);
  const [currentJurosMes, setCurrentJurosMes] = useState(0);
  const [currentPeriodoMes, setCurrentPeriodoMes] = useState(0);
  const [currentCalcJurosComposto, setCurrentCalcJurosCompostos] = useState(CALC_JUROS_COMPOSTO);




  const handleInputCapital = (event) => {
    setCurrentCapital(Number(event.target.value));
  };
  const handleInputJurosMes = (event) => {
    setCurrentJurosMes(Number(event.target.value));
  };
  const handleInputCapital = (event) => {
    setCurrentPeriodoMes(Number(event.target.value));
  };

calculajuros();


  return (
    <div>
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
        />
      </label>
    </div>
  );
}
