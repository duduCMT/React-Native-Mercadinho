import React from 'react'
import { View, Text } from 'react-native'
import { InfoArea } from '../BagItem/styles';
import styles, { BuyButton, BuyButtonText, CardArea, Container, TotalLabel, TotalValue } from './styles';

export default function BagBuyButton({total = 60, onPress}) {
    return (
        <Container>
            <CardArea>
                <InfoArea>
                    <TotalLabel>Total:</TotalLabel>
                    <TotalValue>R$ {total.toFixed(2)}</TotalValue>
                </InfoArea>
                <BuyButton onPress={() => onPress && onPress(total)} activeOpacity={0.7}>
                    <BuyButtonText>Finalizar</BuyButtonText>
                </BuyButton>
            </CardArea>
        </Container>

    )
}