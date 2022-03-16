import styled from "styled-components/native"

import WaveSvg from '../../assets/svg/wave.svg'
import TextFieldComponent from "../../components/TextField"
import { size } from "../../global/styles"

export const LoginContainer = styled.View`
    flex: 1;
`

export const Wave = styled(WaveSvg).attrs({
    width: size.SCREEN.width * 2,
    height: size.create(120),
})`
    transform: rotate(180deg);
    align-self: center;
    margin-bottom: ${size.create(-50)}px;
` 

export const Container = styled.View`
    padding: ${size.PADDING.regular}px;
`

export const TextField = styled(TextFieldComponent)`
    margin-top: ${size.PADDING.small}px;
`

export const ButtonsArea = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    margin-top: ${size.PADDING.regular}px;
`