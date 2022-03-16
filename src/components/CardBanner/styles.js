import styled from "styled-components/native";
import { colors, fonts, size } from "../../global/styles";
import { ImageBackground } from 'react-native'

export const CardArea = styled.ImageBackground`
    width: 100%;
    height: ${size.create(108)}px;
    justify-content: center;
    align-items: flex-end;
    border-radius: ${size.BORDER_RADIUS.regular}px;
    background-color: white;
    overflow: hidden;
` 

export const ContentBanner = styled.View`
    align-items: flex-end;
    padding: ${size.PADDING.regular}px;
`

export const Subtext = styled.Text`
    color: ${colors.subtext};
    font-size: ${size.FONT_SIZE.small}px;
    font-family: ${fonts.light};
` 

export const Maintext = styled.Text`
    color: ${colors.white};
    font-size: ${size.FONT_SIZE.small}px;
    font-family: ${fonts.medium};
    text-align: right;
` 