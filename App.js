import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Login from "./SRC/Screens/LoginSignUp/Login/Login";
import SignUp_AccountCreated from "./SRC/Screens/LoginSignUp/SignUp/SignUp_AccountCreated";
import Signup_ChoosPass from "./SRC/Screens/LoginSignUp/SignUp/Signup_ChoosPass";
import Signup_EnterEmail from "./SRC/Screens/LoginSignUp/SignUp/Signup_EnterEmail";
import Signup_EnterUserName from "./SRC/Screens/LoginSignUp/SignUp/Signup_EnterUserName";
import SignUp_EnterVarification from "./SRC/Screens/LoginSignUp/SignUp/SignUp_EnterVarification";
import FP_AccountReovery from "./SRC//Screens/LoginSignUp/ForgotPass/FP_AccountReovery";
import FP_ChoosePass from "./SRC/Screens/LoginSignUp/ForgotPass/FP_ChoosePass";
import FP_EnterEmail from "./SRC/Screens/LoginSignUp/ForgotPass/FP_EnterEmail";
import FP_EnterVarificationXCode from "./SRC/Screens/LoginSignUp/ForgotPass/FP_EnterVarificationXCode";
import MainPage from './SRC/Screens/MainPage/MainPage';
import FristPage from './SRC/Screens/FristPage/FristPage'

export default function App() {
 
  const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        animation: "slide_from_right"
      }}>

      {/*Screen-Components*/}
        <Stack.Screen name="FristPage" component={FristPage}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name = "Signup_EnterEmail" component={Signup_EnterEmail}/>
        <Stack.Screen name = "SignUp_EnterVarification" component={SignUp_EnterVarification}/>
        <Stack.Screen name = "Signup_ChoosPass" component={Signup_ChoosPass}/>
        <Stack.Screen name = "Signup_EnterUserName" component={Signup_EnterUserName}/>
        <Stack.Screen name = "SignUp_AccountCreated" component={SignUp_AccountCreated}/>

      {/*ForgotPsaaword-Compomemts*/}
        <Stack.Screen name = "FP_AccountReovery" component={FP_AccountReovery}/>
        <Stack.Screen name = "FP_ChoosePass" component={FP_ChoosePass}/>
        <Stack.Screen name = "FP_EnterEmail" component={FP_EnterEmail}/>
        <Stack.Screen name = "FP_EnterVarificationXCode" component={FP_EnterVarificationXCode}/>
        <Stack.Screen name = "MainPage" component={MainPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
