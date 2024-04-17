import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Post_big_card from '../Cards/Post_big_card'

const FollowersRandomPost = () => {

    let data= [
        {
            id: 1,
            username: "user1_123",
            image: 'https://images.pexels.com/photos/10792162/pexels-photo-10792162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            profilepic: 'https://images.pexels.com/photos/4467064/pexels-photo-4467064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            likes :[
                "pijush_123",
                "ramesh_123"
            ],
            comments :[
                {
                    id: 1,
                    username : "pijush_123",
                    comment : "so beautyfull, so aligent"
                },
                {
                    id: 2,
                    username : "ramesh_123",
                    comment : "just looking like wow"
                }
            ]
        },
        {
            id: 2,
            username: "user2_123",
            image: 'https://images.pexels.com/photos/16593195/pexels-photo-16593195/free-photo-of-a-flock-of-seagulls-flying-over-a-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            profilepic: 'https://images.pexels.com/photos/19133316/pexels-photo-19133316/free-photo-of-a-woman-in-a-hijab-leaning-on-a-railing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            likes :[
                "pijush_123"
            ],
            comments :[
                {
                    id: 1,
                    username : "pijush_123",
                    comment : "so beautyfull, so aligent"
                },
                {
                    id: 2,
                    username : "ramesh_123",
                    comment : "just looking like wow"
                }
            ]
        },
        {
            id: 3,
            username: "user3_123",
            image: 'https://images.pexels.com/photos/19137181/pexels-photo-19137181/free-photo-of-pink-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            profilepic: 'https://images.pexels.com/photos/18981429/pexels-photo-18981429/free-photo-of-film-camera-man.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
            likes :[
                "pijush_123",
                "ramesh_123"
            ],
            comments :[
                {
                    id: 1,
                    username : "pijush_123",
                    comment : "so beautyfull, so aligent"
                },
                {
                    id: 2,
                    username : "ramesh_123",
                    comment : "just looking like wow"
                }
            ]
        },
        {
            id: 4,
            username: "user4_123",
            image: 'https://images.pexels.com/photos/18038183/pexels-photo-18038183/free-photo-of-young-woman-posing-in-a-tunnel-with-colorful-lights.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load',
            profilepic: 'https://images.pexels.com/photos/18369347/pexels-photo-18369347/free-photo-of-young-woman-with-a-branch-of-red-berries.png?auto=compress&cs=tinysrgb&w=300&lazy=load',
            likes :[
                "pijush_123",
                "ramesh_123"
            ],
            comments :[
                {
                    id: 1,
                    username : "pijush_123",
                    comment : "so beautyfull, so aligent"
                },
                {
                    id: 2,
                    username : "ramesh_123",
                    comment : "just looking like wow"
                }
            ]
        },
]


  return (
    <ScrollView style={styles.container}>
        {
            data.map((item) => {
                return(
                    <Post_big_card
                        key={item.id}
                        username={item.username}
                        profile_pic = {item.profilepic}
                        post_pic = {item.image}
                        likes = {item.likes}
                        comments = {item.comments}
                    />
                );
            })
        }
    </ScrollView>
  )
}

export default FollowersRandomPost

const styles = StyleSheet.create({
    container: {
        width:'100%',
        flexDirection:"column",

    }
})