import { StyleSheet, View } from 'react-native'
import React from 'react'
import { MaterialIcons,Ionicons, AntDesign} from '@expo/vector-icons';
import { navicon } from '../CommonCss/pagecss';

const Bottomnavbar = () => {
  return (
    <View style={styles.mcontainer}>
    <MaterialIcons name="home" style={navicon} />
    <Ionicons name="ios-search" style={navicon} />
    <AntDesign name="heart" style={navicon} />
    <AntDesign name="user" style={navicon} />   
    </View>
  )
}

export default Bottomnavbar

const styles = StyleSheet.create({
    mcontainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly",
        backgroundColor:"transparent",
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        position:"absolute",
        bottom:0,
        width:"100%",
        zIndex: 100,
        // borderTopWidth: 1,
        paddingVertical:10,
    },
})