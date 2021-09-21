import React, {useState, useEffect} from 'react'
import ReactCircleModal from 'react-circle-modal'
import API from '../../Api'


import {
  Container,
  NavBar,
  AddIcon,
  SaveInfo,
  BackIcon,
  UserIcon,
  PhoneIcon,
  InputDiv
} from './style'

import { Text } from '../style'

import { useToast } from "@chakra-ui/react"

const AddUser = () => {
  const [username, setUsername] = useState("")
  const [phone, setPhone] = useState("")

  const toast = useToast()

  const resetVariables = () => {
    setUsername('')
    setPhone('')
  }

  useEffect(() => {
    resetVariables()
  }, [])

  const saveNewUser = (e) => {
    e.preventDefault()
    const newUser = {
      name: username,
      phone: phone
    }
    API.addUser(newUser)
    toast({
      title: "Informações salvas com sucesso.",
      description: "Novo Contanto adicionado a sua lista",
      status: "success",
      duration: 2000,
      isClosable: true,
    })
    resetVariables()
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
          <AddIcon onClick={onClick}/>
        )}
        // Optional fields and their default values
        offsetX={0}
        offsetY={0}
      >
        {(onClick) => (
          <Container>
            <NavBar>
              <BackIcon onClick={onClick}/>
              
            </NavBar>
            <form onSubmit={(e) => { saveNewUser(e); onClick() }}>

              <InputDiv>
              
                <UserIcon/>
                <input placeholder="Nome de Usuário" onChange={handleInput} value={username} id="username"/>
              </InputDiv>
              <InputDiv>
              
                <PhoneIcon/>
                <input placeholder="Número de Telefone" onChange={handleInput} value={phone} id="phone" type="number"/>
                
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

export default AddUser