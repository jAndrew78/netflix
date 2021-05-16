import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    padding: 70px 0 70px 90px;
    margin: auto;
    max-width: 1000px;
    flex-direction: column;

    @media (max-width: 1000px) {
        padding: 70px 0 70px 90px;
    }
    
    @media (max-width: 850px) {
        padding: 70px 0 70px 70px;
    }

    @media (max-width: 715px) {
        padding: 70px 0 70px 30px;
    }
   
    @media (max-width: 600px) {
        padding: 70px 0 70px 80px;
    }

`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));  // or try 210
    grid-gap: 15px;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
    }

    @media (max-width: 850px) {
        grid-template-columns: repeat(auto-fill, minmax(145px, 1fr));
    }

    @media (max-width: 715px) {
        grid-template-columns: repeat(auto-fill, minmax(125px, 1fr));
    }

    @media (max-width: 600px) {
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`;

export const Link = styled.a`
    color: #757575;
    margin-bottom: 20px;
    font-size: 13px;
    text-decoration: none;
`;

export const Title = styled.p`
    font-size: 16px;
    color: #757575;
    margin-bottom: 15px;
`;

export const Text = styled.p`
    font-size: 13px;
    color: #757575;
    margin-top: 0;
    margin-bottom: 20px;
`;

export const Break = styled.p`
    flex-basis: 100%;
    height: 0;
`;
