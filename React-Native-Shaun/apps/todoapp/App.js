import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from "./components/Header";

export default function App() {
  const [todos, setTodos] = useState([
    { title: 'Going for a walk', id: 1 },
    { title: 'Building an app', id: 2 },
    { title: 'Playing on Twitch', id: 3 },
  ])

  return (
    <View style={styles.container}>

      <Header />


      <FlatList style={styles.content}
        data={todos}
        renderItem={({ item }) => <View style={styles.todo}><Text>{item.title}</Text></View>}
      />


    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 40
  },
  todo: {
    marginBottom: 10
  }
})