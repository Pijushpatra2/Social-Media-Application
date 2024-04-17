import { StyleSheet, Text, View, Image } from 'react-native'
import logo from '../../assets/logo.png'
import React from 'react'
import { logoStl2, navicon } from '../CommonCss/pagecss'
import { Ionicons } from '@expo/vector-icons';

const TopnavBar = () => {
  return (
    <View style={styles.mcontainer}>
        <Image
        style={logoStl2}
        source={logo}
        />
        <Ionicons name="chatbubble-ellipses" style={[navicon,{color:"#fff"}]} />
    </View>
  )
}

export default TopnavBar

const styles = StyleSheet.create({
    mcontainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        width:"100%",
        top: 0,
        zIndex:100,
        backgroundColor:"transparent",
        position:"absolute",
        paddingVertical:10,
        paddingRight:15,
    },
})