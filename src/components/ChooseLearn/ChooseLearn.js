import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';
import { Image } from 'react-native';
import Header from './../Header/Header';
import { TouchableOpacity } from "react-native";
import Boys from '../../../assets/Boy_with_laptop.png'
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { asyncChooseLearn } from './../../store/Async/asyncChooseLearn/asyncChooseLearn';


export default function ChooseLearn(props) {

    const navigation = useNavigation()

    const arr = [
        { title: 'Simple and Compound Meter', },
        { title: 'Rest Duration', },
        { title: 'Measures and Time Signature', },
        { title: 'The Staff, Clefs, and Ledger Li...', },
        { title: 'Simple and Compound Meter', },
        { title: 'Rest Duration', },
        { title: 'Time signatures', },


    ]
    const subAreas = props.route.params

    const learnArea = useSelector(state => state.LernReducer.area)
    const tokenAuth = useSelector(state => state.Auth_user.user)
    const RegisterToken = useSelector(state => state.registerReducer.user)
    const chooseLearn = useSelector(state => state.ChooseLearnReducer)

    const dispatch = useDispatch()

    useEffect(async () => {
        try {
            const value = await AsyncStorage.getItem('remember')
            if (value) {
                dispatch(asyncChooseLearn(value, learnArea))
            }
            else if (tokenAuth) {
                dispatch(asyncChooseLearn(tokenAuth.accessToken, learnArea))
            }
            else if (RegisterToken) {
                dispatch(asyncChooseLearn(RegisterToken.accessToken, learnArea))
            }
        } catch (e) {
            console.log(e);
        }

    }, [])

    console.log(chooseLearn);




    return (
        <>
            <ScrollView style={{ flex: 1 }}>
                <Header data='Learn' />
                <View style={{ width: '100%', height: '100%' }}>

                    <Text style={{ fontWeight: 'bold', fontSize: 18, textAlign: 'center', paddingTop: 40, paddingBottom: 15 }}>{subAreas}</Text>
                    <Text style={{ textAlign: 'center', fontSize: 14, paddingBottom: 30 }}>Now select the lasson you would like to learn</Text>
                    <View style={{ alignItems: 'center', width: '100%' }}>
                        {chooseLearn?.loading ?
                            <Text>Loading...</Text> :
                            chooseLearn?.chooseLearn?.lessons?.map((el, i) => {
                                return (
                                    <View key={i} style={{
                                        shadowColor: "#000",
                                        shadowOffset: {
                                            width: 0,
                                            height: 6,
                                        },
                                        shadowOpacity: 0.37,
                                        shadowRadius: 7.49,
                                        elevation: 12, width: '93%', borderRadius: 16, backgroundColor: '#fff', padding: 25, marginBottom: 15
                                    }}>
                                        <TouchableOpacity onPress={() => navigation.navigate('Documentation', el.id)} >
                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                    <Image source={el.img} style={{ marginRight: 15 }} />
                                                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{el.title}</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row' }}>

                                                    <Text style={{ color: 'blue' }}>{el.wasRead ? '100%' : '0%'}</Text>
                                                </View>
                                            </View>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text style={{ textTransform: 'uppercase', color: '#565FF4' }}>{el.oneText}</Text>
                                                <Text style={{ textTransform: 'uppercase', color: '#565FF4' }}>{el.twoText}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })}

                    </View>
                    <View style={{ marginBottom: 40 }}>
                        <Image source={Boys} style={{ alignSelf: 'flex-end' }} />
                    </View>
                </View>
            </ScrollView>
        </>
    );
    const styles = StyleSheet.create({});
}