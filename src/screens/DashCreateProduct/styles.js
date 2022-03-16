import styled from "styled-components/native";
import { size } from "../../global/styles";

export const ContainerForm = styled.View`
    flex: 1;
    padding-left: ${size.PADDING.regular}px;
    padding-right: ${size.PADDING.regular}px;
    padding-bottom: ${size.PADDING.regular}px;
` 

export const ButtonArea = styled.View`
    margin-top: ${size.PADDING.small}px;
    flex-direction: row;
    justify-content: flex-end;
`