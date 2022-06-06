import React from 'react';


import "../css/estilos.css";

import nota from "../img/note.png";

import tablet from "../img/tablet.png";
import memoria from "../img/memoria.png";
import css from "../img/css.png";
import laberinto from "../img/laberinto.png";
import calculadora from "../img/calculadora.png";

const Trabajos = () =>{
  return(
    <>
   
        <title>Sobre Mi</title>
              
        <body>
        <input id="navbar" type='checkbox'/>
        <label htmlFor="navbar">
            <div className='menu'>
                <span className='hamburger'></span>
            </div>
        </label>
        <ul>
            <li><a href='/'>Inicio</a></li>
            <li><a href='/yo'>Sobre Mi</a></li>
            <li><a href='/trabajos'>Trabajos</a></li>
            <li><a href='/contac'>Contactos</a></li>
        </ul>
        
        <div className='cuadrado_blanco3'>
        </div>

        <img className="tablet" src={tablet}/>

        
          <div className='contenedor'>
          
          <a href='https://juanelcaballo.club/20192/React/lab6Web/app.html' target="_blank" rel="noopener noreferrer">
            <figure>
            
                  <img src = {memoria} ></img>
                  <div className='capa'>
                    <h3 className='trabajosh3'>Juego de memoria con react y webpack</h3>
                  </div>
                  
            </figure>
            </a>
            
          <a href='https://juanelcaballo.club/20192/CSS/index.html' target="_blank" rel="noopener noreferrer">
            <figure>
                  <img src = {css} ></img>
                  <div className='capa'>
                    <h3 className='trabajosh3'>Imagen construida solo con css</h3>
                  </div>
            </figure>
            </a>
            <a href='https://juanelcaballo.club/20192/Laberinto/dist/index.html' target="_blank" rel="noopener noreferrer">
            <figure>
                  <img src = {laberinto} ></img>
                  <div className='capa'>
                    <h3 className='trabajosh3'>Juego de laberinto con react y webpack</h3>
                  </div>
            </figure>
            </a>
            <a href='https://juanelcaballo.club/20192/LAB8/dist/index.html' target="_blank" rel="noopener noreferrer">
            <figure>
                  <img src = {calculadora} ></img>
                  <div className='capa'>
                    <h3 className='trabajosh3'>Calculadora con react y webpack</h3>
                  </div>
            </figure>
            </a>
          </div>
        
        

        
        
    </body>

        

    </>
  );

}
export default Trabajos;
