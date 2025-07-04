import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { createRoot } from 'react-dom/client'; 
import App from './App';

const container = document.getElementById('root');
 const root = createRoot(container); 
 root.render( // render pour generer la page
    <BrowserRouter>
        <App />
    </BrowserRouter>
);