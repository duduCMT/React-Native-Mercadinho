import React, { useState } from 'react'
import { View, Text, Modal, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Label, SelectArea, DownIcon, ValueText, ModalContainer, ModalArea, ModalTitle, SelectItem, Separator, TextSelectItem } from './styles';
import { colors, size } from '../../global/styles';

export default function Select({label, selectionTitle, value, options, onSelectOption, style}){
    const [modalVisible, setModalVisible] = useState(false)
    const [isFocus, setFocus] = useState(false)

    const onSelectItem = (option) => {
        setModalVisible(false)
        setFocus(false)
        onSelectOption(option)
    }

    return (
        <>
            <View style={style}>
                <Label focus={isFocus}>{label}</Label>
                <SelectArea
                    focus={isFocus} 
                    onPress={() => {
                        setFocus(true)
                        setModalVisible(true)
                    }}
                >
                    <ValueText focus={isFocus}>{value}</ValueText>
                    <DownIcon focus={isFocus}/>
                </SelectArea>
            </View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setFocus(false)
                    setModalVisible(!modalVisible);
                }}
            >
                <ModalContainer onPress={() => {
                    setFocus(false)
                    setModalVisible(false)
                }}>
                    <ModalArea>
                        <ModalTitle>{selectionTitle ? selectionTitle : label}</ModalTitle>    
                        <FlatList 
                            data={options}   
                            keyExtractor={(item, index) => index}
                            ItemSeparatorComponent={() => <Separator />}
                            renderItem={({item}) => (
                                <SelectItem onPress={() => onSelectItem(item)}>
                                    <TextSelectItem>{item}</TextSelectItem>
                                </SelectItem>
                            )}
                        /> 
                    </ModalArea>
                </ModalContainer>      
            </Modal>
        </>
        
    )
}