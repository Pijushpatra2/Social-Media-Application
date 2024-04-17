import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { navicon } from '../CommonCss/pagecss';


const Post_big_card = (
{    profile_pic,
    post_pic,
    username,
    likes,
    comments,}
) => {
  const [isLike, setIsLike]  = useState(false);
  const [showComment, setShowComment] = useState(false);
  
  return (
    <View style={styles.container}>
       <View style={styles.c1}>
          <Image source = {{uri : profile_pic}} style={styles.profilePic}/>
          <Text style={styles.username}>{username}</Text>
       </View>
       <Image source={{uri:post_pic}} style={styles.postPic} />

       <View style={styles.s2}>
              {
                isLike ? null:(             
                  <View style={styles.s21}>
                    <AntDesign name="hearto" size={24} color="black" style={styles.iconNotLiked} onPress={() => {
                      setIsLike(true)
                    }}/>
                    <Text style={styles.notLikedNum}>{likes.length}</Text>
                  </View>
                )
              }

              {
                isLike && (
                  <View style={styles.s21}>
                    <AntDesign name="heart" size={24} color="#fff" style={styles.iconLiked} onPress={() => {
                      setIsLike(false)
                    }}/>
                    <Text style={styles.likedNum}>{likes.length + 1}</Text>
                  </View>
                )
              }

              <View style={styles.s22}>
                <Octicons name="comment" size={24} color="grey" 
                  style={styles.commentIcon} onPress={
                    () => {
                        setShowComment(!showComment)
                    }
                  }
                />
              </View>
       </View>

       {
        showComment == true && 
          <View style={styles.s3}>
              {
                  comments.map((item, index) =>{
                    return(
                      <View style = {styles.s31} key = {item.id}>
                        <Text style = {styles.commentUserN}>{item.username}</Text>
                        <Text style = {styles.commentText}>{item.comment}</Text>
                      </View>
                    )
                  })
              }
          </View>
       }

    </View>
  )
}

export default Post_big_card

const styles = StyleSheet.create({
    container:{
        
        width:"100%",
        overflow:"hidden",
        padding:25,
        // marginVertical:10,
        // height:500,
        // borderRadius:10,
        // marginHorizontal:10,
        // borderColor:"#fff",
        // borderWidth:1,
        // backgroundColor:"#fff",
    },
    c1:{
      width:"100%",
      flexDirection:"row",
      alignItems:"center",
      padding:10,
      // backgroundColor:"#fff",
    },
    profilePic:{
      width:35,
      height:35,
      borderRadius:30,
      borderColor:"red",
      borderWidth:1,
    },
    username:{
      color:"#111",
      marginLeft:10,
      fontSize:17,
      fontWeight:"400",
    },
    postPic:{
      // width:"100%",
      aspectRatio:1,
      borderRadius:25,
    },
    s2:{
      width:"100%",
      flexDirection:"row",
      padding: 10,
      alignItems:"center",
      // backgroundColor:"#fff"
    },
    s21:{
      // width:"100%",
      flexDirection:"row",
      alignItems:"center",
    },
    s22:{
      marginLeft:20,
    },
    notLikedNum:{
      color:"grey",
      marginLeft:10,
      fontSize:18,
    },
    likedNum:{
      color:"#DC143C",
      marginLeft:10,
      fontSize:18,
    },
    iconLiked:{
      color:"#DC143C",

    },
    iconNotLiked:{
      color:"grey",
    },
    s3:{
      width:"100%",
      // backgroundColor:"#fff"
    },
    s31:{
      flexDirection:"row",
      paddingLeft:10,
      marginBottom:10
    },
    commentUserN:{
      color:"#111",
      fontWeight:"400",
      fontSize:17,
      paddingLeft:10
    },
    commentText:{
      color:"grey",
      fontSize:17,
      marginLeft:5,
      paddingLeft:10
    }

})