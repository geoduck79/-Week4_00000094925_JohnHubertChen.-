import { Stack } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import userData from "./data.json";
import styles from "./App";
export default function App() {
  return(
   <>
    {/* screen name */}
    <Stack.Screen options = {{title :"User List"}} />


     <ScrollView>
      {userData.map ((users, index)=>(
       <view style= {styles.container} key={index}>
         <view style = {styles.card}>
           <Image
            source={{uri : users.photo_url}}
            style={styles.avatar}
            />
           <view>
             <Text style ={styles.boldText}>{users.name}</Text>
             <Text>{users.email}</Text>
           </view>
         </view>
       </view>
     ))}
    </ScrollView>
   </>
  );
}


