import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import { containerFull } from '../../CommonCss/pagecss';
import { formHead } from '../../CommonCss/formcss';
import Bottomnavbar from '../../Components/Bottomnavbar';
import TopnavBar from '../../Components/TopnavBar';
import FollowersRandomPost from '../../Components/FollowersRandomPost';
import Container from '../../Components/Container';

const MainPage = () => {
    return (
      <Container>
      <View style={styles.container}>
        <StatusBar/>
        <TopnavBar/>
        <Bottomnavbar/>
        <FollowersRandomPost/>
      </View>
      </Container>
    );
  };
  
  const styles = StyleSheet.create({ 
    container:{
      width:"100%",
      height:"100%",
      backgroundColor:"transparent",
      paddingVertical:50,
    },
  });

export default MainPage
