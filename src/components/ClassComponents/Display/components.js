import styled from 'styled-components'

export const Display = styled.div`
    display: flex;
    justify-content: flex-end;

    width: 100%;
    height: 20%;

    border-bottom: 1px solid ${({ theme }) => theme.border};

    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.textColor};
        
    padding: 12% 0 0 0;

    font-size: 3rem;
`
