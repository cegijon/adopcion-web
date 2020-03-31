import React from 'react';

const Card = props => {
    return (
        <div className="card">
        <div className="card_img">
     <img src={props.info.img}/>
        </div>
        <div className="card_info">
          <h3>{props.info.name}</h3>
          <p>
            {props.info.shortDesc} 
          </p>
          <button>Ver mas</button>
        </div>
      </div>
    )
}


export default Card;