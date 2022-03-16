import styled from "styled-components/native";
import { colors, fonts, size } from "../../global/styles";

export const ItemContainer = styled.TouchableOpacity`
    width: 100%;
    height: ${size.create(52)}px;
    background-color: ${colors.white};
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    border-radius: ${size.BORDER_RADIUS.regular}px;
` 

export const InfoArea = styled.View`
    margin-left: ${size.PADDING.regular}px;
`

export const Name = styled.Text`
    color: ${colors.text};
    font-family: ${fonts.bold};
    font-size: ${size.FONT_SIZE.regular}px;
` 

export const TotalArea = styled.View`
    flex-direction: row;
`

export const TotalPrice = styled.Text`
    color: ${colors.text};
    font-family: ${fonts.regular};
    font-size: ${size.FONT_SIZE.small}px;
` 

export const Price = styled.Text`
    color: ${colors.subtext};
    font-family: ${fonts.regular};
    font-size: ${size.FONT_SIZE.small}px;
` 

export const ButtonArea = styled.View`
    flex-direction: row;
    align-items: center;
`

export const AmountArea = styled.View`
    background-color: ${colors.background};
    height: ${size.create(25)}px;
    min-width: ${size.create(42)}px;
    border-radius: 99px;
    justify-content: center;
    align-items: center;
    margin-right: ${size.PADDING.small}px;
`

export const AmountValue = styled.Text`
    color: ${colors.text};
    font-family: ${fonts.regular};
    font-size: ${size.FONT_SIZE.regular}px;    
`

export const RemoveButton = styled.TouchableOpacity`
    background-color: ${colors.primary};
    height: ${size.create(52)}px;
    width: ${size.create(52)}px;
    border-radius: ${size.BORDER_RADIUS.regular}px;
    justify-content: center;
    align-items: center;
`
