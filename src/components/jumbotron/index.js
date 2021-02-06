import React from 'react';
import { Inner, Container } from './styles/jumbotron';


export default function Jumbotron({ children, direction = 'row', ...restProps }) {    // get children, pass direction, then allowing any other props to be passed after
    return(
        <Inner direction={direction}>
            <p>Hello Jumbo</p>
        </Inner>
    );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
    return <Container { ...restProps }>{children}</Container>;
}
