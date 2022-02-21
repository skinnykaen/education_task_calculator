import styled from 'styled-components'

export const ControlPanel = styled.div`
    margin-top: 1rem;
    padding-left: 0.3rem;
  
    width: 20%; 
    height: 3.9rem;
    font-size: 1.3rem;

    border: 2px solid ${({ theme }) => theme.headingColor};
    border-radius: 10px;

    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.textColor};
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.headingColor};
        color: ${({ theme }) => theme.headingActiveTextColor};
    }
`
