import React from 'react';

import "../css/estilos.css"

import compu from "../img/perfil.png";

import { BrowserRouter, Routes , Route } from 'react-router-dom';
import { Component } from 'react';


//import Header from './Header.jsx';

import Yo from './Yo.jsx';


const Header = () =>{
  return(
    <>

      <head>
        <title>Inicio</title>
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
    </head>

    <body>
        <input id="navbar" type='checkbox'/>
        <label for="navbar">
            <div className='menu'>
                <span className='hamburger'></span>
            </div>
        </label>
        <ul for="navbar">
            <li><a href='/'>Inicio</a></li>
            <li><a href='/yo'>Sobre Mi</a></li>
            <li><a href='/trabajos'>Trabajos</a></li>
            <li><a href='#'>Contactos</a></li>
        </ul>
        <div className='cuadrado_celeste'>
        </div>
        
        <div className='cuadrado_blanco'>
        </div>
        <img className="logo" src={compu}/>
        <h1 className='homeT'>Desarrolladora web</h1>
        
        <h2 className='homeS'>Jessica Pamela Ortiz Ixcot</h2>
          
        
    </body>

    </>
  );

}
export default Header;
