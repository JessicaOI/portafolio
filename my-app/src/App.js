import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes , Route } from 'react-router-dom';
import { Component } from 'react';


import Header from './components/Header.jsx';

import Yo from './components/Yo.jsx';

function App() {
  return (
    <div className="App">
      <>
            <BrowserRouter>
            <Routes>
                <Route exact path='/'  element={<Header/>} />
                <Route exact path='/yo'  element={<Yo/>} />
                 
            </Routes>
            </BrowserRouter>
        
        </>
    </div>
  );
}

export default App;
