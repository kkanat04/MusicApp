import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import React, { useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import card from '../../../assets/card.png'



function PayFooter(props) {

    const navigation = useNavigation();


    return (
        <View style={styles.footer}>

            <LinearGradient
                style={{ width: '100%', height: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}
                colors={['#171147', '#2C3582']}
                start={[1, 0]}
                end={[0, 0]}>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', flex: 1, alignItems: 'center', alignSelf: 'center' }}>
                        <Text style={{ color: '#fff', fontSize: 17 }}>£9.99 / month</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('MainPage')} style={{
                            backgroundColor: '#565FF4', padding: 13, width: '35%', borderRadius: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', 
                            shadowColor: "#7176FF",
                            shadowOffset: {
                                width: 0,
                                height: 10,
                            },
                            shadowOpacity: 0.51,
                            shadowRadius: 13.16,

                            elevation: 20,
                        }}><Text style={{ color: '#fff', textAlign: 'center' }}>Sign Up</Text><Image source={card} /></TouchableOpacity>
                    </View>
                   
            </LinearGradient>

        </View>

    );
}

export default PayFooter

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        height: 70,
        position: 'absolute',
        bottom: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        overflow: 'hidden',
        justifyContent: 'center'
    },

});