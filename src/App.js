import './App.css';
import FunctionContextA from "./components/atividade02/questao1/FunctionContextA";
import ClassA from "./components/atividade02/questao1/ClassContext";
import GrandfatherComponent from "./components/atividade02/questao2/ComponenteAvo";

function App() {
  return (
    <div>
      <div className="App">
        <div style={{ borderTop: "3px solid " }} />
        <div className="Quadro">
          <h1>Atividade 2 - Questão 1</h1>
            <FunctionContextA />
            <ClassA />
         
        </div>
      </div>
      <div className="App">
        <div style={{ borderTop: "3px solid " }} />
        <div className="Quadro">
          <h1>Atividade 2 - Questão 2</h1>
  
            <GrandfatherComponent />

        </div>
      </div>
    </div>
  );
}

export default App;
