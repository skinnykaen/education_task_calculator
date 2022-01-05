import styled from 'styled-components'

export const Header = styled.div`
    display: flex;  
    justify-content: space-between;
    align-items: flex-start;

    width: 100%;
    height: 12%;
    padding: 3%;

    color: white;

    background-color: grey;
`;

export const Title = styled.h3``;

export const NavBar = styled.div`
    display: flex;
    justify-content: space-between;

    min-width: 150px;
    height: 30px;

    a {       
        text-decoration: none;
        color: lightgrey;
        font-size: 1.17em;
        &:hover{
            color: white;
            border-bottom: 3px solid silver;
        }
    }
`;