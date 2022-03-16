import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Label, TextInput } from './styles';

export default function TextField({label, value, multiline, numberOfLines, onChangeText, style, keyboardType, secureTextEntry, autoCorrect, textInputRef, onSubmitEditing}){
    const [isFocus, setFocus] = useState(false)
    
    return (
        <View style={style}>
            <Label focus={isFocus}>{label}</Label>
            <TextInput
                value={value}
                focus={isFocus} 
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                autoCorrect={autoCorrect}
                ref={textInputRef}
                onSubmitEditing={onSubmitEditing}
                multiline={multiline}
                numberOfLines={numberOfLines}
            />
        </View>
    )
}