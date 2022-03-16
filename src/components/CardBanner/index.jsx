import React from 'react'
import { View } from 'react-native'
import { ImageBackground, Image } from 'react-native'
import { CardArea, ContentBanner, Maintext, Subtext } from './styles';

export default function CardBanner({style}) {
    return (
        <View style={style}>
            <CardArea source={require('../../assets/img/banner-background.jpg')} resizeMode="cover">
                <ContentBanner>
                    <Subtext>Hortifruit</Subtext>
                    <Maintext>
                        As Melhores frutas{'\n'}
                        Selecionadas{'\n'}
                        para Você!
                    </Maintext>
                </ContentBanner>
            </CardArea>
        </View>
    )
}