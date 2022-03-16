import styled from "styled-components/native";
import { colors, fonts, size } from "../../global/styles";

export const Container = styled.View`
    flex: 1;
    background-color: ${colors.background};
    justify-content: space-between;
` 

export const TopArea = styled.View`
    flex: 1;
`

export const ContentArea = styled.View`
    height: ${size.create(192)}px;
    width: 100%;
    background-color: ${colors.white};

    border-top-left-radius: ${size.BORDER_RADIUS.regular}px;
    border-top-right-radius: ${size.BORDER_RADIUS.regular}px;

    padding: ${size.PADDING.big}px;
` 

export const PriceArea = styled.View`
    position: absolute;
    top: ${size.create(-30)}px;;
    right: ${size.PADDING.big}px;

    height: ${size.create(60)}px;
    min-width: ${size.create(142)}px;

    padding-top: ${size.create(4)}px;
    padding-bottom: ${size.create(4)}px;
    padding-left: ${size.PADDING.big}px;
    padding-right: ${size.PADDING.big}px;
    justify-content: center;

    background-color: ${colors.primaryDark};
    border-radius: ${size.BORDER_RADIUS.big}px;
`

export const PriceTitle = styled.Text`
    color: ${colors.white};
    font-family: ${fonts.regular};
    font-size: ${size.FONT_SIZE.regular}px;
`

export const PriceValue = styled.Text`
    color: ${colors.white};
    font-family: ${fonts.bold};
    font-size: ${size.FONT_SIZE.big}px;
    line-height: ${size.FONT_SIZE.big + 2}px;
`

export const Category = styled.Text`
    color: ${colors.primary};
    font-family: ${fonts.regular};
    font-size: ${size.FONT_SIZE.regular}px;
`

export const Name = styled.Text`
    color: ${colors.text};
    font-family: ${fonts.bold};
    font-size: ${size.FONT_SIZE.big}px;
    margin-bottom: ${size.create(2)}px;
`

export const Description = styled.Text`
    color: ${colors.text};
    font-family: ${fonts.regular};
    font-size: ${size.FONT_SIZE.regular}px;
`

export const AddButton = styled.TouchableOpacity`
    background-color: ${colors.primary};
    height: ${size.create(52)}px;
    width: ${size.create(52)}px;
    border-radius: 99px;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: ${size.PADDING.regular}px;
    right: ${size.PADDING.big}px;
`
