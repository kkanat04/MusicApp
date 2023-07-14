import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ImageBackground, ScrollView, Alert } from 'react-native';
import book from '../../../assets/book_image.png'
import { Image } from 'react-native';
import Header from './../Header/Header';
import { TouchableOpacity } from "react-native";
import kepka from '../../../assets/kepka.png'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { asyncDocumentation } from './../../store/Async/asyncDocumentation/asyncDocumentation';


export default function Documentation(props) {
    const dispatch = useDispatch()

    const tokenAuth = useSelector(state => state.Auth_user.user)
    const registerToken = useSelector(state => state.registerReducer.user)
    const documention = useSelector(state => state.documentionReducer)
    const chooseLearn = useSelector(state => state.ChooseLearnReducer.chooseLearn.lessons)

    const [subAreas, setSubAreas] = useState(props.route.params)
    console.log(documention);

    useEffect(async () => {
        try {
            const value = await AsyncStorage.getItem('remember')
            if (value) {
                dispatch(asyncDocumentation(subAreas, value))
            }
            else if (tokenAuth) {
                dispatch(asyncDocumentation(subAreas, tokenAuth.accessToken))
            }
            else if (registerToken) {
                dispatch(asyncDocumentation(subAreas, registerToken.accessToken))
            }
        } catch (e) {
            console.log(e);
        }
    }, [subAreas])

    function nextButton() {
        const arr = []
        chooseLearn.map(el => {
            arr.push(el.id)
        })
        const count = arr.indexOf(subAreas) + 1
        if (arr[arr.length - 1] == subAreas) {
            Alert.alert('Successfull', `You have successfully passed "${documention?.documention?.lesson?.grade}" and its "${documention?.documention?.lesson?.area}" theme as well under the "${documention?.documention?.lesson?.subArea}" theme`)
        }
        else {
            setSubAreas(chooseLearn[count].id)
        }
    }
    return (
        <>
            <ScrollView>
                <Header data='Learn' />
                <View style={styles.book_icon}>
                    <Image source={book} />
                    <Text style={styles.book_title}>Lesson materials</Text>
                </View>
                {
                    documention.loading ? <Text style={{ textAlign: 'center', paddingTop: 20 }}>Loading...</Text> :
                        <>
                            <View style={styles.main_documentation}>

                                <View style={{ width: '100%' }}>


                                    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18, paddingTop: 20 }}>{documention?.documention?.lesson?.title}</Text>
                                    <Text style={styles.text_style}>{documention?.documention?.lesson?.description}</Text>



                                </View>
                            </View>
                            <View style={styles.kepka_footer}>
                                <Image style={{ marginTop: 47, marginBottom: 20 }} source={kepka} />
                                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 17 }}> Well done!</Text>
                                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 17, marginBottom: 30 }}> You've learned the hall subsection!</Text>
                                <TouchableOpacity onPress={() => nextButton()} style={styles.subsection_btn} >
                                    <Text style={{ textAlign: 'center', padding: 15, fontSize: 16.5, color: 'white' }}>Next subsection</Text>
                                </TouchableOpacity>

                            </View>
                        </>
                }

            </ScrollView>
        </>
    );

}
const styles = StyleSheet.create({
    main_documentation: {
        flex: 1,
        alignSelf: 'center',
        width: '85%',

    },
    book_icon: {
        width: '55%',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-evenly'

    }, book_title: {
        fontSize: 18,
        color: 'grey',
        paddingVertical: 30,
    }, text_style: {
        paddingVertical: 20,
        fontSize: 16,

    },
    kepka_footer: {
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        marginBottom: 100
    },
    subsection_btn: {
        backgroundColor: '#565FF4',
        width: '50%',
        borderRadius: 10
    }
});

