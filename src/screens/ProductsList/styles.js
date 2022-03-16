import styled from "styled-components/native";
import { size } from "../../global/styles";

export const MainContainer = styled.View`
    flex: 1;
    padding-left: ${size.PADDING.regular}px;
    padding-right: ${size.PADDING.regular}px;
` 

export const Title = styled.Text`
    color: #000;
    font-size: 16px;
` 

export const LineSeparetor = styled.View`
    height: ${size.PADDING.regular}px;
`

export const EmptyArea = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`
export const EmptyText = styled.Text`
    flex: 1;
`