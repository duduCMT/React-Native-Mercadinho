import React from 'react'
import { View, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { size } from '../../global/styles';

import { AddButton, Category, Container, InfoArea, Name, Price } from './styles';

export default function ProductItem({product, style, onPress, onAddPress}){
    return (
        <Container 
            style={style} 
            activeOpacity={0.7} 
            onPress={() => onPress && onPress(product)}
        >
            <Image 
                source={{uri: product.image}} 
                resizeMode='center'
                style={{
                    height: size.create(80),
                    width: '100%',
                    marginTop: size.PADDING.small,
                    marginBottom: size.create(4),
                }}
            />

            <InfoArea>
                <Category>{product.category}</Category>
                <Name>{product.name}</Name>
                <Price>R$ {product.price.toFixed(2)}</Price>
            </InfoArea>

            <AddButton 
                activeOpacity={0.7} 
                onPress={() => onAddPress && onAddPress(product)}
            >
                <Icon name='add' size={size.create(24)} color='#FFF' />
            </AddButton>
        </Container>
    )
}