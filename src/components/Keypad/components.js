import styled from 'styled-components'

export const Keypad = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 80%;

    padding: 5%;

    background-color: ${props => props.theme[props.currentTheme].background};
`;

export const KeyButton = styled.button`
    width: 6.2rem;
    height: 6.2rem;
    margin: 0.4rem;

    text-align: center;
    font-size: 200%;
    border-radius: 0.8rem;
    border: 1px solid grey;
    background-color: ${props => props.theme[props.currentTheme].keyButtonColor};
    outline: none;

    &:hover {
        background-color: ${props => props.theme[props.currentTheme].keyButtonHoverColor};
    }

`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;

`;