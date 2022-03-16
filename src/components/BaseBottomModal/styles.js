import styled from "styled-components/native";
import { colors, size } from '../../global/styles'


export const ModalContainer = styled.Pressable`
    background-color: rgba(0,0,0,0.7);
    flex: 1;
    justify-content: flex-end;
    align-items: center;
`

export const ModalArea = styled.Pressable`
    background-color: ${colors.white};
    max-height: 80%;
    width: 100%;
    border-top-left-radius: ${size.BORDER_RADIUS.regular}px;
    border-top-right-radius: ${size.BORDER_RADIUS.regular}px;
    padding-left: ${size.PADDING.regular}px;
    padding-right: ${size.PADDING.regular}px;
    padding-top: ${size.PADDING.regular}px;
    overflow: hidden;
`