import styled from "styled-components/native";
import { colors, fonts, size } from "../../global/styles";

export const ItemContainer = styled.TouchableOpacity`
    flex: 1;
    background-color: ${colors.white};
    border-radius: ${size.BORDER_RADIUS.regular}px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
` 

export const Content = styled.View`
    margin-top: ${size.PADDING.small}px;
    margin-bottom: ${size.PADDING.small}px;
    margin-left: ${size.PADDING.regular}px;
`

export const Title = styled.Text`
    color: ${colors.text};
    font-size: ${size.FONT_SIZE.regular}px;
    font-family: ${fonts.bold};
` 

export const Price = styled.Text`
    color: ${colors.subtext};
    font-size: ${size.FONT_SIZE.small}px;
    font-family: ${fonts.regular};
` 

export const RemoveButton = styled.TouchableOpacity`
    background-color: ${colors.red};
    width: ${size.create(52)}px;
    height: ${size.create(52)}px;
    border-radius: ${size.BORDER_RADIUS.regular}px;
    justify-content: center;
    align-items: center;
` 
