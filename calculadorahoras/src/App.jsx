import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [hi, setHi] = useState(0);
  const [mi, setMi] = useState(0);
  const [hf, setHf] = useState(0);
  const [mf, setMf] = useState(0);
  const [resultado, setResultado] = useState("Resultado");

  const soma = () => {
    let somaHora = Number(hi) + Number(hf);
    let somaMinuto = Number(mi) + Number(mf);
    
    while (somaMinuto > 59) {
      somaMinuto -= 60;
      somaHora++;
    }
    
    setResultado(`${somaHora}:${somaMinuto}`);
  }

  const sub = () => {
    let momentoInicial = hi * 60 + Number(mi);
    let momentoFinal = hf * 60 + Number(mf);
    let resultadoEmMinutos = Math.abs(momentoInicial - momentoFinal);
    let resultadoEmHoras = 0;

    while (resultadoEmMinutos > 59) {
      resultadoEmHoras++;
      resultadoEmMinutos -= 60;
    }

    setResultado(`${resultadoEmHoras}:${resultadoEmMinutos}`);
  }
  

  return (
    <>
      <h1>Calculadora</h1>
      <img src="src/assets/patinhas.gif" alt="Patinhas" /><br />
      <div class="zeca">
        <h3>Escolha os horários que deseja calcular!</h3>
        <input
          type="number"
          value={hi}
          onChange={(e) => setHi(e.target.value)}
          placeholder="Hora Inicial"
        />&nbsp;:&nbsp;
        <input
          type="number"
          value={mi}
          onChange={(e) => setMi(e.target.value)}
          placeholder="Minuto Inicial"
        /><br/>
        <input
          type="number"
          value={hf}
          onChange={(e) => setHf(e.target.value)}
          placeholder="Hora Final"
        />&nbsp;:&nbsp;
        <input
          type="number"
          value={mf}
          onChange={(e) => setMf(e.target.value)}
          placeholder="Minuto Final"
        /> <br/><br />
        <button onClick={soma}>Soma</button>&nbsp;
        <button onClick={sub}>Diferença</button><br /><br />
        <h3 id="r">{resultado}</h3>
      </div>
    </>
  )
}

export default App
