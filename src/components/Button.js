import React from 'react';

const Button = ({ mensaje, estilo }) => {
    return (
        <button className={estilo}>{mensaje}</button>
    )
}

export default Button;

