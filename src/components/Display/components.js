import styled from 'styled-components'

export const Display = styled.div`
    display: flex;
    justify-content: flex-end;

    width: 100%;
    height: 20%;

    border-bottom: 1px solid ${props => props.theme.border};

    background-color: ${props => props.theme.background};
    color: ${props => props.theme.textColor};
        
    padding: 12% 0 0 0;

    font-size: 3rem;
`;
