import logo from './logo.svg';

import { BrowserRouter, Routes , Route } from 'react-router-dom';
import { Component } from 'react';

import Header from './components/Header.jsx';

import Yo from './components/Yo.jsx';

import Trabajos from './components/Trabajos.jsx';

import Contactos from './components/Contactos.jsx';

function App() {
  return (
    <div className="App">
      <>
            <BrowserRouter>
            <Routes>
                <Route exact path='/'  element={<Header/>} />
                <Route exact path='/yo'  element={<Yo/>} />
                <Route exact path='/trabajos'  element={<Trabajos/>} />
                <Route exact path='/contac'  element={<Contactos/>} />
                 
            </Routes>
            </BrowserRouter>
        
        </>
    </div>
  );
}

export default App;
