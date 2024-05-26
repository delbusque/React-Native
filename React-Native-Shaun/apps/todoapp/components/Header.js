import { StyleSheet, Text, View } from 'react-native';

export default Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        padding: 30,
        backgroundColor: 'coral',
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 17,
    }
});