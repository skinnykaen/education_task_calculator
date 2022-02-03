import styled from 'styled-components'

export const Header = styled.div`

    width: 100%;
    height: 12%;
    padding: 3%;

    color: ${props => props.theme.headingTextColor || 'white'};

    background-color: ${props => props.theme.headingColor};
`;

export const Title = styled.h3``;

export const NavBar = styled.div`
    min-width: 150px;
    height: 30px;

    a {
        text-decoration: none;
        font-size: 1.17rem;
        &:hover{
            color: ${props => props.theme.headingActiveTextColor} !important;;
            border-bottom: 3px solid ${props => props.theme.headingActiveTextColor} !important;
        }

        &:first-child{
            color: ${props => props.isSetting ? props.theme.headingTextColor : props.theme.headingActiveTextColor};
            border-bottom: ${props => props.isSetting ? 'none' : (`3px solid ${props.theme.headingActiveTextColor}`)};
        }
    
        &:last-child{
            color: ${props => props.isSetting ? props.theme.headingActiveTextColor : props.theme.headingTextColor};
            border-bottom: ${props => props.isSetting ? (`3px solid ${props.theme.headingActiveTextColor}`) : 'none'};
        }
    }
`;