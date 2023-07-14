import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';
import { Image } from 'react-native';
import Header from './../Header/Header';
import { TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import out_icon from '../../../assets/out_icon.png'
import pause_icon from '../../../assets/pause_icon.png'
import progress_bar from '../../../assets/progress_bar.png'
import CheckBox from 'expo-checkbox';





export default function MainTest() {

    const [agree, setAgree] = useState([
        { title: 'a) Crochet', id: 1, status: false },
        { title: 'b) Crocet', id: 2, status: false },
        { title: 'c) Crotchit', id: 3, status: false },
    ])

    const navigation = useNavigation();

    const press = (param) => {

        setAgree((callBack) => {
            return callBack.map((el => {
                el.id === param.id ? el.status = param.status : null
                return el
            }))
        })


    }

    return (
        <View style={{ flex: 1 }}>

            <Header data='MockTest' />
            <View style={styles.bar_lines}>
                <Image source={out_icon} />
                <Text style={{ color: '#9394BD' }}>Tests 1 Bar Lines</Text>
                <Image source={pause_icon} />
            </View>

            <View style={styles.progress}>
                <Image source={progress_bar} />
                <Text style={{ textTransform: 'uppercase', paddingTop: 15, color: '#9394BD' }}>Question 1</Text>
            </View>

            <ScrollView>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18, paddingTop: '13%' }}>{'Which of these is the correct \nspelling for Crochet?'}</Text>

                <View style={{ alignSelf: 'center', marginTop: 33 }}>
                    {agree.map((el, i) => {
                        return (
                           <TouchableOpacity key={i} onPress={() => press({ ...el, status: !el.status })}><View style={{ flexDirection: 'row', padding: 15, backgroundColor: el.status ? '#d8dbfb' : null, borderRadius: 8}}>
                                <CheckBox
                                    value={el.status}
                                    onValueChange={() => press({ ...el, status: !el.status })}
                                    color={el.status ? "#4630EB" : undefined}
                                />
                                <Text style={{ paddingLeft: 13 }}>{el.title}</Text>
                            </View></TouchableOpacity>
                        )
                    })
                    }
                </View>

                <Text style={{ textAlign: 'center', textTransform: 'uppercase', color: '#565FF4', paddingTop: 30 }}>Show rule</Text>
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    bar_lines: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#9394BD',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    progress: {
        width: '100%',
        alignItems: 'center',
        padding: 13,
    },

});