import styled from "styled-components/native";
import { colors, fonts, size } from '../../global/styles'

export const TextInput = styled.TextInput`
    background-color: ${colors.white};
    
    width: 100%;
    min-height: ${size.create(40)}px;

    border-radius: ${size.BORDER_RADIUS.regular}px;
    border-width: 2px;
    border-color: ${props => props.focus ? colors.primary : colors.gray };

    padding-left: ${size.PADDING.regular}px;
    padding-right: ${size.PADDING.regular}px;
    padding-top: ${size.PADDING.small}px;
    padding-bottom: ${size.PADDING.small}px;

    ${({multiline}) => multiline ? 'text-align-vertical: top;' : ''}
` 

export const Label = styled.Text`
    color: ${props => props.focus ? colors.primary : colors.subtext };
    font-size: ${size.FONT_SIZE.regular}px;
    margin-bottom: ${size.create(4)}px;
    margin-left: ${size.create(2)}px;
    font-family: ${fonts.medium};
` 