import React from "react";

const Filho = (props) => {
  const calcularIMC = () => {
    const { altura, peso } = props;
    return peso / (altura * altura);
  };

  const exibirMensagem = () => {
    const imc = calcularIMC();

    if (imc < 18) {
      return <h3>Abaixo do peso</h3>;
    } else if (imc > 25) {
      return <h3>Acima do peso</h3>;
    } else {
      return <h3>Peso ideal</h3>;
    }
  };

  return (
    <div>
      <h2>
        Altura {props.altura} <br></br>
        Peso {props.peso}
        {exibirMensagem()}
      </h2>
    </div>
  );
};

export default Filho;