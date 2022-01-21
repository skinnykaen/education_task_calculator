import styled from 'styled-components'

export const Header = styled.div`

    width: 100%;
    height: 12%;
    padding: 3%;

    color: ${props => props.theme.colors.white || 'white'};

    background-color: grey;
`;

export const Title = styled.h3``;

export const NavBar = styled.div`
    min-width: 150px;
    height: 30px;

    a {
        text-decoration: none;
        font-size: 1.17em;
        &:hover{
            color: white;
            border-bottom: 3px solid silver;
        }

        &:first-child{
            color: ${props => props.current ? 'lightgrey' : 'white'};
            border-bottom: ${props => props.current ? 'none' : '3px solid silver'};
        }
    
        &:last-child{
            color: ${props => props.current ? 'white' : 'lightgrey'};
            border-bottom: ${props => props.current ? '3px solid silver' : 'none'};
        }
    }
`;