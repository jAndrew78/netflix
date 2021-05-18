import React from 'react';
import { Background, Container, Frame, Logo, Button } from './styles/header';


export default function Header({ bg = true, children, ...restProps }) {
    return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Header.Logo = function HeaderLogo({ children, ...restProps }) {
    return <Logo {...restProps}>{children}</Logo>
}

Header.Button = function HeaderButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>
}

