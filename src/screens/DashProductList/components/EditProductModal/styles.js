import styled from "styled-components/native";
import { colors, fonts, size } from "../../../../global/styles";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
` 

export const ModalTitle = styled.Text`
    color: ${colors.text};
    font-size: ${size.FONT_SIZE.medium}px;
    font-family: ${fonts.bold};
` 

export const ButtonArea = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: ${size.PADDING.regular}px;
`