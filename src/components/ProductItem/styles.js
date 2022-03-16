import styled from "styled-components/native";
import { colors, fonts, size } from "../../global/styles";

export const Container = styled.TouchableOpacity`
    flex: 1;
    background-color: ${colors.white};
    height: ${size.create(160)}px;
    border-radius: ${size.BORDER_RADIUS.regular}px;
    overflow: hidden;
    max-width: ${(size.SCREEN.width / 2) - size.PADDING.regular - size.PADDING.small}px;
` 

export const InfoArea = styled.View`
    margin-left: ${size.PADDING.small}px;
`
export const Category = styled.Text`
    color: ${colors.primary};
    font-size: ${size.FONT_SIZE.tiny}px;
    font-family: ${fonts.regular};
` 

export const Name = styled.Text`
    color: ${colors.text};
    font-size: ${size.FONT_SIZE.regular}px;
    font-family: ${fonts.bold};
` 

export const Price = styled.Text`
    color: ${colors.subtext};
    font-size: ${size.FONT_SIZE.small}px;
    font-family: ${fonts.regular};
` 

export const AddButton = styled.TouchableOpacity`
    background-color: ${colors.primary};
    height: ${size.create(40)}px;
    width: ${size.create(40)}px;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    right: 0;
    border-top-left-radius: ${size.BORDER_RADIUS.regular}px;
`

