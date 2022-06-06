import React from 'react';


import "../css/estilos.css";

import nota from "../img/note.png";

import foto from "../img/foto.jpg";

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
            <li><a href='/trabajos'>Trabajos</a></li>
            <li><a href='/contac'>Contactos</a></li>
        </ul>
        
        <div className='cuadrado_blanco2'>
        </div>
        
        <img className="notaS" src={nota}/>
        <img className="foto" src={foto}/>

        <h1 className='sm'>Sobre Mi</h1>
        <h3>Soy estudiante de ingeniería en ciencias de la computación y tecnología, actualmente cursando el quinto semestre.
          Dispuesta a trabajar de forma dedicada y responsable, además de aprender cualquier habilidad nueva.<br></br><br></br>

          Me considero una persona mayormente creativa, autodidacta, confiable y dedicada. Me interesa especializarme en Front-end, UX / UI, pero también tengo conocimientos del lado del servidor Back-end.
          
        </h3>
        
        
        
    </body>

        

    </>
  );

}
export default Yo;
