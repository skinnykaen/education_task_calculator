import styled from 'styled-components'

export const Calculator = styled.div`
    width: 100%;
    height: 90%;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    background-color: ${({ theme }) => theme.background};
`