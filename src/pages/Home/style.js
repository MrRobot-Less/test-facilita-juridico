import styled from "styled-components";
import {AiOutlineSearch} from 'react-icons/ai'
import {IoAddCircleSharp} from 'react-icons/io5'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    margin-top: 50px;
`

export const NavBar = styled.div`
    width: 100%;
    min-height: 50px;
    max-height: 32vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px !important;

    background: #a73737;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #7a2828, #a73737);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #7a2828, #a73737); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


    position: fixed;
    top: 0;
    
`

export const SearchDiv = styled.div`
    display: flex;
    width: 60%;
    max-width: 300px;
    height: 10px;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    padding: 10px !important;
    border-radius: 10px;
    margin-right: 1rem;
    input{
        outline: none;
        border: none;
        background-color: transparent;
        width: calc(100% - 1.2rem);
    }
`

export const ListUsers = styled.div`
    width: 100%;
    height: fit-content;
    padding: 10px;
`

// icons

export const SearchIcon = styled(AiOutlineSearch)`
    
    height: 1rem;
    width: 1rem;
    color: gray;
`