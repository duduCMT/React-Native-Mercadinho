import styled from "styled-components/native";
import { colors, fonts, size } from "../../global/styles";

export const Container = styled.View`
    width: 100%;
    height: ${size.create(52)}px;
    border-radius: ${size.BORDER_RADIUS.regular}px;
    background-color: ${colors.white};
    flex-direction: row;
    align-items: center;
    padding-left: ${size.PADDING.regular}px;
    padding-right: ${size.PADDING.regular}px;
` 

export const InfoArea = styled.View`
    margin-left: ${size.PADDING.small}px;
` 

export const InfoLabel = styled.Text`
    font-size: ${size.FONT_SIZE.small}px;
    font-family: ${fonts.regular};
    color: ${colors.subtext};
` 

export const InfoValue = styled.Text`
    font-size: ${size.FONT_SIZE.regular}px;
    font-family: ${fonts.bold};
    color: ${colors.text};
` 