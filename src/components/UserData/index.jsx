import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { colors, size } from '../../global/styles';
import styles, { Container, InfoArea, InfoLabel, InfoValue } from './styles';

export default function UserData({iconName, label, value, style}){
    return (
        <Container style={style}>
            <Icon name={iconName} size={size.create(24)} color={colors.text} />
            <InfoArea>
                <InfoLabel>{label}</InfoLabel>
                <InfoValue>{value}</InfoValue>
            </InfoArea>
        </Container>
    )
}