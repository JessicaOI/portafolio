import React from 'react';


import "../css/estilos.css";

import correo from '../img/correo.png'

import pdf from '../docs/Curriculum_Jessica.pdf';

const Contactos = () =>{
  return(
    <>
   
        <title>Contactos</title>
              
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
        
        <div className='cuadrado_blanco2'>
        </div>
        
        <img className="correo" src={correo}/>

        <h1 className='sm'>Contactos</h1>
        <h3> correo: jessicaortiz15b@gmail.com<br></br><br></br>
        cel: +502 55163314<br></br><br></br><br></br>
        <a href = {pdf} download={pdf} >Descargar CV</a>
        </h3>
        
        
        
    </body>

        

    </>
  );

}
export default Contactos;
