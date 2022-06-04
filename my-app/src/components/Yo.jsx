import React from 'react';

import "../css/estilos.css"



const Yo = () =>{
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
            <li><a href='#'>Trabajos</a></li>
            <li><a href='#'>Contactos</a></li>
        </ul>
        
        
        
    </body>

        

    </>
  );

}
export default Yo;
