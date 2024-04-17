import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { containerFull, goback, logoStl } from '../../../CommonCss/pagecss'
import { Ionicons } from '@expo/vector-icons'; 
import logo from '../../../../assets/logo.png';
import { formHead2, formInput, formbtn,  } from '../../../CommonCss/formcss';
const FP_EnterEmail = ({ navigation }) => {

  const [inputData, setInputData] = useState('');
  const viewEmail = (text) => {
    setInputData(text);
  };

  return (
    <View style={containerFull}>
      <TouchableOpacity onPress={() => navigation.navigate("FristPage")} style= {goback}>
        <Ionicons name="arrow-back" size={28} color="gray" />
        <Text style={{
          color:"gray",
          fontSize: 16,
          marginLeft: 10,
          fontWeight:"bold"
        }}> Go Back </Text>
      </TouchableOpacity>
      <Image source={logo} style={logoStl}/>

      <Text style={formHead2}> Enter Your Email </Text>
      <TextInput placeholder='Enter your email'
        style={formInput}
        value={inputData}
        onChangeText={viewEmail}
      />
      <Text style={formbtn}
        onPress={() => navigation.navigate("FP_EnterVarificationXCode", { inputData })}
      >
        Send Code
      </Text>

    </View>
  )
}

export default FP_EnterEmail

const styles = StyleSheet.create({ });