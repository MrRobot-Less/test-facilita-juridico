import React, {useState,useEffect} from 'react'

import UserCard from '../../components/UserCard'

import AddUser from '../../components/AddUser'

import {
    Container,
    SearchDiv,
    SearchIcon,
    ListUsers,
    NavBar
} from './style'

import { Text } from '../../components/style'

import API from '../../Api'


const Home = () =>{
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    
    useEffect(() => {
        API.searchContact(search, setUsers)
    },[search])

    useEffect(() => {
        API.getListUsers(setUsers)
    }, [])
    return (
    <Container>
        <NavBar justifyContent="center">
            
            <SearchDiv>
                <SearchIcon />
                <input placeholder="Search by a contact" onChange={handleSearch}/>
            </SearchDiv>
            <AddUser/>
        </NavBar>
        <ListUsers>
            {users.map((user, index) => {
                return (<UserCard key={index} user={user} lastItem={index === users.length - 1}/>)
            })}
            
        </ListUsers>
        
        
    </Container>)
}

export default Home