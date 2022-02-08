import styled from 'styled-components'

export const Flex = styled.div`
    display : flex;
    flex-direction: ${props => props.direction || 'row'};
    align-items: ${props => props.align || 'stretch'};
    justify-content: ${props => props.justify || 'stretch'};
    margin: ${({ margin }) => margin || '0'};

    width: ${({ width }) => width || 'auto'};
    height: ${({ height }) => height || 'auto'};
`;
