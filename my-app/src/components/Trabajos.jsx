import React from 'react';


import "../css/estilos.css";

import nota from "../img/note.png";

import tablet from "../img/tablet.png";

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
            <li><a href='#'>Contactos</a></li>
        </ul>
        
        <div className='cuadrado_blanco3'>
        </div>
        
        <img className="tablet" src={tablet}/>

        
        
        
        
    </body>

        

    </>
  );

}
export default Trabajos;
