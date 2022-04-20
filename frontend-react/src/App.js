import React from 'react';

import {About, Footer, Header, Projects } from './container';
import { Navbar } from './components';
import './App.scss';
const App = () => {
  return (
    <div className='app'>
        <Navbar /> 
        <Header />
        <Projects />
        <About />
        <Footer />
    </div>
  )
}

export default App;

