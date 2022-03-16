import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import DashProductList from '../screens/DashProductList'
import DashCreateProduct from '../screens/DashCreateProduct'
import TabIcon from './components/TabIcon'
import { size } from '../global/styles'
import DashUsersList from '../screens/DashUsersList'

const { Navigator, Screen } = createBottomTabNavigator()



export default function DashboardRoutes(){
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
                name='ProductList' 
                component={DashProductList}
                options={{
                    tabBarIcon: ({focused}) => (
                        <TabIcon 
                            focused={focused} 
                            name="store"
                        />
                    )
                }}
            />
            <Screen 
                name='CreateProduct' 
                component={DashCreateProduct} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <TabIcon 
                            focused={focused} 
                            name="add-circle" 
                            unFocusedName="add-circle-outline"
                        />
                    )
                }}
            />
            <Screen 
                name='UsersList' 
                component={DashUsersList} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <TabIcon 
                            focused={focused} 
                            name="group" 
                        />
                    )
                }}
            />
        </Navigator>
    )
}