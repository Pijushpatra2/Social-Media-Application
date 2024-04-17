import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import logo from '../../../../assets/logo.png';
import { containerFull, hr80, logoStl } from '../../../CommonCss/pagecss';
import { formHead, formInput, formTextLinkCenter, formTextLinkRight, formbtn } from '../../../CommonCss/formcss';
import Container from '../../../Components/Container';
import { LinearGradient } from 'expo-linear-gradient';
const Login = ({ navigation }) => {
  return (
    <Container>
      <View style={containerFull}>
        <Image
          style={logoStl}
          source={logo}
        />
        <Text style={[formHead,{color:"#fff"}]}>Welcome back</Text>
        <TextInput placeholder='Enter your name' style={formInput} />
        <TextInput
          placeholder='Enter your password'
          style={[formInput, { borderColor: "black" }]}
          secureTextEntry={true}
        />
        <Text
          style={[formTextLinkRight, { color: "#00bfff" }]}
          onPress={() => navigation.navigate("FP_EnterEmail")}
        >
          Forgot Password?
        </Text>

        <LinearGradient
          colors={['#25AAE1','#3f86ED']}
          style={styles.linearGradient}>
            <Text style={styles.buttonText} onPress={() => navigation.navigate("MainPage")}>
                Login
            </Text>
        </LinearGradient>

        <View style={hr80}></View>

        <Text style={formTextLinkCenter}>
          Don't have an account?{" "}
          <Text
            style={{ color: "red" }}
            onPress={() => navigation.navigate("Signup_EnterEmail")}
          >
            Signup
          </Text>
        </Text>
      </View>
      </Container>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    width: "80%",
    borderRadius: 25,
    borderColor: "transparent",
    borderWidth: 1,
    fontSize: 20,
    color: "white",
    textAlign: "center",
    // paddingVertical: 10,
    marginVertical:10,
    marginTop:0,
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
    fontWeight:"bold",
  },
});

export default Login;
