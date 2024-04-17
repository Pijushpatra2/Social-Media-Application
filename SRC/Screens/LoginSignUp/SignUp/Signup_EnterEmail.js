import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { containerFull, goback, logoStl } from '../../../CommonCss/pagecss'
import { Ionicons } from '@expo/vector-icons'; 
import logo from '../../../../assets/logo.png';
import { formHead2, formInput, formbtn,  } from '../../../CommonCss/formcss';
const Signup_EnterEmail = ({ navigation }) => {

  const [inputData, setInputData] = useState('');
  const viewEmail = (text) => {
    setInputData(text);
  };

  return (
    <View style={[containerFull,{backgroundColor:"#00172D"}]}>
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

      <Text style={formHead2}> Create new account </Text>
      <TextInput placeholder='Enter your email'
        style={formInput}
        value={inputData}
        onChangeText={viewEmail}
      />
      <Text style={formbtn}
        onPress={() => navigation.navigate("SignUp_EnterVarification", { inputData })}
      >
        Send Code
      </Text>

      <Text style={styles.haveAcc}
        onPress={() => navigation.navigate("MainPage")}
      >
        Already have an account?
      </Text>
    </View>
  )
}

export default Signup_EnterEmail

const styles = StyleSheet.create({
  haveAcc:{
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 30,
    borderColor: "#1a53ff",
    borderWidth: 1,
    fontSize: 15,
    color: "#1a53ff",
    textAlign: "center",
    paddingVertical: 10,
    marginVertical:10,
    marginTop:130,
  },
});