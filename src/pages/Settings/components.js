import styled from 'styled-components'

export const Card = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.white};

  border-radius: 32px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  box-shadow: ${({ theme }) => theme.boxShadows[0]};

  padding: ${({ theme }) => theme.spaces[4]}px;
`
export const SettingWrapper = styled.div`
  width: 100%;
  height: 100%;

  margin: 3%;

  h1{
    font-size: 45px;
  }

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`