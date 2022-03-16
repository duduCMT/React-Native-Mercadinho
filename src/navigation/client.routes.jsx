import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import TabIcon from './components/TabIcon'
import ProductsList from '../screens/ProductsList'
import { size } from '../global/styles'
import Bag from '../screens/Bag'
import UserProfile from '../screens/UserProfile'

const { Navigator, Screen } = createBottomTabNavigator()


export default function ClientRoutes(){
    return (
        <Navigator 
            screenOptions={{
                unmountOnBlur: true,
                headerShown: false,
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    borderTopLeftRadius: size.BORDER_RADIUS.regular,
                    borderTopRightRadius: size.BORDER_RADIUS.regular,
                    elevation: 4,
                    height: size.create(56),
                }
            }}
        >
            <Screen 
                name='ProductsList' 
                component={ProductsList}
                options={{
                    tabBarIcon: ({focused}) => (
                        <TabIcon 
                            focused={focused} 
                            name="home"
                        />
                    )
                }}
            />
            <Screen 
                name='Bag' 
                component={Bag}
                options={{
                    tabBarIcon: ({focused}) => (
                        <TabIcon 
                            focused={focused} 
                            name="shopping-bag"
                        />
                    )
                }}
            />
            <Screen 
                name='UserProfile' 
                component={UserProfile}
                options={{
                    tabBarIcon: ({focused}) => (
                        <TabIcon 
                            focused={focused} 
                            name="account-circle"
                        />
                    )
                }}
            />
        </Navigator>
    )
}