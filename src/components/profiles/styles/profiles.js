import styled from 'styled-components/macro';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    max-width: 80%;
`;

export const Title = styled.h1`
    color: #fff;
    width: 100%;
    text-align: center;
    font-size: 48px;
    font-weight: 600;
`;

export const List = styled.ul`
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
`;

export const Picture = styled.img`
width: 100%;
max-width: 150px;
height: auto;
border: 3px solid black;
cursor: pointer;
`;

export const Name = styled.p`
color: #808080;
font-size: 16px;
text-overflow: ellipsis;
`;

export const Item = styled.li`
    max-height: 200px;
    max-width: 200px;
    list-style-type: none;
    text-align: center;
    margin-right: 30px;

    &:hover > ${Picture} {
        border: 3px solid white;
    }

    &:hover > ${Name} {
        font-weight: bold;
        color: #fff;
    }

    &:last-of-type {
        margin-right: 0;
    }
`;

