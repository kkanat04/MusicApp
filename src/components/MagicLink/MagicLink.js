import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Email from '../../../assets/Email.png'
import React from 'react';
import {styles} from "../Auth/AuthCss";


export default function MagicLink({setRegis}) {

    return (
        <View style={{ flex: 1 }}>
                <ScrollView>

                    <View style={styles.auth_modal}>
                        <Image style={{ alignSelf: 'center', marginVertical: 35 }} source={Email} />

                        <Text style={{ alignSelf: 'center', fontWeight: 'bold', width: '60%', textAlign: 'center', fontSize: 18, paddingBottom: 31 }}>Thanks, please check your inbox for a login link!</Text>

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