import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default TodoItem = ({ item, pressHandler }) => {
    return (
        <TouchableOpacity onPress={pressHandler}>
            <Text style={styles.item}>
                {item.title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
        borderStyle: 'dashed',
        borderWidth: 1,
        color: '#677',
        borderColor: '#777'
    }
})