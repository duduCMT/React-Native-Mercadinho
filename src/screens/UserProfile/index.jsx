import React, { useContext } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import Header from '../../components/Header';
import TitlePage from '../../components/TitlePage';
import styles, { Content, HeaderContainer, UserDataArea } from './styles';

import UserContext from '../../context/UserContext'
import { size } from '../../global/styles';
import UserData from '../../components/UserData';
import LogoutButton from '../../components/LogoutButton';

export default function UserProfile(){
    const { state } = useContext(UserContext)
    const user = state.user

    return (
        <View>
            <Header 
                rightButton={() => <LogoutButton />}
            />
            <Content>
                <HeaderContainer>
                    <TitlePage 
                        title={`Olá, ${user.name.split(' ')[0]}!`}
                        subtitle="Aqui estão seus Dados"
                    />
                    <Image 
                        source={{uri: user.avatar}}
                        style={{
                            height: size.create(52),
                            width: size.create(52),
                            borderRadius: size.BORDER_RADIUS.small,
                        }}
                    />
                </HeaderContainer>
                
                <UserDataArea>
                    <UserData 
                        iconName='person'
                        label='Nome'
                        value={user.name}
                        style={{marginBottom: size.PADDING.small}}
                    />

                    <UserData 
                        iconName='mail'
                        label='E-mail'
                        value={user.email}
                        style={{marginBottom: size.PADDING.small}}
                    />
                </UserDataArea>
                
            </Content>
            

            
        </View>
    )
}