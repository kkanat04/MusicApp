import React, { useEffect } from "react";
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';
import { Image } from 'react-native';
import Ellipse from '../../../assets/Ellipse.png'
import Header from '../Header/Header';
import { TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import learning_bg from '../../../assets/learning_section_bg.png'
import back_space from '../../../assets/Ellipse_gray.png'
import { asyncLern } from './../../store/Async/asyncLearn/asyncLearn';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Learn() {
    const navigation = useNavigation();

    const tokenAuth = useSelector(state => state.Auth_user.user)
    const RegisterToken = useSelector(state => state.registerReducer.user)
    const learnGet = useSelector(state => state.LernReducer)
    const dispatch = useDispatch()


    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('remember')
            if (value) {
                dispatch(asyncLern(value))
            }
            else if (tokenAuth) {
                dispatch(asyncLern(tokenAuth.accessToken))
            }
            else if (RegisterToken) {
                dispatch(asyncLern(RegisterToken.accessToken))
            }
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getData()
    }, [])

    console.log(learnGet.headerGrade);

    return (
        <>
            <ScrollView style={{ flex: 1 }}>
                <Header data='Learn' />
                <View style={{ width: '100%', height: '100%' }}>

                    <Text style={{ fontWeight: 'bold', fontSize: 18, textAlign: 'center', paddingTop: 40, paddingBottom: 15 }}>Learning section</Text>
                    <Text style={{ textAlign: 'center', fontSize: 14, paddingBottom: 30 }}>Select a category and start learning</Text>
                    <View style={{ alignItems: 'center', width: '100%' }}>
                        {
                            learnGet.loading ? <Text>Loading</Text> :
                                learnGet.grades[learnGet.headerGrade]?.areas?.map((el, i) => {
                                    return (
                                        <View key={i} style={{
                                            width: '93%',
                                            shadowColor: "#000",
                                            shadowOffset: {
                                                width: 0,
                                                height: 6,
                                            },
                                            shadowOpacity: 0.37,
                                            shadowRadius: 7.49,

                                            elevation: 12,
                                            borderRadius: 16, backgroundColor: '#fff', padding: 25, marginBottom: 20
                                        }}>
                                            <TouchableOpacity onPress={() => { dispatch({ type: 'AREA_NAME', payload: el.name }), navigation.navigate('DetailLearnSection', { areas: el.subAreas, lessonName: el.name }) }}>
                                                <View style={{ marginBottom: 15, flexDirection: 'row', alignItems: 'center' }}>
                                                    <Image source={el.img} style={{ marginRight: 15 }} />
                                                    <Text style={{ fontWeight: 'bold' }}>{el?.name}</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <Text style={{ textTransform: 'uppercase', color: '#565FF4' }}>{el.oneText}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    )
                                })}

                    </View>
                    <View style={{ marginBottom: 40 }}>
                        <Image source={learning_bg} style={{ alignSelf: 'flex-end' }} />
                    </View>
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({});