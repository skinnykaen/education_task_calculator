import styled from 'styled-components'

export const History = styled.div`
    width: 30%;
    height: 100%;

    margin: 2% 0 0 0;

    border-left: 1px solid ${props => props.theme[props.currentTheme].border};
    background-color: ${props => props.theme[props.currentTheme].background};

    display: flex;
    justify-content: center;

    color: ${props => props.theme[props.currentTheme].textColor};
`;