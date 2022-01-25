import styled from 'styled-components'

export const History = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    width: 30%;
    height: 95%;

    margin: 2% 0 0 0;

    border-left: 1px solid ${props => props.theme[props.currentTheme].border};
    background-color: ${props => props.theme[props.currentTheme].background};


    color: ${props => props.theme[props.currentTheme].textColor};

    h4{
        text-align: center;
    }
`;

export const HistoryContent = styled.div`
    margin: 0 0 0 5%;
    height: 100%;
    list-style-type: none; 
    overflow: auto; 
`;

export const HistoryElement = styled.div`
    min-wigth: 100%;
    min-hight: 100%;

    display: flex;
    align-items: center;

    padding: 5px;
    font-size: 1.2rem;
    
    &:hover {
        background-color: ${props => props.theme[props.currentTheme].headingColor};
        color: ${props => props.theme[props.currentTheme].headingActiveTextColor};
        }
`;
