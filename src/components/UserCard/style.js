import styled from "styled-components";
import {BsFillTrashFill} from 'react-icons/bs'

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items:center;
    height: fit-content;
    padding: 10px !important;
    border-top: 1px solid rgb(255,255,255, 0.2);
    border-bottom: ${props => props.lastItem?('1px solid rgb(255,255,255, 0.2);'):('none')};

`

export const TrashIcon = styled(BsFillTrashFill)`
    width: 1.4rem;
    height: 1.4rem;
    padding: 5px !important;
    background-color: #a73737;
    color: #fff;
    border-radius: 50%;
    margin-left: 1rem;
`

export const Avatar = styled.img`

    object-fit: cover;
    min-height: 3rem;
    min-width: 3rem;
    height: 3rem;
    width: 3rem;
    background-color: #fff;
    border-radius: 50%;
    border: 2px solid #a73737;
`

