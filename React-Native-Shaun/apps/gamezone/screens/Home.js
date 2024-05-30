import { View, Text } from "react-native";
import { globalStyles } from '../styles/globalStyles';

// import { useCallback } from 'react';
// import { useFonts, Nunito_700Bold, Nunito_400Regular } from "@expo-google-fonts/nunito";
// import * as SplashScreen from 'expo-splash-screen';

// SplashScreen.preventAutoHideAsync();

export default Home = () => {

    // let [fontsLoaded] = useFonts({
    //     Nunito_400Regular,
    //     Nunito_700Bold
    // });

    // const onLayoutRootView = useCallback(async () => {
    //     if (fontsLoaded) {
    //         await SplashScreen.hideAsync();
    //     }
    // }, [fontsLoaded]);

    // if (!fontsLoaded) {
    //     return null;
    // }

    return (
        <View style={globalStyles.container}
        // onLayout={onLayoutRootView}
        >
            <Text style={globalStyles.titleText}>Home Screenl</Text>
        </View>
    )
}