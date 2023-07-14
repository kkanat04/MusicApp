import { StyleSheet, Text, View, } from 'react-native';
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Main from "./src/Main";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SafeAreaView from 'react-native-safe-area-view';
import { Provider } from "react-redux";
import store from "./src/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MainToken from "./src/MainToken";
import { useEffect } from 'react';


export default function App() {

    const [tok, setTok] = useState()

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('remember')
            setTok(value)
        } catch (e) {
        }
    }
    useEffect(() => {
        getData()
    }, [])


    return (
        <Provider store={store}>
            <SafeAreaProvider style={{ height: '100%', flex: 1 }}>
                <SafeAreaView forceInset={{ top: 'always'}}
                    style={{ flex: 1, width: '100%', height: '100%' }}>
                    <NavigationContainer>
                        {tok ? <MainToken setTok={setTok} /> : <Main setTok={setTok} />}
                    </NavigationContainer>
                </SafeAreaView>
            </SafeAreaProvider>
        </Provider>
    );
}

const styles = StyleSheet.create({});