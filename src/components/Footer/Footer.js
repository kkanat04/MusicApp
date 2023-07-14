import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import React, { useState, useEffect } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import HomeLight from '../../../assets/HomeLight.png'
import Grade_1 from '../../../assets/Grade_1.png'
import Grade_2 from '../../../assets/Grade_2.png'
import Grade_3 from '../../../assets/Grade_3.png'
import Grade_4 from '../../../assets/Grade_4.png'
import Grade_5 from '../../../assets/Grade_5.png'
import left_arrow from '../../../assets/left_arrow.png'
import right from '../../../assets/Frame_124.png'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_PROFILE } from './../../store/action/dashProfile';
import { quationAction } from './../../store/action/quationAction';
import { asyncNextExams } from './../../store/Async/asyncNextExams/asyncNextExams';
import AsyncStorage from '@react-native-async-storage/async-storage';


function Footer({ state }) {

    const navigation = useNavigation();
    const [footerLight, setFooterLight] = useState(1)
    const [view, setView] = useState(false)

    const dispatch = useDispatch()
    const startExamsReducer = useSelector(state => state.startExamsReducer)
    const tokenAuth = useSelector(state => state.Auth_user.user)
    const registerToken = useSelector(state => state.registerReducer.user)

    function gradeHeader(el) {
        dispatch({ type: 'GRADE', payload: el })
    }
    const skip = () => {
        if (startExamsReducer?.countQuation + 1 !== startExamsReducer?.allQuation?.examQuestions?.length) {
            dispatch(quationAction(startExamsReducer.countQuation + 1))
        }
        dispatch({ type: 'IS_ANS', payload: [] })
    }
    const back = () => {
        if (startExamsReducer?.countQuation > 0) {
            dispatch(quationAction(startExamsReducer.countQuation - 1))
        }
        dispatch({ type: 'IS_ANS', payload: [] })
    }
    const next = async () => {
        const data = {
            examId: startExamsReducer?.allQuation?.id,
            questionId: startExamsReducer?.quation?.id,
            answer: {
                answersLabels: startExamsReducer?.isAns
            }
        }
        console.log(data);
        const value = await AsyncStorage.getItem('remember')
        if (value) {
            dispatch(asyncNextExams(value, data, startExamsReducer))
        }
        else if (tokenAuth) {
            dispatch(asyncNextExams(tokenAuth.accessToken, data, startExamsReducer))
        }
        else if (registerToken) {
            dispatch(asyncNextExams(registerToken.accessToken, data, startExamsReducer))
        }
    }
    useEffect(() => {
        let param = !state?.routes[0].state ? state?.routes[0]?.name : state?.routes[0]?.state.routes[state?.routes[0]?.state.routes.length - 1].name
        console.log(param);
        if (param == 'ExamsTest') {
            setView(true)
        } else {
            setView(false)
        }
    }, [state])
    return (
        <View style={{
            ...styles.footer,
            elevation: 18,
        }}>

            {
                !view ?
                    <LinearGradient
                        style={{ width: '100%', height: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}
                        colors={['#171147', '#2C3582']}
                        start={[1, 0]}
                        end={[0, 0]}>


                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', flex: 1, paddingVertical: 17 }}>
                            <TouchableOpacity style={{ width: 30 }} onPress={() => { navigation.navigate('MainPage'), setFooterLight(1), dispatch(CHANGE_PROFILE(false)) }}><Image style={footerLight === 1 ? styles.footer__icon : styles.icons} source={HomeLight} /></TouchableOpacity>
                            <TouchableOpacity style={{ width: 30 }} onPress={() => { gradeHeader(0), navigation.navigate('Grade'), setFooterLight(1), dispatch(CHANGE_PROFILE(false)) }}><Image style={footerLight === 1 ? styles.footer__icon : styles.icons} source={Grade_1} /></TouchableOpacity>
                            <TouchableOpacity style={{ width: 30 }} onPress={() => { gradeHeader(1), navigation.navigate('Grade'), setFooterLight(1), dispatch(CHANGE_PROFILE(false)) }}><Image style={footerLight === 1 ? styles.footer__icon : styles.icons} source={Grade_2} /></TouchableOpacity>
                            <TouchableOpacity style={{ width: 30 }} onPress={() => { gradeHeader(2), navigation.navigate('Grade'), setFooterLight(1), dispatch(CHANGE_PROFILE(false)) }}><Image style={footerLight === 1 ? styles.footer__icon : styles.icons} source={Grade_3} /></TouchableOpacity>
                            <TouchableOpacity style={{ width: 30 }} onPress={() => { gradeHeader(3), navigation.navigate('Grade'), setFooterLight(1), dispatch(CHANGE_PROFILE(false)) }}><Image style={footerLight === 1 ? styles.footer__icon : styles.icons} source={Grade_4} /></TouchableOpacity>
                            <TouchableOpacity style={{ width: 30 }} onPress={() => { gradeHeader(4), navigation.navigate('Grade'), setFooterLight(1), dispatch(CHANGE_PROFILE(false)) }}><Image style={footerLight === 1 ? styles.footer__icon : styles.icons} source={Grade_5} /></TouchableOpacity>
                        </View>



                    </LinearGradient>
                    :
                    <View style={styles.btn_container}>
                        {startExamsReducer?.countQuation > 0 ? <TouchableOpacity style={{ left: 30, position: 'absolute' }} onPress={back}><Image source={left_arrow} /></TouchableOpacity> : null}
                        <TouchableOpacity onPress={next} disabled={!startExamsReducer.change_ans} style={{ ...styles.btn, backgroundColor: !startExamsReducer.change_ans ? '#9394BD' : '#565FF4' }}><Text style={{ color: '#fff' }}>{startExamsReducer.countQuation + 1 == startExamsReducer.allQuation.examQuestions.length ? 'END' : 'NEXT'}</Text><Text style={{ fontSize: 20, color: '#fff' }}> {'>'}</Text></TouchableOpacity>
                        <TouchableOpacity style={{ right: 30, position: 'absolute' }} onPress={skip}><Image source={right} /></TouchableOpacity>
                    </View>
            }
        </View>

    );
}

export default Footer

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        overflow: 'hidden',
        justifyContent: 'center'
    },
    footer__icon: {
        resizeMode: "contain",
        width: '100%',
        height: 30
    },
    icons: {
        resizeMode: "contain",
        width: '100%',
        height: 30,
        opacity: 0.3,
    },
    btn_container: {
        backgroundColor: '#fff',
        paddingVertical: 17,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    btn: {
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 45,
        paddingVertical: 12,
        alignSelf: 'center'
    }
});