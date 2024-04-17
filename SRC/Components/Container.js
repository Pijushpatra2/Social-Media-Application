import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
const Container = ({children}) => {
  return (
    <LinearGradient
        colors = {['#537895', '#09203F']}
        style={styles.gradient}
    >
        <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </LinearGradient>
  )
}

export default Container

const styles = StyleSheet.create({
    gradient:{
        flex:1,
    },
    container:{
        flex:1,
    }
})