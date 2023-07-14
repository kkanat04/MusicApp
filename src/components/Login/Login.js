import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import EyeHeddin from '../../../assets/EyeHidden.png'
import Eye from '../../../assets/Eye.png'
import React, { useState } from 'react';
import CheckBox from "expo-checkbox";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { asyncAuth } from "../../store/Async/asyncAuth/asyncAuth";
import {styles} from "../Auth/AuthCss";
import {Auth_user} from "../../store/reducers/authReducer/authReducer";


export default function Login({inp, email, agree, eye, setEye, setAgree, setRegis, setEmail, setInp, setTok}) {

    const dispatch = useDispatch();

    const navigation = useNavigation();

    const s = useSelector(state => state.Auth_user)

    console.log(s)



    function sigIn() {
        const data = {
            email, password: inp
        }

        const storeData = async (value) => {
            try {
                await AsyncStorage.setItem('remember', value)
            } catch (e) {
            }
        }

        dispatch(asyncAuth(data, navigation, storeData, agree, setTok))
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>

                    <ScrollView>


                        <View style={styles.auth_modal}>

                            <Text style={styles.auth_modal_title}>Hey Welcome back!</Text>
                            <Text style={styles.auth_modal_text}>Sign in to continue access</Text>

                            <View style={styles.auth_form}>


                                <TextInput onChangeText={(text) => setEmail(text.trim())} placeholder={"Email address"} style={styles.auth_modal_input_address} />

                                <View style={styles.auth_modal_input_password}>
                                    <TextInput onChangeText={(text) => setInp(text)} value={inp}
                                        secureTextEntry={eye} style={styles.input_address}
                                        placeholder={"Password"} />
                                    <TouchableOpacity onPress={() => setEye(!eye)} style={styles.eye_hidden}><Image
                                        style={{ width: '7%', resizeMode: 'contain' }}
                                        source={eye ? Eye : EyeHeddin} /></TouchableOpacity>
                                </View>


                                <View style={styles.checkBox}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <CheckBox
                                            value={agree}
                                            onValueChange={() => setAgree(!agree)}
                                            color={agree ? "#4630EB" : undefined}
                                        />
                                        <Text style={{ paddingLeft: 8 }}>Remember</Text>
                                    </View>

                                    <View>
                                        <TouchableOpacity onPress={() => setRegis('Fogotten')}><Text>Forgotten
                                            password?</Text></TouchableOpacity>
                                    </View>

                                </View>

                                <TouchableOpacity onPress={sigIn} style={styles.button}>
                                    <LinearGradient
                                        style={{ padding: 16, borderRadius: 8 }}
                                        colors={['rgba(167, 56, 213, 1)', 'rgba(166, 27, 152, 1)', 'rgba(58, 29, 118, 1)']}
                                        location={[0.2, 0.42, 0]}
                                        start={[1, 0]}
                                        end={[0, 1]}
                                    >
                                        <Text style={{
                                            color: '#fff',
                                            fontSize: 14,
                                            textAlign: 'center',
                                            textTransform: 'uppercase'
                                        }}>Sign in</Text>
                                    </LinearGradient>
                                </TouchableOpacity>

                            </View>

                            <View style={{ alignSelf: 'center', flexDirection: 'row', paddingBottom: 40 }}>
                                <Text style={{ color: '#9394BD' }}>Not a member?</Text>
                                <TouchableOpacity onPress={() => setRegis('regis')}><Text
                                    style={{ textTransform: 'uppercase', paddingLeft: 5, color: '#565FF4' }}>Create
                                    account</Text></TouchableOpacity>
                            </View>

                        </View>
                    </ScrollView>
            </View>
        </View>
    );
}
