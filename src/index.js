import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';                 // took away default empty border on browser page

import App from './App';
import { GlobalStyles } from './global-styles';
import { firebase } from './lib/firebase.prod';


render(
    <>
        <FirebaseContext.Provider value={{ firebase }}>
            <GlobalStyles />    
            <App />
        </FirebaseContext.Provider>
    </>, 
    document.getElementById('root')
);
