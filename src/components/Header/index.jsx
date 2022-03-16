import React from 'react'
import { BackHandler } from 'react-native';
import { useNavigation, } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors } from '../../global/styles';
import { HeaderContainer } from './styles';

export default function Header({ onPress, rightButton, style }){
    const navigation = useNavigation()

    return (
        <>
            <HeaderContainer style={style} onPress={onPress ? onPress : () => {
                if(navigation.canGoBack()) {
                    navigation.goBack()
                } else {
                    BackHandler.exitApp();
                }
            }}>
                <Icon name="arrow-back" size={30} color={colors.text} />
                {rightButton && rightButton()}
            </HeaderContainer>
        </>
        
    )
}