import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Signin from '../screens/Signin'
import Signup from '../screens/Signup'

const { Navigator, Screen } = createNativeStackNavigator()


export default function AuthRoutes(){
    return (
        <Navigator 

            screenOptions={{
                
                headerShown: false
            }}
        >
            <Screen name='Signin' component={Signin} />
            <Screen name='Signup' component={Signup} />
        </Navigator>
    )
}