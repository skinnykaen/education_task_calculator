import styled from 'styled-components'

export const History = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    width: 30%;
    height: 95%;

    margin: 2% 0 0 0;

    border-left: 1px solid ${props => props.theme.border};
    background-color: ${props => props.theme.background};


    color: ${props => props.theme.textColor};

    h4{
        text-align: center;
    }
`;

export const HistoryContent = styled.div`
    margin: 0 0 0 5%;
    height: 100%;
    list-style-type: none; 
    overflow: auto; 
    ::-webkit-scrollbar {
        width: 10px;
    }
      
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: ${props => props.theme.headingColor};
    }
`;

export const HistoryElement = styled.li`
    cursor: pointer;
    min-wigth: 100%;
    min-hight: 100%;

    display: flex;
    align-items: center;

    padding: 5px;
    font-size: 1.2rem;
    
    &:hover {
        background-color: ${props => props.theme.headingColor};
        color: ${props => props.theme.headingActiveTextColor};
        }
`;
