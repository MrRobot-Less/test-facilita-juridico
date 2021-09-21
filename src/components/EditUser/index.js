import React, {useState, useEffect} from 'react'
import ReactCircleModal from 'react-circle-modal'
import API from '../../Api'

import {
  Container,
  NavBar,
  UserInfo,
  EditIcon,
  SaveInfo,
  BackIcon,
  UserIcon,
  PhoneIcon,
  InputDiv
} from './style'

import { Text } from '../style'

import { useToast } from "@chakra-ui/react"

const EditUser = (props) => {
  const [username, setUsername] = useState(props.user.name || '')
  const [phone, setPhone] = useState(props.user.phone || '')

  const resetVars = () => {
    setPhone(props.user.phone)
    setUsername(props.user.name)
  }

  useEffect(() => {
    resetVars()
  }, [])

  const toast = useToast()

  const saveDataUser = (e) => {
    e.preventDefault()
    const dataUser = {
      name: username,
      phone: phone
    }
    API.updateUser(props.user.id, dataUser)
    toast({
      title: "Informações salvas com sucesso.",
      description: "Seu perfil foi atualizado com sucesso",
      status: "success",
      duration: 2000,
      isClosable: true,
    })

    
  }

  const maskPhone = (phone) => {
    phone=phone.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em phoneolta dos dois primeiros dígitos
    phone=phone.replace(/(\d)(\d{4})$/,"$1-$2");

    return phone
  }


  const handleInput = (e) => {
    let value = e.target.value
    if(e.target.id == 'username'){
      if(value.length <= 15){
        setUsername(value)
      }
      
    }else if(e.target.id == 'phone'){
      if(value.length <= 11){
        setPhone(value)
      }
    }
    
  }


  return (
      <ReactCircleModal
        backgroundColor="transparent"
        toogleComponent={onClick => (
          <EditIcon onClick={onClick}/>
        )}
        // Optional fields and their default values
        offsetX={0}
        offsetY={0}
      >
        {(onClick) => (
          <Container>
            <NavBar>
              <BackIcon onClick={onClick}/>
              <UserInfo>
                
                <Text size="20px" weight={900}>{props.user.name}</Text>
                <Text size="13px" color="#ffffff">{maskPhone(props.user.phone)}</Text>
              </UserInfo>
            </NavBar>
            <form onSubmit={(e) => {saveDataUser(e); onClick()}}>
              <InputDiv>
              
                <UserIcon/>
                <input onChange={handleInput} value={username} id="username"/>
              </InputDiv>
              <InputDiv>
              
                <PhoneIcon/>
                <input min="8" onChange={handleInput} value={phone} id="phone" type="number"/>
                
              </InputDiv>

              <SaveInfo>
                <button>
                  <Text color="#fff" size="17px" weight={300}> SALVAR INFORMAÇÕES </Text>
                </button>

              </SaveInfo>
            </form>

            
            
          </Container>
        )}
      </ReactCircleModal>
    )
}

export default EditUser