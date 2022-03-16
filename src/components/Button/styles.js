import styled from "styled-components/native";
import { colors, fonts, size } from '../../global/styles'

export const StyledButton = styled.TouchableOpacity`
    background-color: ${({type}) => {
        switch(type){
            case 'primary':
                return colors.primary
            case 'secondary':
                return colors.white
            case 'dark':
                return colors.primaryDark
        }
    }};
    height: ${size.create(40)}px;
    border-radius: ${size.BORDER_RADIUS.big}px;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding-left: ${size.PADDING.regular}px;
    padding-right: ${size.PADDING.regular}px;
` 

export const TextButton = styled.Text`
    color: ${({type}) => {
        switch(type){
            case 'primary':
                return colors.white
            case 'secondary':
                return colors.text
            case 'dark':
                return colors.white
        }
    }};
    font-size: ${size.FONT_SIZE.regular}px;
    font-family: ${fonts.medium};
` 