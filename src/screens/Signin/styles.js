import styled from "styled-components/native"

import WaveSvg from '../../assets/svg/wave.svg'
import IlustrationSvg from '../../assets/svg/illustration.svg'

import ButtonComponent from '../../components/Button';

import { colors, fonts, size } from '../../global/styles'

export const LoginContainer = styled.View`
    flex: 1;
    margin-bottom: ${size.PADDING.regular}px;
`

export const Container = styled.View`
    padding: ${size.PADDING.regular}px;
`

export const Wave = styled(WaveSvg).attrs({
    width: size.SCREEN.width * 2,
    height: size.create(120),
})`
    transform: rotate(180deg);
    align-self: center;
    margin-bottom: ${size.create(-50)}px;
` 

export const Ilustration = styled(IlustrationSvg).attrs({
    width: size.SCREEN.width,
    height: size.create(172),
})`
    margin-bottom: ${size.PADDING.small}px;
` 

export const TextButton = styled.Text`
    color: ${colors.white};
    font-size: ${size.FONT_SIZE.regular}px;
    font-family: ${fonts.medium};
` 

export const ButtonArea = styled.View`
    flex: 1;
    justify-content: flex-end;
    flex-direction: row;
    margin-top: ${size.PADDING.regular}px;
`

export const Button = styled(ButtonComponent)`
    margin-left: ${size.PADDING.small}px;
`