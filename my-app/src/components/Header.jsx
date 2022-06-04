import React from 'react';

import "../css/estilos.css"

import compu from "..//img/perfil.png";

import { BrowserRouter, Routes , Route } from 'react-router-dom';
import { Component } from 'react';


//import Header from './Header.jsx';

import Yo from './Yo.jsx';


const Header = () =>{
  return(
    <div className='App'>

      
        <title>Inicio</title>
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
    

      <div className='body'>
          <input id="navbar" type='checkbox'/>
          <label htmlFor="navbar">
              <div className='menu'>
                  <span className='hamburger'></span>
              </div>
          </label>
          <ul>
              <li><a href='/'>Inicio</a></li>
              <li><a href='/yo'>Sobre Mi</a></li>
              <li><a href='#'>Trabajos</a></li>
              <li><a href='#'>Contactos</a></li>
          </ul>
          <div className='cuadrado_celeste'>
          
          </div>
          <h1>Desarrolladora web</h1>
          <div className='cuadrado_blanco'>
          
          </div>
          <img className="logo" src={compu}/>
          
          <h2>Jessica Pamela Ortiz Ixcot</h2>
          
          
      </div>
   
    </div>
  );

}
export default Header;
