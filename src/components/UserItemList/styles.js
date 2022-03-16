import styled from "styled-components/native";
import { colors, fonts, size } from "../../global/styles";

export const Container = styled.View`
    width: 100%;
    height: ${size.create(52)}px;

    background-color: #FFF;
    border-radius: ${size.BORDER_RADIUS.regular}px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
` 

export const InfoArea = styled.View`
    margin-left: ${size.PADDING.regular}px;
`

export const Name = styled.Text`
    color: ${colors.text};
    font-family: ${fonts.bold};
    font-size: ${size.FONT_SIZE.regular}px;
` 

export const Email = styled.Text`
    color: ${colors.text};
    font-family: ${fonts.regular};
    font-size: ${size.FONT_SIZE.small}px;
` 

