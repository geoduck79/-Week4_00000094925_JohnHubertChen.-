import { Stack } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";
import { Card, Avatar, Title, Paragraph, Divider } from "react-native-paper";
import userData from "./data.json";
import styles from "./App";
export default function App() {
  return (
    <>
      <Stack.Screen options={{ title: "Our User List" }} />

      <ScrollView contentContainerStyle={styles.container}>
        {userData.map((user, index) => (
          <Card key={index} style={styles.card} mode="elevated">
            <Card.Content style={styles.cardContent}>
              <Avatar.Image
                size={70}
                source={{ uri: user.photo_url }}
              />

              <View style={styles.textContainer}>
                <Title>{user.name}</Title>
                <Paragraph>{user.email}</Paragraph>
              </View>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    </>
  );
}
