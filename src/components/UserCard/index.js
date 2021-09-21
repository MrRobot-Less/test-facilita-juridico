import React, {useState} from 'react'

import API from '../../Api'

import EditUser from '../EditUser'

import {
    Container,
    TrashIcon,
    Avatar
} from './style'

import {
    Text,
    Row
} from '../style'

const UserCard = (props) => {

    const maskPhone = (phone) => {
        phone=phone.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em phoneolta dos dois primeiros dígitos
        phone=phone.replace(/(\d)(\d{4})$/,"$1-$2");

        return phone
    }

    const deleteUser = () => {
        let id = props.user.id
        API.deleteUser(id)
    }

    return (
    <Container lastItem={props.lastItem}>
        <div style={{width: "calc(100%)"}}>
            <Row alignItems="center">
                <Text size="16px">{props.user.name}</Text>
                <div style={{display:'flex'}}>
                    <EditUser user={props.user}/>
                    <TrashIcon onClick={deleteUser}/>    
                </div>
            </Row>
            <Row alignItems="flex-start">
                <Text size="13px" color="#ffffffb0">{maskPhone(props.user.phone)}</Text>
            </Row>
        </div>    
    </Container>
    )
}

export default UserCard