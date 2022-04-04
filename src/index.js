import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';


// First, we create a root
const root = ReactDOM.createRoot(document.querySelector('#root'));

// Initial render.
root.render(<App />);
