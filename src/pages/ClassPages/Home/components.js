import styled from 'styled-components'

export const Card = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${props => props.theme.background};
  
  border-radius: 32px;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: ${({ theme }) => theme.boxShadows[0]};

  padding: ${({ theme }) => theme.spaces[4]}px;
`
