import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native'
import React from 'react'
import { containerFull, goback, logoStl, row } from '../../../CommonCss/pagecss'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import logo from '../../../../assets/logo.png';
import { formbtn } from '../../../CommonCss/formcss';
const FP_AccountReovery = ({ navigation }) => {
  return (
    <View style={containerFull}>
      <TouchableOpacity onPress={() => navigation.navigate("Login")} style= {goback}>
        <Ionicons name="arrow-back" size={28} color="gray" />
        <Text style={{
          color:"gray",
          fontSize: 16,
          marginLeft: 10,
          fontWeight:"bold"
        }}> Go Back </Text>
      </TouchableOpacity>

      <Image
      style={logoStl}
      source={logo}
      />

      <View style={row}>
      <AntDesign name="checkcircle" size={24} color="#00bfff" />
      <Text> Account Recovered Successfully</Text>
      </View>

      <Text style={formbtn}
        onPress={() => navigation.navigate("Login")}
      >
        Let's Roll
      </Text>
    </View>
  )
}

export default FP_AccountReovery

const styles = StyleSheet.create({})
