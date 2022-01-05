import styled from 'styled-components'

export const Header = styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;
    height: 10%;
    padding: 3%;

    color: white;

    border-radius: 10px;
    background-color: grey;
`;

export const Title = styled.h3``;

export const NavBar = styled.div`
    display: flex;
    justify-content: space-between;

    min-width: 150px;

    a {       
        text-decoration: none;
        color: white;
        font-size: 1.17em;
    }
`;