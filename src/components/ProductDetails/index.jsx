import React, { useEffect } from 'react'
import { View, Text, Modal, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { colors, size } from '../../global/styles'
import Header from '../Header'
import { AddButton, Category, Container, ContentArea, Description, Name, PriceArea, PriceTitle, PriceValue, TopArea } from './styles'

export default function ProductDetails({visible, onRequestClose, product, onAddPress}) {
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={visible}
            onRequestClose={onRequestClose}
        >
            <Container>
                {
                    visible ? <>
                        <TopArea>
                            <Header onPress={() => onRequestClose()} />

                            <Image 
                                source={{uri: product.image}}
                                style={{
                                    width: '100%',
                                    height: '70%',
                                }}    
                                resizeMode='contain'
                            />
                        </TopArea>
                        

                        <ContentArea>
                            <PriceArea>
                                <PriceTitle>Preço:</PriceTitle>
                                <PriceValue>{`R$ ${product.price.toFixed(2)}`}</PriceValue>
                            </PriceArea>
                            <Category>{product.category}</Category>
                            <Name>{product.name}</Name>
                            <Description>{product.desc}</Description>

                            <AddButton activeOpacity={0.7} onPress={() => onAddPress(product)}>
                                <Icon name='add' size={size.create(24)} color='#FFF' />
                            </AddButton>
                        </ContentArea>
                    </> : null
                }
            </Container>
        </Modal>
    )
}