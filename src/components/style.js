import styled from "styled-components";

export const Text = styled.span`
    font-size: ${props => props.size?(props.size):('12px')};
    font-weight: ${props => props.weight?(props.weight):(500)};;
    color: ${props => props.color?(props.color):('#fff')};
    margin-left: ${props => props.marginLeft?(props.marginLeft):('none')};;
`

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: ${props => props.alignItems?(props.alignItems):('center')};;
    height: fit-content;
`