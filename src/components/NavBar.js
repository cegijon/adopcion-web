import React from 'react';
import styled from 'styled-components';
import icono from '../img/burger2.png';

const Nav = styled.nav`
background-color: #1a75bc;
height: 80px;
padding: 20px;
color: #fff;
display: flex;
align-items: center;
justify-content: space-between;
  button {
    cursor: pointer;
    background-color: transparent;
    font-size: 16px;
    border-radius: 3px;
    color: violet;
    border: 2px solid violet;
    margin: 0 5px;
    padding: 2px;
  }
  img {
    width: 50px;
    height: auto;
  }
}`;

const NavBar = () => {
  return (
    <Nav>
      <div>#AdoptAdas</div>
      <img alt='burger button' src={icono}></img>
      <button>Boton</button>
    </Nav>
  )
}

export default NavBar;
