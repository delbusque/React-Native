import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [names, setNames] = useState([
    { name: 'Semra', id: 0, },
    { name: 'John', id: 1, },
    { name: 'Peter', id: 2, },
    { name: 'Adam', id: 3, },
    { name: 'Sanya', id: 4, },
    { name: 'Collin', id: 5, },
    { name: 'Abraham', id: 6, },
    { name: 'Janet', id: 7, },
    { name: 'Hanck', id: 8, },
    { name: 'Semra', id: 10, },
    { name: 'John', id: 11, },
    { name: 'Peter', id: 12, },
    { name: 'Adam', id: 13, },
    { name: 'Sanya', id: 14, },
    { name: 'Collin', id: 15, },
    { name: 'Abraham', id: 16, },
    { name: 'Janet', id: 17, },
    { name: 'Hanck', id: 18, },
    { name: 'Semra', id: 20, },
    { name: 'John', id: 21, },
    { name: 'Peter', id: 22, },
    { name: 'Adam', id: 23, },
    { name: 'Sanya', id: 24, },
    { name: 'Collin', id: 25, },
    { name: 'Abraham', id: 26, },
    { name: 'Janet', id: 27, },
    { name: 'Hanck', id: 28, },
  ])

  const pressHandler = (id) => setNames(oldState => oldState.filter(item => item.id != id));

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.boldText}>
          Hello
          <Text>Mobile</Text>
          World !
        </Text>
      </View>

      <View style={styles.body}>
        <Text>happy dayssss</Text>
      </View>


      <FlatList
        numColumns={2}
        data={names}
        renderItem={({ item }) => <TouchableOpacity onPress={() => pressHandler(item.id)}>
          <Text style={styles.header}>{item.name}</Text>
        </TouchableOpacity>}
        keyExtractor={item => item.id}
      />


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 20
  },
  header: {
    backgroundColor: 'pink',
    paddingHorizontal: 20,
    padding: 10,
    margin: 7
  },
  boldText: {
    fontWeight: 'bold'
  },
  body: {
    backgroundColor: "yellow",
    padding: 20
  },

});
