import { useState } from "react";
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";

export default function App() {
  const [todos, setTodos] = useState([
    { title: 'Going for a walk', id: 1 },
    { title: 'Building an app', id: 2 },
    { title: 'Playing on Twitch', id: 3 },
  ])

  const pressHandler = (id) => {
    setTodos(old => old.filter(todo => todo.id != id))
  }

  const submitHandler = (text) => {
    if (text.length > 3) {
      return setTodos(old => [
        { title: text, id: Math.random().toString() },
        ...old,
      ])
    }
    Alert.alert('Ooops', 'Todo should be over 3 characters', [
      { text: 'Okey', onPress: () => console.log(123) }
    ])
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <Header />
        <TodoInput submitHandler={submitHandler} />
        <FlatList style={styles.content}
          data={todos}
          renderItem={({ item }) => <TodoItem item={item} pressHandler={() => pressHandler(item.id)} />}>
        </FlatList>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 40
  }
})