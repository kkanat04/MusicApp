import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';
import { Image } from 'react-native';
import Header from '../Header/Header';
import { TouchableOpacity } from "react-native";
import out_icon from '../../../assets/out_icon.png'
import pause_icon from '../../../assets/pause_icon.png'
import progress_bar from '../../../assets/progress_bar.png'
import CheckBox from 'expo-checkbox';
import { useSelector, useDispatch } from 'react-redux';
export default function ExamsTest() {
    const dispatch = useDispatch()
    const ref = useRef(null);
    const startExamsReducer = useSelector(state => state.startExamsReducer)
    const learnGet = useSelector(state => state.LernReducer)
    useEffect(() => {
        ref.current?.scrollTo({
            x: 0,
            y: 0,
            animated: true,
        });
    }, [startExamsReducer.countQuation])
    useEffect(() => {
        dispatch({ type: 'CHANGE_ANS', payload: startExamsReducer.isAns.length > 0 ? true : false })
    }, [startExamsReducer.isAns])
    console.log(startExamsReducer.allQuation.id);
    return (
        <View style={{ flex: 1, width: '100%', paddingBottom: 50 }}>
            <ScrollView ref={ref}>
                <Header data='Exams' />
                <View style={styles.bar_lines}>
                    <Image source={out_icon} />
                    <Text style={{ color: '#9394BD', textTransform: 'uppercase' }}>{`Grade ${learnGet?.headerGrade + 1} exam`}</Text>
                    <Image source={pause_icon} />
                </View>
                <View style={styles.progress}>
                    <Image source={progress_bar} />
                    <Text style={{ textTransform: 'uppercase', paddingTop: 15, color: '#9394BD' }}>{`Question ${startExamsReducer?.countQuation + 1}`}</Text>
                </View>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18, paddingTop: '13%', width: '80%', alignSelf: 'center' }}>{startExamsReducer?.quation?.text}</Text>
                <View style={{ width: '80%', flexDirection: 'row', flexWrap: 'wrap', alignSelf: 'center', marginTop: 10 }}>
                    {
                        startExamsReducer?.quation?.images?.map((el, i) => {
                            return (
                                <Image key={i}
                                    style={{ height: 200, width: '95%', alignSelf: 'center' }}
                                    source={{
                                        uri: `https://static.treblemusictheory.com/questions/full/${el?.remoteName}`,
                                    }}
                                />
                            )
                        })
                    }
                </View>
                <View style={{ alignSelf: 'center', marginTop: 33 }}>
                    {startExamsReducer.quation?.answers?.map((el, i) => {
                        return (
                            <TouchableOpacity onPress={() => {
                                if (startExamsReducer.isAns.find(e => e == el.optionLabel)) {
                                    dispatch({ type: 'IS_ANS', payload: startExamsReducer.isAns.filter(e => e != el.optionLabel) })
                                } else {
                                    dispatch({ type: 'IS_ANS', payload: [...startExamsReducer.isAns, el.optionLabel] })
                                }
                            }} key={i}><View style={{ flexDirection: 'row', padding: 15, backgroundColor: el.status ? '#d8dbfb' : null, borderRadius: 8 }}>
                                    <CheckBox
                                        value={startExamsReducer.isAns.find(e => e == el.optionLabel)}
                                        onValueChange={() => {
                                            if (startExamsReducer.isAns.find(e => e == el.optionLabel)) {
                                                dispatch({ type: 'IS_ANS', payload: startExamsReducer.isAns.filter(e => e != el.optionLabel) })
                                            } else {
                                                dispatch({ type: 'IS_ANS', payload: [...startExamsReducer.isAns, el.optionLabel] })
                                            }
                                        }}
                                        color={el.status ? "#4630EB" : undefined}
                                    />
                                    <Text style={{ paddingLeft: 13 }}>{el.optionLabel + ') ' + el.text}</Text>
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