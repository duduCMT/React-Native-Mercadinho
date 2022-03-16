import styled from "styled-components/native";
import { colors, fonts, size } from "../../global/styles";

export const Title = styled.Text`
    color: ${colors.text};
    font-size: ${size.FONT_SIZE.big}px;
    font-family: ${fonts.bold};
` 

export const Subtitle = styled.Text`
    color: ${colors.subtext};
    font-size: ${size.FONT_SIZE.regular}px;
    font-family: ${fonts.regular};
` 