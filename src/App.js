import React from 'react';
import FooterContainer from './containers/footer';
import JumbotronContainer from './containers/jumbotron';
import AccordionContainer from './containers/faqs';


export default function App() {
    return (
        <>
            <JumbotronContainer />
            <FooterContainer />
            <AccordionContainer />
        </>    
    );
}
