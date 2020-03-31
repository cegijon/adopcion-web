import React from 'react';

const Card = props => {


    let disponible = props.info.disponible ? '' : 'cardDisabled'

    return (
        <div className={`card ${disponible}`}>
            <div className="card_img">
                <img src={props.info.img} />
            </div>
            <div className="card_info">
                <h3>{props.info.name}</h3>
                <p>
                    {props.info.shortDesc}
                </p>
                <button>{props.info.disponible ? 'Ver mas' : 'No disponible'}</button>
            </div>
        </div >
    )
}

export default Card;

