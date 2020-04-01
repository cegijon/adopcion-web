import React from 'react';

const Card = ({name, shortDesc, img, isAvailable}) => {

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
                <button>{isAvailable ? 'Ver mas' : 'No esta disponible'}</button>
            </div>
        </div >
    )
}

export default Card;

