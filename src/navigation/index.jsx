import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import AuthRoutes from './auth.routes'
import DashboardRoutes from './dashboard.routes'
import ClientRoutes from './client.routes'

const { Navigator, Screen } = createNativeStackNavigator()


export default function Navigation(){
    return (
        <Navigator screenOptions={{headerShown: false,}}>
            <Screen name='Auth' component={AuthRoutes} />
            <Screen name='Dash' component={DashboardRoutes} />
            <Screen name='Client' component={ClientRoutes} />
        </Navigator>
    )
}