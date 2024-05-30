import { View, Text } from "react-native";
import { globalStyles } from '../styles/globalStyles';

export default About = () => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText} >About Screen</Text>
        </View>
    )
}