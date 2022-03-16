import styled from "styled-components/native";
import { colors, fonts, size } from "../../global/styles";

export const Container = styled.View`
    justify-content: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: ${size.PADDING.regular}px;
`

export const CardArea = styled.View`
    background-color: ${colors.primary};
    border-radius: ${size.BORDER_RADIUS.regular}px;
    height: ${size.create(52)}px;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const TotalArea = styled.View`
    margin-left: ${size.PADDING.regular}px;
`

export const TotalLabel = styled.Text`
    color: ${colors.white};
    font-family: ${fonts.regular};
    font-size: ${size.FONT_SIZE.regular}px;
`

export const TotalValue = styled.Text`
    color: ${colors.white};
    font-family: ${fonts.bold};
    font-size: ${size.FONT_SIZE.medium}px;
    line-height: ${size.FONT_SIZE.medium + 4}px;
`

export const BuyButton = styled.TouchableOpacity`
    height: 100%;
    padding: ${size.PADDING.regular}px;
    background-color: ${colors.primaryDark};
    border-radius: ${size.BORDER_RADIUS.regular}px;
`

export const BuyButtonText = styled.Text`
    color: ${colors.white};
    font-family: ${fonts.bold};
    font-size: ${size.FONT_SIZE.regular}px;
    line-height: ${size.FONT_SIZE.medium + 4}px;
` 