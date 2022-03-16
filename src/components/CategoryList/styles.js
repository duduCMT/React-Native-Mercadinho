import styled from "styled-components/native";
import { colors, fonts, size } from "../../global/styles";

export const CategoryItem = styled.TouchableOpacity`
    background-color: ${({selected}) => selected ? colors.primaryDark : colors.white};
    padding-left: ${size.create(12)}px;
    padding-right: ${size.create(12)}px;
    padding-bottom: ${size.PADDING.small}px;
    padding-top: ${size.PADDING.small}px;
    border-radius: ${size.BORDER_RADIUS.big}px;
` 

export const CategoryText = styled.Text`
    color: ${({selected}) => selected ? colors.white : colors.text};
    font-family: ${fonts.regular};
    font-size: ${size.FONT_SIZE.small}px;
` 

export const CategoryDivider = styled.View`
    width: ${size.PADDING.small}px;
` 