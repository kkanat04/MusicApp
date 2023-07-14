import React, { useEffect, useState } from 'react';
import { ImageBackground, View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import Header from '../Header/Header';
import AvaProfile from '../../../assets/Profile.png'
import key from '../../../assets/vpn_key.png'
import Pen from '../../../assets/Pen.png'
import Castle from '../../../assets/castle.png'
import CheckBg from '../../../assets/CheckBg.png'
import CheckBgLight from '../../../assets/CheckBgLight.png'
import Checkbox from 'expo-checkbox';
import { useDispatch } from 'react-redux';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { asyncProfile } from './../../store/Async/asyncProfile/asyncProfile';
import { useSelector } from 'react-redux';
import { CHANGE_PROFILE } from './../../store/action/dashProfile';
import ChangePassword from './changePassword/ChangePassword';




const Profile = () => {

    const [agree, setAgree] = useState([
        { title: 'Grade 1', id: 1, status: false },
        { title: 'Grade 2', id: 2, status: false },
        { title: 'Grade 3', id: 3, status: false },
        { title: 'Grade 4', id: 4, status: false },
        { title: 'Grade 5', id: 5, status: false },
        { title: 'Grade 6', id: 6, status: false },
    ])

    const [chPass, setChPass] = useState(false)

    const press = (param) => {

        setAgree((callBack) => {
            return callBack.map((el => {
                el.id === param.id ? el.status = param.status : null
                return el
            }))
        })
    }

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(CHANGE_PROFILE(false))
    }, [])

    const profile = useSelector(state => state.profileReducer)

    function changePassword() {
        setChPass(true)
    }
    

    return (
        <View style={{backgroundColor: '#E5E5E5', height: Dimensions.get('window').height}}>
            <Header data='Profile' />
            <ScrollView style={{flex: 1}}>
                {profile.loading ?
                    <Text>Loading...</Text> :
                    <>
                        <View style={{ borderBottomColor: '#EFEEF8', borderBottomWidth: 1, width: '90%', alignSelf: 'center', paddingBottom: 25 }} >

                            <Image style={{ alignSelf: 'center', width: '40%', resizeMode: 'contain' }} source={AvaProfile} />

                            <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>{profile.profile.name}</Text>
                            <Text style={{ paddingVertical: 10, textAlign: 'center', fontSize: 16, color: '#565FF4' }}>{profile.profile.email}</Text>

                            <TouchableOpacity onPress={changePassword}><View style={{ alignSelf: 'center', flexDirection: 'row' }}>
                                <Image source={key} />
                                <Text style={{ color: '#9394BD', textTransform: 'uppercase', paddingLeft: 5 }}>Change password</Text>
                            </View></TouchableOpacity>

                        </View>

                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontWeight: 'bold', paddingLeft: 20, paddingTop: 20 }}>Your subscription</Text>
                                <View style={{ paddingTop: 20, flexDirection: 'row' }}>
                                    <Image source={Pen} />
                                    <Text style={{ paddingRight: 20, paddingLeft: 10 }}>EDIT</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: 20 }}>

                                {
                                    agree.map((el, i) => {
                                        return (
                                            <View key={i} style={{ width: '28%', paddingBottom: 20 }}>
                                                <Text style={{ textAlign: 'center', color: el.status ? 'rgba(86, 95, 244, 1)' : 'rgba(147, 148, 189, 1)' }}>£9.99</Text>
                                                <ImageBackground style={{ width: '100%', resizeMode: 'contain' }} source={el.status ? CheckBgLight : CheckBg}>
                                                    <TouchableOpacity onPress={() => press({ ...el, status: !el.status })}><View style={{ flexDirection: 'row', paddingVertical: 11, width: '100%' }}>
                                                        <Checkbox
                                                            style={{ marginLeft: 15 }}
                                                            value={el.status}
                                                            onValueChange={() => press({ ...el, status: !el.status })}
                                                            color={el.status ? "#4630EB" : undefined}
                                                        />
                                                        <Text style={{
                                                            color: el.status ? 'rgba(86, 95, 244, 1)' : 'rgba(147, 148, 189, 1)',
                                                            textTransform: 'uppercase',
                                                            paddingLeft: 6
                                                        }}>{el.title}</Text>
                                                    </View>
                                                    </TouchableOpacity>


                                                </ImageBackground>

                                            </View>
                                        )
                                    })
                                }
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={Castle} />
                                <Text style={{ textTransform: 'uppercase', paddingLeft: 10 }}>Unlock more grades</Text>
                            </View>

                        </View>
                    </>
                }

                {chPass ? <ChangePassword setChPass={setChPass} /> : null}


            </ScrollView>




        </View>

    );
};
export default Profile;

const styles = StyleSheet.create({

})