import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import Bottom from '../../../assets/bottom-sheet-bg.png'
import Logo from '../../../assets/logo.png'
import AvaProfile from '../../../assets/Ava.png'
import arrowDown from '../../../assets/arrow-down.png'
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import DachboardProfile from './DashboardProfile/DashboardProfile';
import { useDispatch } from 'react-redux';
import { CHANGE_PROFILE } from './../../store/action/dashProfile';
import { useSelector } from 'react-redux';



export default function Header({ setTok, data }) {

    const navigation = useNavigation()

    const dispatch = useDispatch()

    const dash = useSelector(state => state.profileReducer.dsahProfile)

    function dashProfile() {
        dispatch(CHANGE_PROFILE(!dash))
    }

    return (
            <View style={{ width: '100%', zIndex: 10, top: 0, left: 0 }}>
                {
                    data === 'MockTest' ?
                    <ImageBackground style={{ flex: 1, paddingHorizontal: 20, paddingTop: 9, paddingBottom: 9 }} source={Bottom}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>MockTest</Text>
                        <TouchableOpacity onPress={dashProfile}><Image source={AvaProfile} /></TouchableOpacity>
                    </View>

                </ImageBackground>
                        : data === 'Profile' ?
                            <ImageBackground style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 18 }} source={Bottom}>
                                <Text style={{ color: '#fff', textAlign: 'center', width: '100%', fontSize: 18 }}>Profile</Text>
                            </ImageBackground>
                            : data === 'Exams' ?
                                <>
                                    <ImageBackground style={{ flex: 1, paddingHorizontal: 20, paddingTop: 9, paddingBottom: 9 }} source={Bottom}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Exams</Text>
                                            <TouchableOpacity onPress={dashProfile}><Image source={AvaProfile} /></TouchableOpacity>
                                        </View>

                                    </ImageBackground>
                                </>
                                : data === 'Learn' ?
                                    <>
                                        <ImageBackground style={{ flex: 1, paddingHorizontal: 20, paddingTop: 9, paddingBottom: 9 }} source={Bottom}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Learn</Text>
                                            <TouchableOpacity onPress={dashProfile}><Image source={AvaProfile} /></TouchableOpacity>
                                        </View>

                                    </ImageBackground>
                                    </>


                                    : data === 'MainPage' || data === 'Grade' ?
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1, height: 70 }}>
                                            <Image style={{ resizeMode: 'contain', width: '25%', marginLeft: 20 }} source={Logo} />
                                            <TouchableOpacity onPress={dashProfile}><Image style={{ marginRight: 20 }} source={AvaProfile} /></TouchableOpacity>
                                        </View> : null
                }


            </View>

    );
}
