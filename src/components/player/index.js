import React, { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';

import { Container, Button, Overlay, Inner, Close } from './styles/player';


// have to use context with styled components to be able to pass state around
export const PlayerContext = createContext();

export default function Player ({ children, ...restProps }) {
    const [showPlayer, setShowPlayer] = useState(false);

    return (
        <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
            <Container {...restProps}>{children}</Container>
        </PlayerContext.Provider>
    ) 
}

Player.Video = function PlayerVideo({ src, ...restProps }) {
    const { showPlayer, setShowPlayer} = useContext(PlayerContext);

    return showPlayer ? ReactDOM.createPortal(
        <Overlay {...restProps}> 
            <Inner>
                <video id="netflix-player" controls>
                    <source src={src} type="video/mp4" />
                </video>
                <Close onClick={() => setShowPlayer(false)}> 
                    <img src="/images/icons/close.png" alt="Close" />
                </Close>
            </Inner>
        </Overlay>,
        document.body
    ) : null;
}

Player.Button = function PlayerButton({ ...restProps }) {
    const { showPlayer, setShowPlayer } = useContext(PlayerContext);

    return (
        <Button 
            onClick={() => setShowPlayer(showPlayer => !showPlayer)}>
            {/* use below to remove showPlayer error above, but may cause an error in rare cases */}
            {/* onClick={() => setShowPlayer(!showPlayer)}> */}
            <span>&#9654; </span>
            Play
        </Button>
    );
}
