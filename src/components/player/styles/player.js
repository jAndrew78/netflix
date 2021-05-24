import styled from 'styled-components/macro';

// don't have to pass anything in for container, here we're just using it to pass props
export const Container = styled.div``;

export const Button = styled.button`
    background-color: #e50914;
    border-color: #ff0a10;
    border-radius: 4px;
    width: 114px;
    height: 40px;
    text-transform: uppercase;
    font-weight: bold;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 0;
    transition: transform .4s;

    &:hover {
        transform: scale(1.05);
        background-color: #ff0a16;
    }

    span {
        margin-right: 10px;
    }
`;

export const Overlay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    margin: 0 20px;
`;

export const Inner = styled.div`
    position: relative;
    width: 100%;
    max-width: 900px;
    margin: auto;

    video {
        height: 100%;
        width: 100%;
    }
`;

export const Close = styled.button`
    position: absolute;
    right: 20px;
    top: 15px;
    width: 22px;
    height: 22px;
    opacity: 0.5;
    background-color: transparent;
    border: 0;
    cursor: pointer;

    &:hover {
        opacity: 1;
    }

    &::before, &::after {
        position: absolute;
        left: 10px;
        top: 0;
        content: ' ';
        height: 22px;
        width: 22px;
    }
    
    &::before {
        transform: rotate(45deg);
    }

    &::after {
        transform: rotate(-45deg);
    }

    img {
        filter: brightness(0) invert(1);
        width: 24px;
    }
`;
