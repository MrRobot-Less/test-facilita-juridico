import styled from "styled-components";
import {MdEdit} from 'react-icons/md'
import {IoIosArrowDropleftCircle} from 'react-icons/io'
import {AiOutlineUser} from 'react-icons/ai'
import {BiPhone} from 'react-icons/bi'

export const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: auto auto;
    width: 50%;
    height: fit-content;
    flex-direction: column;
    margin-top: 25vh;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color: #232323;

    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    @media screen and (max-width: 500px) {
        width: 100%
    }
`

export const NavBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px !important;

    background: #a73737;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #7a2828, #a73737);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #7a2828, #a73737); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    margin-bottom: 10px;
`

export const SaveInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    border-top: 1px solid gray;
    button{
        background-color: transparent;
        width: 100%;
        outline: none;
        border: none;
        padding: 10px;
    }
`

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const EditIcon = styled(MdEdit)`
    width: 1.4rem;
    height: 1.4rem;
    padding: 5px !important;
    background-color: #4BB543;
    color: #fff;
    border-radius: 50%;
`

export const BackIcon = styled(IoIosArrowDropleftCircle)`
    width: 1.4rem;
    height: 1.4rem;
    color: white;
    position: absolute;
    left: 10px;
    top: 10px;
`

export const InputDiv = styled.div`
    transition: all 0.2s ease-in-out;
    display: flex;
    max-width: 400px;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
    margin-bottom: 10px;
    input{
        outline: none;
        border: none;
        background-color: transparent;
        width: calc(100% - 2rem);
        color: #fff;
    }

`

export const UserIcon = styled(AiOutlineUser)`
    height: 1rem;
    width: 1rem;
    color: #a73737;
  
`

export const PhoneIcon = styled(BiPhone)`
    height: 1rem;
    width: 1rem;
    color: #a73737;
`
