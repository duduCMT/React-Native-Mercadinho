import React, { memo } from 'react'
import { View, Text } from 'react-native'
import {Title, Subtitle} from './styles';

function TitlePage({title, subtitle, style}){
    return (
        <View style={style}>
            <Title>{Array.isArray(title) ? title.join('\n') : title}</Title>
            <Subtitle>{Array.isArray(subtitle) ? title.join('\n') : subtitle}</Subtitle>
        </View>
    )
}

export default memo(TitlePage)