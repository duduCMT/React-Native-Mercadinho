import React from 'react'
import { View, Text } from 'react-native'
import styles, { Content, ItemContainer, Price, RemoveButton, Title } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { colors, size } from '../../global/styles';

export default function DashProductItem({product, onPress, onRemovePress, style}){
    return (
        <ItemContainer onPress={() => onPress(product)} activeOpacity={0.7} style={style}>
            <Content>
                <Title>{product.name}</Title>
                <Price>R$ {product.price.toFixed(2)}</Price>
            </Content>
            <RemoveButton activeOpacity={0.7} onPress={() => onRemovePress(product)}>
                <Icon name='delete' size={size.create(24)} color={colors.white} />  
            </RemoveButton>
        </ItemContainer>
    )
}