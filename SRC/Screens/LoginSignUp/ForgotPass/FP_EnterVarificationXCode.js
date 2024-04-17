import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native'
import React from 'react'
import { containerFull, goback, logoStl } from '../../../CommonCss/pagecss'
import { Ionicons } from '@expo/vector-icons'; 
// import logo from '../../../../assets/logo.png';
import { formHead2, formInput, formbtn } from '../../../CommonCss/formcss';
const FP_EnterVarificationXCode = ({ navigation, route }) => {

  const { inputData } = route.params;
  const displayData = inputData
  ? `${inputData.slice(0, 4)}*****${inputData.slice(-11)}`
  : 'No input data provided';
  return (
    <View style={containerFull}>
      <TouchableOpacity onPress={() => navigation.navigate("FP_EnterEmail")} style= {goback}>
        <Ionicons name="arrow-back" size={28} color="gray" />
        <Text style={{
          color:"gray",
          fontSize: 16,
          marginLeft: 10,
          fontWeight:"bold"
        }}> Go Back </Text>
      </TouchableOpacity>

      <Text style={[formHead2, {fontSize:28}]}> Verification Code </Text>

      <Text style={[formHead2, {fontSize:15,marginTop:15, paddingHorizontal:50, marginBottom:20}]}>
        We sent confirm code this email {displayData}. Please check it.
      </Text>
      <TextInput placeholder='Enter your verification'
        style={formInput}
      />
      
      <Text style={formbtn}
        onPress={() => navigation.navigate("FP_ChoosePass")}
      >
        Confirm
      </Text>
    </View>
  )
}

export default FP_EnterVarificationXCode

const styles = StyleSheet.create({})