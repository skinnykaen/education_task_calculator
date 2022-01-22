import styled from 'styled-components'

export const Display = styled.div`
    display: flex;

    width: 100%;
    height: 20%;

    border-bottom: 1px solid ${props => props.theme[props.currentTheme].border};

    input{
        width: 100%;
        hidht: 100%;

        background-color: ${props => props.theme[props.currentTheme].background};
        
        padding: 12% 0 0 0;
        outline: none;
        border: none;

        font-size: 50px;
    }
`;