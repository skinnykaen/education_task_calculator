import styled from 'styled-components'

export const Calculator = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    width: 100%;
    height: 90%;

    background-color: ${props => props.theme.background};
`;