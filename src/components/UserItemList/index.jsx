import React from 'react'
import { View, Text, Image } from 'react-native'
import { size } from '../../global/styles';
import styles, { Container, Email, InfoArea, Name } from './styles';

export default function UserItemList({user}){
    return (
        <Container>
            <InfoArea>
                <Name>{user.name}</Name>
                <Email>{user.email}</Email>
            </InfoArea>
            <Image 
                source={{uri: user.avatar}}
                style={{
                    height: size.create(52),
                    width: size.create(52),
                    borderRadius: size.BORDER_RADIUS.regular,
                }}
            />
        </Container>
    )
}