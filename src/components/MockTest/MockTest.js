import React, {useEffect} from "react";
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';
import BgMockTest from '../../../assets/BgMTest.png'
import { Image } from 'react-native';
import Ellipse from '../../../assets/Ellipse.png'
import Header from './../Header/Header';
import { TouchableOpacity } from "react-native";
import Play from '../../../assets/Play.png';
import Carousel from "react-native-carousel-control";
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { asyncLern } from './../../store/Async/asyncLearn/asyncLearn';



export default function MockTest() {
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

    const grade = useSelector(state => state.LernReducer.headerGrade)


    return (
        <ScrollView style={{ flex: 1 }}>
        <Header data='MockTest' />
        <View style={{ width: '100%', height: '100%' }}>

            <Text style={{ fontWeight: 'bold', fontSize: 18, textAlign: 'center', paddingTop: 40, paddingBottom: 15 }}>{`Welcome to Grade ${grade + 1}`}</Text>
            <Text style={{ textAlign: 'center', fontSize: 14, paddingBottom: 30 }}>Select a category and start taking mock tests</Text>
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
                                    <TouchableOpacity onPress={() => { dispatch({ type: 'AREA_NAME', payload: el.name }), navigation.navigate('DetailMockTest', { areas: el.subAreas, lessonName: el.name }) }}>
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
                <Image source={BgMockTest} style={{ alignSelf: 'flex-end' }} />
            </View>
        </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    carusel_div: {
        width: '100%',
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    }
});