import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import AvaProfile from '../../../../assets/Ava.png'
import v1 from '../../../../assets/1.png'
import Logout from '../../../../assets/Logout.png'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { asyncProfile } from './../../../store/Async/asyncProfile/asyncProfile';
import { CLEAR_PROFILE } from './../../../store/action/clearProfile';



export default function DachboardProfile(props) {

    const navigation = useNavigation()

    async function logout() {
        try {
            await AsyncStorage.removeItem('remember');
            props.setTok(false)
            dispatch(CLEAR_PROFILE())
        }
        catch (e) {
        }

    }

    console.log(props.setTok);



    const profile = useSelector(state => state.profileReducer)
    const tokenAuth = useSelector(state => state.Auth_user.user)
    const RegisterToken = useSelector(state => state.registerReducer.user)

    const dispatch = useDispatch()

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('remember')
            console.log(value);
            if (value) {
                dispatch(asyncProfile(value))
            }
            else if (tokenAuth) {
                dispatch(asyncProfile(tokenAuth.accessToken))
            }
            else if (RegisterToken) {
                dispatch(asyncProfile(RegisterToken.accessToken))
            }
        } catch (e) {
            console.log(e);
        }
    }



    useEffect(() => {
        getData()
    }, [])




    return (
        <View style={{
            width: '60%', backgroundColor: '#fff', borderRadius: 10, position: 'absolute', top: 70, alignSelf: 'flex-end', padding: 30, right: 10, zIndex: 2, shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.00,

            elevation: 24,
        }}>
            <View style={{ alignSelf: 'flex-end', width: 30, height: 30, backgroundColor: '#fff', position: 'absolute', top: 0, right: 15, transform: [{ rotate: '45deg' }] }}></View>
            {profile.loading ?
                <Text>Loading...</Text> :
                <>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}><View style={{ flexDirection: 'row', alignItems: 'center', borderBottomColor: '#EFEEF8', borderBottomWidth: 1, paddingBottom: 20 }}>
                        <Image source={AvaProfile} />
                        <Text style={{ fontWeight: 'bold', paddingLeft: 10 }}>{profile.profile.name}</Text>
                    </View>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', paddingLeft: 10, marginTop: 20 }}>
                        <Image source={v1} />
                        <Text style={{ paddingLeft: 10 }}>Subscription</Text>
                    </View>
                    <View style={{ flexDirection: 'row', paddingLeft: 10, marginTop: 22 }}>
                        <Image source={v1} />
                        <Text style={{ paddingLeft: 10 }}>Payment details</Text>
                    </View><View style={{ flexDirection: 'row', paddingLeft: 10, marginTop: 22 }}>
                        <Image source={v1} />
                        <Text style={{ paddingLeft: 10 }}>Change password</Text>
                    </View>

                    <TouchableOpacity onPress={logout}><View style={{ flexDirection: 'row', marginTop: 40, paddingLeft: 10, alignItems: 'center' }}>
                        <Image source={Logout} />
                        <Text style={{ paddingLeft: 10, color: '#565FF4' }}>LOGOUT</Text>
                    </View></TouchableOpacity>
                </>}
        </View>
);
}