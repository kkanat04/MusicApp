import React from "react";
import { StyleSheet, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from "./components/Auth/Auth";
import MainToken from './MainToken';
import Tab from "./components/Tab";



export default function Main({ setTok }) {
    const Stack = createNativeStackNavigator();
    return (

        <Stack.Navigator>
            <Stack.Screen name={'Auth'} component={Auth} options={{ headerShown: false }} initialParams={{ setTok: setTok }} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({});
