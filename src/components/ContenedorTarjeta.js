import React from 'react';
import Card from './Card';
import './ContenedorTarjeta.css';

const ContenedorTarjeta = ({ gatos }) => {
  return (
    <div className="cardContainer">
      {
        gatos.map((gato, i) =>
          <Card
            key={i}
            name={gato.name}
            shortDesc={gato.shortDesc}
            img={gato.img}
            isAvailable={gato.isAvailable} />)
      }
    </div>
  )
}

export default ContenedorTarjeta;
