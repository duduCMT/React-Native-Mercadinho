import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { colors, size } from '../../global/styles'

export default TabIcon = ({name, focused, unFocusedName}) => {
    let finalName = name;
    
    if(unFocusedName) finalName = focused ? name : unFocusedName

    return (
        <Icon 
            name={finalName}
            color={focused ? colors.primaryDark : colors.primary }
            size={size.create(24)}
        />   
    )
}