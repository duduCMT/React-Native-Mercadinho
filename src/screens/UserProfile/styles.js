import styled from "styled-components/native";
import { size } from "../../global/styles";

export const HeaderContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
` 

export const Content = styled.View`
    padding-left: ${size.PADDING.regular}px;
    padding-right: ${size.PADDING.regular}px;
`

export const UserDataArea = styled.View`
    margin-top: ${size.PADDING.regular}px;
`


export const Title = styled.Text`
    color: #000;
    font-size: 16px;
` 