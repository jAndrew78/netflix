import React, { useState, useContext, createContext } from 'react';
import ReactDOM from './react-dom';

import { Container, Button, Overlay, Inner, Close } from './styles/player';



export default function Player ({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}
