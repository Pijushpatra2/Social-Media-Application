import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native'
import React from 'react'
import { containerFull, goback } from '../../../CommonCss/pagecss'
import { Ionicons } from '@expo/vector-icons'; 
// import logo from '../../../../assets/logo.png';
import { formHead2, formInput, formbtn } from '../../../CommonCss/formcss';
const FP_ChoosePass = ({ navigation }) => {
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

      <Text style={[formHead2, {fontSize:28}]}> Choose a strong password </Text>

      <TextInput placeholder='Enter password'
        style={formInput}
        secureTextEntry
      />
      <TextInput placeholder='Confirm password'
      style={formInput}
      secureTextEntry
    />
      <Text style={formbtn}
        onPress={() => navigation.navigate("SignUp_AccountCreated")}
      >
        Confirm
      </Text>
    </View>
  )
}

export default FP_ChoosePass

const styles = StyleSheet.create({})