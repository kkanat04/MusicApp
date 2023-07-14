import React from "react";
import { StyleSheet, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from "react-native";
import Tab from "./components/Tab";
import Auth from "./components/Auth/Auth";


export default function MainToken({setTok}) {
    const Stack = createNativeStackNavigator();
    return (
        <View style={{ flex: 1 }}>
            <Stack.Navigator>
                <Stack.Screen name={'Tab'} component={Tab} options={{ headerShown: false }} initialParams={{setTok: setTok}}/>
            </Stack.Navigator>

        </View>
    );
}

const styles = StyleSheet.create({});