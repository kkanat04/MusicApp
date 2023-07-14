import React, { useEffect, useState } from 'react';
import { ImageBackground, View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView, Dimensions, Alert } from "react-native";
import x from '../../../../assets/x.png'
import EyeHeddin from '../../../../assets/EyeHidden.png'
import Eye from '../../../../assets/Eye.png'
import { changePass } from './../../../store/Async/asyncChangePass/asyncChangePass';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ChangePassword = ({ setChPass }) => {

    const [password, setPassword] = useState('')
    const [conPassword, setConPassword] = useState('')
    const [eye, setEye] = useState(false)


    const tokenAuth = useSelector(state => state.Auth_user.user)
    const RegisterToken = useSelector(state => state.registerReducer.user)


    async function changePassword() {

        const data = {password}

        if (password === conPassword) {
            try {
                const value = await AsyncStorage.getItem('remember')
                if (value) {
                    changePass(data, value, setChPass)
                }
                else if (tokenAuth) {
                    changePass(data, tokenAuth.accessToken, setChPass)
                }
                else if (RegisterToken) {
                    changePass(data, RegisterToken.accessToken, setChPass)
                }
            } catch (e) { }

        }

        else Alert.alert(
            'Error',
            'Passwords must match'
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#000000bf', position: 'absolute', width: '100%', height: Dimensions.get('window').height }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%', height: '80%' }}>
                <View style={{ width: '80%', borderRadius: 20, backgroundColor: '#fff' }}>
                    <TouchableOpacity onPress={() => setChPass(false)}><Image style={{ alignSelf: 'flex-end', margin: 20 }} source={x} /></TouchableOpacity>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18, bottom: 7 }}>{'Change or reset\nyour password'}</Text>
                    <Text style={{ textAlign: 'center', marginBottom: 20, marginTop: 13 }}>{'Please select a combination of numbers\nand letters ONLY of at least 6 characters.'}</Text>

                    <View style={styles.auth_modal_input_password}>
                        <TextInput onChangeText={(text) => setPassword(text)}
                            secureTextEntry={eye} style={styles.input_address} value={password}
                            placeholder={"Password"} />
                        <TouchableOpacity onPress={() => setEye(!eye)} style={styles.eye_hidden}><Image
                            style={{ width: '7%', resizeMode: 'contain' }}
                            source={eye ? Eye : EyeHeddin} /></TouchableOpacity>
                    </View>

                    <View style={styles.auth_modal_input_password}>
                        <TextInput onChangeText={(text) => setConPassword(text)}
                            secureTextEntry={eye} style={styles.input_address} value={conPassword}
                            placeholder={"Confirm password"} />
                        <TouchableOpacity onPress={() => setEye(!eye)} style={styles.eye_hidden}><Image
                            style={{ width: '7%', resizeMode: 'contain' }}
                            source={eye ? Eye : EyeHeddin} /></TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginBottom: 35, marginTop: 20 }}>
                        <TouchableOpacity onPress={() => setChPass(false)}><Text style={{ textTransform: 'uppercase', color: '#9394BD' }}>Not now</Text></TouchableOpacity>
                        <TouchableOpacity onPress={changePassword}><Text style={{ color: '#565FF4' }}>SAVE</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>

    );
};
export default ChangePassword;

const styles = StyleSheet.create({
    auth_modal_input_password: {
        marginTop: 10,
        backgroundColor: '#fff',
        width: '90%',
        alignSelf: 'center',
        height: 50,
        borderWidth: 1,
        borderColor: '#E2E3F2',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20
    },
    input_address: {
        width: '85%'
    },
    eye_hidden: {
        resizeMode: "contain", width: '100%', left: 10
    }

})