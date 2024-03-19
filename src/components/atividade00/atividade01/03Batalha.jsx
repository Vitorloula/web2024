import React from "react";

const Hero = ({nome, img}) => {
    return (
        <div>
            <h2>{nome}</h2>
            <img src={img} alt={nome} />
        </div>
    );
};

const Enemy = ({nome, img}) => {    
    return (
        <div>
            <h2>{nome}</h2>
            <img src={img} alt={nome} />
        </div>
    );
};

const Arena = () => {
    return (
        <div>
            <h1>Batalha</h1>
            <Hero nome="Gaolang" img="https://i1.sndcdn.com/artworks-000670221406-8ttkwb-t500x500.jpg" />
            <Enemy nome="Oman Tokita" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSMoXSKXczRMczuFm58vNMcpQ7iyqkYPI4jg&usqp=CAU" />
        </div>
    );
};

const World = (props) => {
    return (
        <div>
            {props.children}
        </div>
    );
};

export { Arena, World };