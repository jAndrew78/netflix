import React, { useState } from 'react';


export default function Accordion({ children, ...restProps }) {
    <Container {...restProps}>
        <Inner>{children}</Inner>
    </Container>
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
    return <Title {...restProps}>{ children }</Title>;
}

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{ children }</Frame>;
}

Accordion.Item = function AccordionItem({ children, ...restProps }) {
    return <Item {...restProps}>{ children }</Item>;
}

Accordion.Body = function AccordionBody({ children, ...restProps }) {
    return <Body {...restProps}>{ children }</Body>;
}

