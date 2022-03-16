import React from 'react'
import { View, Text } from 'react-native'
import { StyledButton, TextButton } from './styles';

export default function Button({title, style, type='primary', onPress}){    
    return (
        <View style={style}>
            <StyledButton type={type} activeOpacity={type !== 'secondary' ? 0.7 : 0.5} onPress={onPress}>
                <TextButton  type={type}>{title}</TextButton>
            </StyledButton>
        </View>
    )
}