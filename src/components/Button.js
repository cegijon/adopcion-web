import React from 'react';
import './Button.css';

const Button = ({ mensaje, estilo }) => {
    return (
        <button className={estilo}>{mensaje}</button>
    )
}

export default Button;

