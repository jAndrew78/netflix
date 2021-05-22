import React from 'react';
import { useContent } from '../hooks';


export default function Browse() {
    // need shows and movies
    const { series } = useContent('series');
    const { films } = useContent('films');
    
    // need slides
    

    // pass it to the browse container


    return (
        <>
            <p>Browse</p>     
        </>
    )
}
