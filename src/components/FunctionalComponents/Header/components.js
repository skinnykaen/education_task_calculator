import styled from 'styled-components'

export const Header = styled.div`
    width: 100%;
    height: 12%;
    padding: 3%;

    color: ${({ theme }) => theme.headingTextColor || 'white'};

    background-color: ${({ theme }) => theme.headingColor};
`;

export const Title = styled.h3``;

export const NavBar = styled.div`
    min-width: 150px;
    height: 30px;

    a {
        text-decoration: none;
        font-size: 1.17rem;
        &:hover{
            color: ${({ theme }) => theme.headingActiveTextColor} !important;;
            border-bottom: 3px solid ${({ theme }) => theme.headingActiveTextColor} !important;
        }

        &:first-child{
            color: ${({ isSetting, theme }) => isSetting ? theme.headingTextColor : theme.headingActiveTextColor};
            border-bottom: ${({ isSetting, theme }) => isSetting ? 'none' : (`3px solid ${theme.headingActiveTextColor}`)};
        }
    
        &:last-child{
            color: ${({ isSetting, theme }) => isSetting ? theme.headingActiveTextColor : theme.headingTextColor};
            border-bottom: ${({ isSetting, theme }) => isSetting ? (`3px solid ${theme.headingActiveTextColor}`) : 'none'};
        }
    }
`;