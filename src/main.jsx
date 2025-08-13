// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './App';
import './index.css'; // or wherever your global styles are

ReactDOM.createRoot(document.getElementById('root')).render(
 <HashRouter>
   
      <App />
   
</HashRouter> 
);
