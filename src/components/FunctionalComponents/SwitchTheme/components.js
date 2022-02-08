import styled from 'styled-components';

export const Title = styled.h3`
  margin-top: 1%;
  font-weight: normal;
  font-size: 1.2rem;
`;

export const DropDownContainer = styled.div`
  width: 20%;
  min-height: 10%; 
  border: 2px solid ${props => props.theme.headingColor};
  border-radius: 10px;
  position: relative;
  margin-top: 1rem;
  padding: 0.1rem 0;
`;

export const DropDownHeader = styled.div`
  display: flex;
  align-items: flex-end;

  margin-left: 0.1rem;
  padding: 0.3rem 0 0 0.3rem;

  cursor: pointer;
  width: 9.5rem; 
  height: 2.5rem;

  font-size: 1.3rem;
  font-weith: 100%;
  color: ${props => props.theme.textColor};

  background: ${props => props.theme.background};

  &:after {
    content: "▼";
    position: absolute;
    left: 85%;
  }
`;

export const DropDownListContainer = styled.div`
`;

export const DropDownList = styled.ul`
  padding: 0;
  margin-top: 0.3rem;

  background: ${props => props.theme.background};
  border: 2px solid ${props => props.theme.headingColor};

  position: absolute;
  left: -0.5%;
  width: 101.5%;

  box-sizing: border-box;
  color: ${props => props.theme.textColor};
  font-size: 1.3rem;
  font-weight: 50 %;
    &:first-child {
    padding-top: 0.3em;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.25em;
  cursor: pointer;

  display: flex;
  align-items: center;

  height: 2rem;
  width: 100%;
  padding: 0.3rem;

    &:hover {
    background-color: ${props => props.theme.headingColor};
    color: ${props => props.theme.headingTextColor};
    border-bottom: 2px solid ${props => props.theme.headingActiveTextColor};
  }
`;