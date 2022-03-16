import styled from "styled-components/native";
import { colors, fonts, size } from "../../global/styles";

export const MainContainer = styled.View`
    padding-left: ${size.PADDING.regular}px;
    padding-right: ${size.PADDING.regular}px;
` 

export const Divider = styled.View`
    height: ${size.PADDING.small}px;
` 

export const EmptyBag = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const EmptyBagText = styled.Text`
    margin-top: ${size.PADDING.regular}px;
    font-family: ${fonts.regular};
    font-size: ${size.FONT_SIZE.regular}px;
    color: ${colors.subtext};
`