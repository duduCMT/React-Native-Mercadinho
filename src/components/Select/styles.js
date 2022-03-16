import styled from "styled-components/native";
import { TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { colors, fonts, size } from "../../global/styles";

export const SelectArea = styled.Pressable`
    background-color: ${colors.white};
    
    width: 100%;
    height: ${size.create(40)}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-radius: ${size.BORDER_RADIUS.regular}px;
    border-width: 2px;
    border-color: ${props => props.focus ? colors.primary : colors.gray };

    padding-left: ${size.PADDING.regular}px;
    padding-right: ${size.PADDING.regular}px;
    padding-top: ${size.PADDING.small}px;
    padding-bottom: ${size.PADDING.small}px;
` 

export const Label = styled.Text`
    color: ${props => props.focus ? colors.primary : colors.subtext };
    font-size: ${size.FONT_SIZE.regular}px;
    margin-bottom: ${size.create(4)}px;
    margin-left: ${size.create(2)}px;
    font-family: ${fonts.medium};
` 

export const ValueText = styled.Text`
    color: ${props => props.focus ? colors.primary : colors.subtext };
    font-family: ${fonts.regular};
` 

export const DownIcon = styled(Icon).attrs({
    name: 'arrow-drop-down',
    size: size.create(24), 

})`
    margin-top: ${size.create(-2)}px;
    color: ${props => props.focus ? colors.primary : colors.subtext};
`

export const ModalContainer = styled.Pressable`
    background-color: rgba(0,0,0,0.8);
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const ModalArea = styled.Pressable`
    background-color: ${colors.white};
    max-height: 53%;
    width: 80%;
    border-radius: ${size.BORDER_RADIUS.regular}px;
    overflow: hidden;
`

export const ModalTitle = styled.Text`
    font-size: ${size.FONT_SIZE.regular}px;
    font-family: ${fonts.medium};
    color: ${colors.text};
    padding-top: ${size.PADDING.regular}px;
    padding-left: ${size.PADDING.regular}px;
    margin-bottom: ${size.PADDING.small}px;
`

export const SelectItem = styled.TouchableOpacity`
    padding: ${size.PADDING.regular}px;
`

export const Separator = styled.View`
    height: 1px;
    background-color: ${colors.gray};
`

export const TextSelectItem = styled.Text`
    font-size: ${size.FONT_SIZE.regular}px;
    font-family: ${fonts.regular};
    color: ${colors.subtext};
`