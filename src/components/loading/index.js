import React from 'react';
import { Container } from './styles/loading';


export default function Loading({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}