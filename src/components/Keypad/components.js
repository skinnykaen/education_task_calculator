import styled from 'styled-components'

export const Keypad = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 80%;

    padding: 5%;

    background-color: ${props => props.theme.background};
`;

export const KeyButton = styled.button`
    width: 5.2rem;
    height: 4.59rem;
    margin: 0.4rem;

    text-align: center;
    font-size: 200%;
    border-radius: 0.8rem;
    border: 1px solid grey;
    background-color: ${props => props.theme.keyButtonColor};
    outline: none;

    &:hover {
        background-color: ${props => props.theme.keyButtonHoverColor};
    }

`;

export const Row = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 0.3rem;
`;