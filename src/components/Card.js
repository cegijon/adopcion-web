import React from 'react';
import Button from './Button';
import './Card.scss';
// import styled from 'styled-components';

// const Div = styled.div`
// background-color: ${prop => prop.gatoDisponible ? '#1a75bc' : '#cccccc'};
// margin: 20px;
// width: 500px;
// height: 200px;
// display: flex;
// overflow: hidden;
// color: #fff;
// transition: background-color 0.5s;
// `;

 /* <div gatoDisponible={isAvailable}> */

const Card = ({ name, shortDesc, img, isAvailable }) => {
    return (
        <div className={isAvailable ? 'card' : 'cardDisabled'}>
            <div className="card_img">
                <img alt='imagen de un gato' src={img} />
            </div>
            <div className="card_info">
                <h3>{name}</h3>
                <p>
                    {shortDesc}
                </p>
                <Button mensaje={isAvailable ? 'Ver mas' : 'No disponible'} estilo={"cardButton"} />
            </div>
        </div >
    )
}

export default Card;

