import { useNavigation } from '@react-navigation/native'
import React, { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import UserContext, { LOGOUT } from '../../context/UserContext'
import { size } from '../../global/styles'

export default function LogoutButton() {
    const { dispatch } = useContext(UserContext)
    const navigation = useNavigation()

    const handleLogout = () => {
        dispatch({
            type: LOGOUT,
        })    
        navigation.reset({
            index: 0,
            routes: [{name: 'Auth'}],
        });
    }

    return (
        <TouchableOpacity onPress={handleLogout}>
            <Icon name="logout" size={size.create(24)} color="#000" />
        </TouchableOpacity>
    )
}