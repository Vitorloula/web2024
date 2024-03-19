// App.js

import "./App.css";
import { Memoria, PlacaDeVideo, PlacaMae } from "./components/atividade00/atividade01/02MeuPC";
import Pai from "./components/atividade00/atividade01/questao01/pai01";
import { Arena, World } from "./components/atividade00/atividade01/03Batalha";

function App() {
  return (
    <div className="App">
      <div style={{ borderTop: "3px solid " }} />
      <div className="Quadro">
        <h1>Questão 1</h1>
        <Pai />
      </div>

      <div style={{ borderTop: "3px solid " }} />
      <div className="Quadro">
        <h1>Questão 2</h1>
        <PlacaMae nome="Asus Prime B450M" preco="500,00" />
        <Memoria nome="Corsair Vengeance LPX" preco="400,00" />
        <PlacaDeVideo nome="GTX 1660 Super" preco="1500,00" />
      </div>
      <div style={{ borderTop: "3px solid " }} />
      <div className="Quadro">
        <h1>Questão 3</h1>
        <World>
          <Arena />
          <Arena />
          <Arena />
        </World>
      </div>
    </div>
  );
}

export default App;
