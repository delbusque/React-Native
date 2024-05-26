import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([
    { title: 'Going for a walk', id: 1 },
    { title: 'Building an app', id: 2 },
    { title: 'Playing on Twitch', id: 3 },
  ])

  const pressHandler = (id) => {
    setTodos(old => old.filter(todo => todo.id != id))
  }

  return (
    <View>
      <Header />
      <FlatList style={styles.content}
        data={todos}
        renderItem={({ item }) => <TodoItem item={item} pressHandler={() => pressHandler(item.id)} />}>
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 40
  }
})