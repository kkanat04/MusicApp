import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {styles} from "../Auth/AuthCss";



export default function FogottenPassword({setRegis}) {

    function Forgot() {
        setRegis('LoginLink')
    }

    return (
        <View style={{ flex: 1 }}>
                <ScrollView>

                    <View style={styles.auth_modal}>

                        <View>
                            <Text style={styles.auth_modal_title}>Forgot your password?!</Text>
                            <Text
                                style={styles.auth_modal_text}>{'Please enter the email you use \n to sign in to Treble'}</Text>


                            <View style={styles.auth_form}>


                                <TextInput placeholder={"Email address"}
                                    style={styles.auth_modal_input_address} />
                            </View>


                            <TouchableOpacity onPress={Forgot} style={styles.button}>
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
                                    }}>Request password reset</Text>
                                </LinearGradient>
                            </TouchableOpacity>

                        </View>

                        <View style={{ alignSelf: 'center', flexDirection: 'row', paddingBottom: 40 }}>
                            <Text style={{ color: '#9394BD' }}>Back to</Text>
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
