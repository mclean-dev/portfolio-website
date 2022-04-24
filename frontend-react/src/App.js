import React from 'react';

import {About, Footer, Header, Portfolio } from './container';
import { Navbar } from './components';
import './App.scss';
const App = () => {
  return (
    <div className='app'>
        <Navbar /> 
        <Header />
        <Portfolio />
        <About />
        <Footer />
    </div>
  )
}

export default App;

