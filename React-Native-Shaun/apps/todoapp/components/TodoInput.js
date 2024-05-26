import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default TodoInput = ({ submitHandler }) => {

    const [textInput, setTextInput] = useState('')

    const inputHandler = (value) => {
        return setTextInput(value)
    }

    return (
        <View style={styles.cont}>
            <TextInput placeholder="add todo ..."
                style={styles.input}
                onChangeText={inputHandler} />
            <Button title="Add Todo" color='coral' onPress={() => submitHandler(textInput)} />
        </View>
    )
}

const styles = StyleSheet.create({
    cont: {
        paddingTop: 30,
        paddingHorizontal: 40
    },
    input: {
        paddingVertical: 5,
        borderBottomColor: '#7777',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        marginBottom: 10
    }
})