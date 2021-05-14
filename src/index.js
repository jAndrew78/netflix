import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';                 // took away default empty border on browser page

import App from './App';
import { GlobalStyles } from './global-styles';


render(
    <>
        <GlobalStyles />    
        <App />
    </>, 
    document.getElementById('root')
);
