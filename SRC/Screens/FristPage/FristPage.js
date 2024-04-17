import React from 'react';
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { containerFull } from '../../CommonCss/pagecss';
import { LinearGradient } from 'expo-linear-gradient';
const image = require("./../../../assets/main-page-img.jpeg");

const FristPage = ({ navigation }) => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={containerFull}>
        <Text style={styles.headertext}>
            Find new friends nearby
        </Text>

        <Text style={styles.desctext}>
          With milions of users all over the world,
          we gives you the ability to connect with people
          no matter where you are.
        </Text>


        <TouchableOpacity style={styles.loginbtncon}>
          <Text style={styles.loginbtn} onPress={() => navigation.navigate("Login")}>
            Log In
          </Text>
        </TouchableOpacity>

        <LinearGradient
          colors={['#25AAE1','#3f86ED']}
          style={styles.linearGradient}>
            <Text style={styles.buttonText} onPress={() => navigation.navigate("Signup_EnterEmail")}>
                Sign Up
            </Text>
        </LinearGradient>
      </View>
    </ImageBackground>
  </View>
);





const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  headertext: {
    color: 'white',
    fontSize: 42,
    lineHeight: 60,
    fontWeight: 'bold',
    marginBottom:50,
  },
  desctext:{
    color:"#fff",
    fontSize:18,
    lineHeight:30,
    paddingLeft:40,
    paddingRight:30,
    marginBottom:30,
  },
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
  loginbtncon:{
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 22,
    width: "80%",
    borderRadius: 25,
    borderColor: "#fff",
    borderWidth: 1,
    fontSize: 20,
    textAlign: "center",
    // paddingVertical: 10,
    marginVertical:10,
    backgroundColor:"#fff"
  },
  loginbtn: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: '#3f86ED',
    backgroundColor: 'transparent',
    fontWeight:"bold",
  },

});

export default FristPage;