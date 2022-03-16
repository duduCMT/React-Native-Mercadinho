import styled from "styled-components/native";
import { colors, fonts, size } from "../../global/styles";

export const ContainerTitle = styled.View`
    padding-right: ${size.PADDING.regular}px;
    padding-left: ${size.PADDING.regular}px;
` 

export const Container = styled.View`
    flex: 1;
    padding-right: ${size.PADDING.regular}px;
    padding-left: ${size.PADDING.regular}px;
` 

export const Category = styled.Text`
    font-family: ${fonts.bold};
    color: ${colors.primaryDark};
    font-size: ${size.FONT_SIZE.medium}px;
    margin-bottom: ${size.PADDING.small}px;
`

export const Title = styled.Text`
    color: #000;
    font-size: 16px;
` 

export const EmptyListContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const EmptyListText = styled.Text`
    font-size: ${size.FONT_SIZE.regular}px;
    font-family: ${fonts.regular};
    color: ${colors.red}
`