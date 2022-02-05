import styled from 'styled-components'

export const ControlPanel = styled.div`
    margin-top: 1rem;
    padding-left: 0.3rem;
  
    cursor: pointer;
    width: 20%; 
    height: 3.9rem;
    font-size: 1.3rem;

    cursor: pointer;

    display: flex;
    align-items: center;
    color: ${props => props.theme.textColor};
    border: 2px solid ${props => props.theme.headingColor};
    border-radius: 10px;

    &:hover {
        background-color: ${props => props.theme.headingColor};
        color: ${props => props.theme.headingActiveTextColor};
    }
`;
