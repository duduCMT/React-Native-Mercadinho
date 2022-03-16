import React, { useState, useContext, useEffect } from 'react'
import { Alert, KeyboardAvoidingView, Platform, ScrollView, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import TextField from '../../components/TextField';
import TitlePage from '../../components/TitlePage';
import { colors, size } from '../../global/styles';
import { AuthService } from '../../service/AuthService';

import { LoginContainer, Wave, Ilustration, Container, Button, ButtonArea } from './styles'
import UserContext, { ADD_LOCAL_USER, SET_USER } from '../../context/UserContext';
import { AlertUtils } from '../../utils/AlertUtils';
import Loading from '../../components/Loading';
import { UserStorageService } from '../../service/UserStorageService';

export default function Signin() {
    const [loading, setLoading] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigation()
    const { dispatch } = useContext(UserContext)

    useEffect(() => {
        readUserLocal()
        return () => {

        }
    }, [])

    const readUserLocal = async () => {
        const user = await UserStorageService.readUser()

        if (user) {
            handleSignin(user.email, user.password)
        }
    }

    const handleSignup = () => {
        navigate.navigate('Auth', { screen: 'Signup' })
    }

    const handleSignin = async (emailValue, passwordValue) => {
        if (!emailValue || !passwordValue) return

        try {
            setLoading(true)
            const user = await AuthService.signin(emailValue, passwordValue)

            if (!user) throw new Error('Usuário ou Senha inválidos')

            dispatch({
                type: SET_USER,
                payload: { ...user.data, password: passwordValue }
            })

            dispatch({
                type: ADD_LOCAL_USER,
                payload: { ...user.data, password: passwordValue }
            })

            if (user.data.isAdmin) {
                navigate.reset({
                    index: 0,
                    routes: [{ name: 'Dash' }],
                });
                // navigate.navigate('Dash', { screen: 'ProductList' })
            } else {
                navigate.reset({
                    index: 0,
                    routes: [{ name: 'Client' }],
                });
                //navigate.navigate('Client', { screen: 'ProductList' })
            }
        } catch (error) {
            AlertUtils.showError(error)

        } finally {
            setLoading(false)
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <StatusBar
                backgroundColor={colors.primary}
                barStyle="light-content"
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={loading ? { flex: 1 } : {}}
            >
                <LoginContainer>
                    <Wave />
                    <Ilustration />

                    {
                        loading ? <Loading /> :
                            <Container>
                                <TitlePage
                                    style={{ marginBottom: size.PADDING.regular }}
                                    title={["Bem Vindo ao", "Mercadinho!"]}
                                    subtitle="Faça compras direto do seu Smartphone!"
                                />

                                <TextField
                                    label='E-mail'
                                    autoCorrect={false}
                                    keyboardType='email-address'
                                    style={{ marginBottom: size.create(4) }}
                                    value={email}
                                    onChangeText={value => setEmail(value)}
                                />
                                <TextField
                                    label='Senha'
                                    autoCorrect={false}
                                    secureTextEntry
                                    value={password}
                                    onChangeText={value => setPassword(value)}
                                />

                                <ButtonArea>
                                    <Button
                                        title='Cadastre-se'
                                        type='secondary'
                                        onPress={handleSignup}
                                    />
                                    <Button
                                        title='Entrar'
                                        onPress={() => handleSignin(email, password)}
                                    />
                                </ButtonArea>
                            </Container>
                    }
                </LoginContainer>
            </ScrollView>
        </KeyboardAvoidingView>

    )
}