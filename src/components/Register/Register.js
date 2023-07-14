import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import EyeHeddin from '../../../assets/EyeHidden.png'
import Eye from '../../../assets/Eye.png'
import React, { useState } from 'react';
import CheckBox from "expo-checkbox";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from "react-redux";
import { createUserFetch } from "../../store/Async/asyncRegister/asyncRegister";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {styles} from "../Auth/AuthCss";



export default function Register({inp, email, agree, eye, setEye, setAgree, setRegis, setEmail, setName, setInp, name, setTok}) {

    const dispatch = useDispatch();

    const navigation = useNavigation();

    function sigUp() {
        const data = {
            email, name, password: inp, confirmPassword: inp, referralCode: ''
        }

        const storeData = async (value) => {
            try {
                await AsyncStorage.setItem('remember', value)
            } catch (e) {
            }
        }

        dispatch(createUserFetch(data, navigation, storeData, agree, setTok))
    }

    return (
        <View style={{ flex: 1 }}>

                <ScrollView>

                    <View style={styles.auth_modal}>

                        <Text style={styles.auth_modal_title}>Create Account</Text>
                        <Text
                            style={styles.auth_modal_text}>{'Dont have an account?\n Create it now, it takes less than a minute.'}</Text>

                        <View style={styles.auth_form}>


                            <TextInput onChangeText={(text) => setEmail(text)}
                                placeholder={"Email address"}
                                style={styles.auth_modal_input_address} />
                            <TextInput onChangeText={(text) => setName(text)} placeholder={"Name"}
                                style={styles.auth_modal_input_address} />

                            <View style={styles.auth_modal_input_password}>
                                <TextInput onChangeText={(text) => setInp(text)} value={inp}
                                    secureTextEntry={eye} style={styles.input_address}
                                    placeholder={"Password"} />
                                <TouchableOpacity onPress={() => setEye(!eye)}
                                    style={styles.eye_hidden}><Image
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


                            </View>

                            <TouchableOpacity onPress={sigUp} style={styles.button}>
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
                                    }}>Sign Up</Text>
                                </LinearGradient>
                            </TouchableOpacity>

                        </View>

                        <View style={{ alignSelf: 'center', flexDirection: 'row', paddingBottom: 40 }}>
                            <Text style={{ color: '#9394BD' }}>Already a member?</Text>
                            <TouchableOpacity onPress={() => setRegis('login')}><Text style={{
                                textTransform: 'uppercase',
                                paddingLeft: 5,
                                color: '#565FF4'
                            }}>LOGIN</Text></TouchableOpacity>
                        </View>

                    </View>
                </ScrollView>
        </View>
    )
}
