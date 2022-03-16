import React, { useState } from 'react'
import { ScrollView, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Button from '../../components/Button'
import TitlePage from '../../components/TitlePage'

import { Container, LoginContainer, Wave, TextField, ButtonsArea } from './styles'
import { size } from '../../global/styles'
import { AuthService } from '../../service/AuthService'
import { AlertUtils } from '../../utils/AlertUtils'
import Header from '../../components/Header'


export default function Signup() {
    const [ name, setName ] = useState('')
    const [ avatar, setAvatar ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ confPassword, setConfPassword ] = useState('')
    const navigate = useNavigation()

    const handleSignup = async () => {
        if(!name || !avatar || !email || !password || !confPassword){
            Alert.alert(
                'Informações Incompletas', 
                'Alguns dados não foram informados. Verifique e tente novamente.'
            )  
            return  
        }

        if(password !== confPassword){
            Alert.alert(
                'Senha Incorreta', 
                'As senhas informadas não são iguais. Verifique e tente novamente.'
            )  
            return     
        }

        try {
            await AuthService.signup({name, email, password, avatar})
            AlertUtils.showSuccess('Usuário cadastrado com sucesso!') 
            navigate.goBack()
        } catch(error){
            AlertUtils.showError(error)
        }

        
    }

    return (
        <LoginContainer>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Wave />
                <Header style={{ position: 'absolute', top: size.PADDING.regular }}/>
                <Container>
                    <TitlePage
                        title={['Cria sua conta no', 'Mercadinho!']}
                        subtitle='Crie sua conta e compre produtos selecionados de qualidade!'
                        style={{
                            marginBottom: size.create(4),
                        }}
                    />
                    <TextField
                        label='Nome Completo'
                        value={name}
                        onChangeText={(value) => setName(value)}
                        
                    />
                    <TextField
                        label='Avatar (URL)'
                        autoCorrect={false}
                        value={avatar}
                        onChangeText={(value) => setAvatar(value)}
                    />
                    <TextField
                        label='E-mail'
                        autoCorrect={false}
                        keyboardType='email-address'
                        value={email}
                        onChangeText={(value) => setEmail(value)}
                    />
                    <TextField
                        label='Senha'
                        autoCorrect={false}
                        secureTextEntry
                        value={password}
                        onChangeText={(value) => setPassword(value)}
                    />
                    <TextField
                        label='Confirmar Senha'
                        autoCorrect={false}
                        secureTextEntry
                        value={confPassword}
                        onChangeText={(value) => setConfPassword(value)}
                    />
                    <ButtonsArea>
                        <Button
                            title='Cadastrar'
                            onPress={() => handleSignup()}
                        />
                    </ButtonsArea>
                </Container>
            </ScrollView>
        </LoginContainer>
    )
}