import React from 'react';
import styled from 'styled-components';

const ButtonComponent = styled.button`
background: none;
color: #fff;
border: 1px solid #fff;
padding: 5px 10px;
border-radius: 4px;
font-size: 12px;
`;

const Button = ({ mensaje, estilo }) => {
    return (
        <ButtonComponent className={estilo}>{mensaje}</ButtonComponent>
    )
}

export default Button;

