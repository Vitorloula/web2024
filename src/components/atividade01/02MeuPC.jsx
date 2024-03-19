import React from "react";

const PlacaMae = ({nome, preco}) => {
    return (
        <div>
        <h2>Placa mãe</h2>
        <p>Nome: {nome}</p>
        <p>Preço: R$ {preco}</p>
        </div>
    );
};

const Memoria = ({nome, preco}) => {
    return (
        <div>
        <h2>Memória</h2>
        <p>Nome: {nome}</p>
        <p>Preço: R$ {preco}</p>
        </div>
    );
};

const PlacaDeVideo = ({nome, preco}) => {   
    return (
        <div>
        <h2>Placa de vídeo</h2>
        <p>Nome: {nome}</p>
        <p>Preço: R$ {preco}</p>
        </div>
    );
};

export { PlacaMae, Memoria, PlacaDeVideo};