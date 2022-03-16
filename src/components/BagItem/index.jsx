import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { AmountArea, AmountValue, ButtonArea, InfoArea, ItemContainer, Name, Price, RemoveButton, TotalArea, TotalPrice } from './styles';

export default function BagItem({item, onRemovePress, onPress, style}){
    return (
        <ItemContainer style={style} onPress={() => onPress && onPress(item)} activeOpacity={0.7} >
            <InfoArea>
                <Name>{item.product.name}</Name>
                <TotalArea>
                    <TotalPrice>Total:</TotalPrice>
                    <Price>R$ {item.product.price.toFixed(2)}</Price>
                </TotalArea>
            </InfoArea>
            <ButtonArea>
                <AmountArea>
                    <AmountValue>{item.amount}</AmountValue>
                </AmountArea>
                <RemoveButton activeOpacity={0.7} onPress={() => onRemovePress && onRemovePress(item)}>
                    <Icon name='delete' size={24} color='#FFF' />   
                </RemoveButton>
            </ButtonArea>
        </ItemContainer>
    )
}