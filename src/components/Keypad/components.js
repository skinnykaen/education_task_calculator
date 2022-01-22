import styled from 'styled-components'

export const Keypad = styled.div`
    width: 100%;
    height: 80%;

    background-color: ${props => props.theme[props.currentTheme].background};
`;