import React, {useEffect, useState} from 'react';
import { ImageBackground, View, Text, StyleSheet, ImageBackgroundComponent, TextInput } from "react-native";
import Back from '../../../assets/Back.png'
import { Image } from "react-native";
import Image_number from '../../../assets/b_number.png'
import Image_number2 from '../../../assets/b_number2.png'
import CheckBox from "expo-checkbox";
import CheckBg from '../../../assets/CheckBg.png'

import logo_visa from '../../../assets/logo_visa.png'
import logo_master from '../../../assets/logo_master.png'
import logo_maestro from '../../../assets/logo_maestro.png'
import logo_america from '../../../assets/logo_america.png'
import logo_delta from '../../../assets/logo_delta.png'
import img_input from '../../../assets/img_input.png'

import CheckBgLight from '../../../assets/CheckBgLight.png'
import { TouchableOpacity } from "react-native";
import { ScrollView } from 'react-native';
import Footer from '../Footer/Footer';
import PayFooter from './PayFooter';
import Loading from "../Loading/Loading";
import { useDispatch } from 'react-redux';
import { CHANGE_PROFILE } from './../../store/action/dashProfile';


const Pay = () => {
    const [agree, setAgree] = useState([
        { title: 'Grade 1', id: 1, status: false },
        { title: 'Grade 2', id: 2, status: false },
        { title: 'Grade 3', id: 3, status: false },
        { title: 'Grade 4', id: 4, status: false },
        { title: 'Grade 5', id: 5, status: false },
        { title: 'Grade 6', id: 6, status: false },
    ])

    const [payInp, setPayInp] = useState('')


    const press = (param) => {

        setAgree((callBack) => {
            return callBack.map((el => {
                el.id === param.id ? el.status = param.status : null
                return el
            }))
        })


    }

    function payInput(text) {
        let card_number = text.replace(/\s?/g, "")
        .replace(/(\d{4})/g, "$1 ")
        .trim()
        setPayInp(card_number)
    }

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(CHANGE_PROFILE(false))
    }, [])

    return (
        <View style={{ flex: 1}}>


            <ImageBackground style={{ flex: 1 }} source={Back}>
                <ScrollView style={{ flex: 1 }}>
                    <Text style={styles.pay_title}>Welcome to Treble Music</Text>
                    <Text style={styles.pay_text}>Let's get you started!</Text>

                    <View style={styles.pay_main}>




                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', width: '95%', alignSelf: 'center' }}>

                            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
                                <Image source={Image_number} style={{ width: 70, resizeMode: 'contain' }} />
                                <Text style={styles.main_title}>Select which grade you'd like too learn </Text>
                            </View>
                            {
                                agree.map((el, i) => {
                                    return (
                                        <View key={i} style={{ width: '30%', paddingBottom: 20 }}>
                                            <Text style={{ textAlign: 'center', color: el.status ? 'rgba(86, 95, 244, 1)' : 'rgba(147, 148, 189, 1)' }}>£9.99</Text>
                                            <ImageBackground style={{ width: '100%', resizeMode: 'contain' }} source={el.status ? CheckBgLight : CheckBg}>
                                                <TouchableOpacity onPress={() => press({ ...el, status: !el.status })}  ><View style={{ flexDirection: 'row', paddingVertical: 11, width: '100%' }}>
                                                    <CheckBox
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

                            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', width: '100%' }}>
                                <Image source={Image_number2} style={{ width: 70, resizeMode: 'contain' }} />
                                <Text style={styles.main_title}>Enter your Payment details </Text>
                            </View>

                            <View style={styles.pay__logo}>
                                <View style={{ flexGrow: 0, flexShrink: 1, flexBasis: '18%', height: 30 }}><Image style={{ width: '100%', height: '100%', resizeMode: 'contain' }} source={logo_visa} /></View>
                                <View style={{ flexGrow: 0, flexShrink: 1, flexBasis: '18%', height: 30 }}><Image style={{ width: '100%', height: '100%', resizeMode: 'contain' }} source={logo_master} /></View>
                                <View style={{ flexGrow: 0, flexShrink: 1, flexBasis: '18%', height: 30 }}><Image style={{ width: '100%', height: '100%', resizeMode: 'contain' }} source={logo_maestro} /></View>
                                <View style={{ flexGrow: 0, flexShrink: 1, flexBasis: '20%', height: 30 }}><Image style={{ width: '100%', height: '100%', resizeMode: 'contain' }} source={logo_america} /></View>
                                <View style={{ flexGrow: 0, flexShrink: 1, flexBasis: '20%', height: 30 }}><Image style={{ width: '100%', height: '100%', resizeMode: 'contain' }} source={logo_delta} /></View>



                            </View>


                        </View>

                        <Text style={styles.payment_text}>Credit card number</Text>
                        <View style={styles.pay_input}>
                            <Image source={img_input} style={{ paddingLeft: 20, width: 24, resizeMode: 'contain' }} />
                            <TextInput
                                placeholder='0000 0000 0000 0000'
                                value={payInp} 
                                onChangeText={(text) => payInput(text)} style={{ width: '80%' }} 
                                maxLength={19}
                                keyboardType='number-pad'
                                
                                />
                        </View>

                        <View style={styles.payment_main}>
                            <View style={styles.payment_code_space}>
                                <Text style={styles.payment_code}>CVV Code</Text>
                                <TextInput style={styles.payment_code_input} />
                            </View>
                            <View style={styles.payment_date_space}>
                                <Text style={styles.payment_date}>Expiry date </Text>
                                <TextInput placeholder='MM / YY' style={styles.payment_date_input} />

                            </View>
                        </View>






                    </View>

                    <View style={styles.sumarry} >
                        <Text style={styles.sumarry_title}>Order Sumarry</Text>
                        <View style={styles.sumarry_choose}>
                            <Text style={styles.sumarry_list}>Grade 1...................£9.99</Text>
                            <Text style={styles.sumarry_list}>Grade 2...................£9.99</Text>
                            <Text style={{ opacity: 0.5, color: 'white', paddingBottom: 37 }}>*You can cancel at any time</Text>
                        </View>

                    </View>
                </ScrollView>

            </ImageBackground>
            {/*<Loading />*/}
            <PayFooter />


        </View>

    );
};
export default Pay;

const styles = StyleSheet.create({
    pay_title: {
        textAlign: 'center', paddingTop: 37, fontSize: 24, color: '#FFFFFF', fontWeight: 'bold'
    }, pay_text: {
        textAlign: 'center', paddingTop: 10, fontSize: 14, color: '#FFFFFF',
    }, pay_main: {
        backgroundColor: 'white', marginTop: 28, borderTopStartRadius: 30, borderTopEndRadius: 30, flex: 1
    }, main_title: {
        fontWeight: 'bold', fontSize: 16,
    },
    pay__logo: {
        width: '80%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginLeft: 20
    }, pay_card: {
        flex: 1, width: '100%'
    },
    pay_input: {
        backgroundColor: 'white', width: '95%', alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-around',
        borderRadius: 8, borderColor: 'rgba(206, 207, 232, 1)', borderWidth: 1, marginTop: 10, padding: 8,
    }, payment_text: {
        paddingTop: 15, paddingBottom: 6, paddingLeft: 15, color: 'gray', fontSize: 14
    }, payment_code: {
        paddingTop: 15, paddingBottom: 6, paddingLeft: 15, color: 'gray', fontSize: 14
    }, payment_code_space: {
        width: '50%', height: 150,
    }, payment_code_input: {

        width: "90%", borderColor: 'rgba(206, 207, 232, 1)', borderWidth: 1, alignSelf: 'center', padding: 12, fontSize: 18, textAlign: 'center',
        borderRadius: 8,
    }, payment_main: {
        flexDirection: 'row'
    }, payment_date: {
        paddingTop: 15, paddingBottom: 6, paddingLeft: 15, color: 'gray', fontSize: 14
    },
    payment_date_input: {
        width: "90%", borderColor: 'rgba(206, 207, 232, 1)', borderWidth: 1, alignSelf: 'center', padding: 12, fontSize: 18, textAlign: 'center',
        borderRadius: 8,
    },
    payment_date_space: {
        width: '50%', height: 150,
    }, sumarry: {
        width: '100%', flex: 1, marginBottom: 70
    }, sumarry_title: {
        textAlign: 'center', fontWeight: 'bold', fontSize: 20, paddingTop: 30, color: 'white'
    }, sumarry_choose: {
        width: '80%', alignItems: 'center', alignSelf: 'center', paddingTop: 30
    }, sumarry_list: {
        paddingVertical: 10, fontSize: 16, color: 'white', fontWeight: 'bold'
    }
})


