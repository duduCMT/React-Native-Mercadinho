import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import { colors } from './global/styles'

import Navigation from './navigation'
import AppProvider from './context'

export default function App(){
    return (
        <AppProvider>
            <NavigationContainer>
                <SafeAreaView style={styles.safeAreaView}>
                    <Navigation />
                </SafeAreaView>
            </NavigationContainer>
        </AppProvider>
    )
}

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: colors.background,
    }
})