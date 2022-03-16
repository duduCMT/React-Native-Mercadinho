import React from 'react'
import { View, Text, Modal, KeyboardAvoidingView, Platform } from 'react-native'
import { ModalArea, ModalContainer } from './styles';

export default function BaseBottomModal({ visible = false, onRequestClose, children }) {
    return (

        <Modal
            animationType="slide"
            statusBarTranslucent
            transparent={true}
            visible={visible}
            onRequestClose={onRequestClose}
        >
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{flex: 1}}
            >
                <ModalContainer onPress={onRequestClose}>
                    <ModalArea>
                        {children}
                    </ModalArea>
                </ModalContainer>
            </KeyboardAvoidingView>
        </Modal>

    )
}