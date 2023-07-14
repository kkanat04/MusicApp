import { StyleSheet, Text, View, FlatList, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from "react";
import Dashboard from '../Dashboard/Dashboard';
import Bg from '../../../assets/bottom-sheet-bg.png'
import Header from './../Header/Header';
import Learn from '../../../assets/lern.png'
import strelka from '../../../assets/slyder_arrow.png'
import Frame from '../../../assets/Frame.png'
import BookLight from '../../../assets/BookLight.png'
import EnergyLight from '../../../assets/EnergyLight.png'
import TaskLight from '../../../assets/TaskLight.png'
import Vector1 from '../../../assets/Vector1.png'
import BoyLaptop from '../../../assets/BoyLaptop.png'
import MockTests from '../../../assets/MockTests.png'
import BgMTest from '../../../assets/GirLaptop.png'
import Exams from '../../../assets/Exams.png'
import GirlExams from '../../../assets/GirlExams.png'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

export default function Grade(props) {

    const setTok = props.route.params.setTok
    const navitation = useNavigation()

    const learnGet = useSelector(state => state.LernReducer.headerGrade)

    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <ImageBackground imageStyle={{ borderBottomLeftRadius: 36, borderBottomRightRadius: 36 }} style={{ width: '100%' }} source={Bg}>
                    <Header setTok={setTok} data='Grade' />
                    <View style={styles.main_content}>
                        <Text style={styles.main_title}>{`Welcome to Grade ${learnGet + 1}`}</Text>
                        <View style={styles.select_grade}>
                            <Text style={styles.slider_title}>Select an area </Text>
                        </View>
                        

                        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>


                            <TouchableOpacity style={styles.area} onPress={() => navitation.navigate('Learn')}>
                                <Image style={{ resizeMode: 'contain', width: '85%' }} source={BookLight} />
                                <Text style={{ color: '#fff', paddingTop: 2 }}>Learn</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => navitation.navigate('MockTest')} style={styles.area}>
                                <Image style={{ resizeMode: 'contain', width: '85%' }} source={EnergyLight} />
                                <Text style={{ color: '#fff', paddingTop: 4 }}>Mock Tests</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.area} onPress={() => navitation.navigate('Exams')}>

                                <Image style={{ resizeMode: 'contain', width: '85%' }} source={TaskLight} />
                                <Text style={{ color: '#fff' }}>Exams</Text>
                            </TouchableOpacity>
                        </View>


                    </View>
                </ImageBackground>

                <View style={{ bottom: 40, marginBottom: '15%' }}>

                    <TouchableOpacity onPress={() => navitation.navigate('Learn')}><View style={styles.slyder_test}>
                        <View style={{
                            padding: 30, backgroundColor: '#fff', borderRadius: 50, width: '26%', shadowColor: "#3A45F7",
                            shadowOffset: {
                                width: 0,
                                height: 9,
                            },
                            shadowOpacity: 0.48,
                            shadowRadius: 15.95,

                            elevation: 18,
                            alignSelf: 'center',
                            marginTop: 20
                        }}>
                            <Image style={{ resizeMode: 'contain', width: '100%' }} source={Vector1} />
                        </View>
                        <Text style={{ textAlign: 'center', fontWeight: 'bold', paddingTop: 15, fontSize: 18 }}>Learn</Text>
                        <Text style={{ textAlign: 'center', fontSize: 30, color: '#565FF4', paddingTop: 10 }}>40%</Text>
                        <Text style={{ textAlign: 'center', color: '#493F58' }}>lessons learned</Text>
                        <Image source={BoyLaptop} />
                    </View></TouchableOpacity>


                    <View>

                        <View style={{ ...styles.slyder_test, backgroundColor: '#EFE2FF' }}>
                            <View style={{
                                padding: 30, backgroundColor: '#fff', borderRadius: 50, width: '28%', shadowColor: "#3A45F7",
                                shadowOffset: {
                                    width: 0,
                                    height: 9,
                                },
                                shadowOpacity: 0.48,
                                shadowRadius: 15.95,

                                elevation: 18,
                                alignSelf: 'center',
                                marginTop: 20
                            }}>
                                <Image style={{ resizeMode: 'contain', width: '100%' }} source={MockTests} />
                            </View>
                            <Text style={{ textAlign: 'center', fontWeight: 'bold', paddingTop: 15, fontSize: 18 }}>Quizzes</Text>

                            <View style={styles.statistic_slyde}>
                                <View style={styles.completed_slyde}>
                                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'blue', textAlign: 'center' }}>21</Text>
                                    <Text style={{ color: '#9E9FBA' }}>Completed</Text>
                                </View>
                                <View style={styles.avarage_slyde}>
                                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'blue' }}>8,9 <Image source={strelka} /></Text>
                                    <Text style={{ color: '#9E9FBA' }}>Avg score</Text>
                                </View>
                            </View>

                            <Image style={{ alignSelf: 'flex-end' }} source={BgMTest} />
                        </View>

                    </View>

                    <View>

                        <View style={{ ...styles.slyder_test, backgroundColor: '#D3D6FF' }}>
                            <View style={{
                                padding: 30, backgroundColor: '#fff', borderRadius: 50, width: '27.5%', shadowColor: "#3A45F7",
                                shadowOffset: {
                                    width: 0,
                                    height: 9,
                                },
                                shadowOpacity: 0.48,
                                shadowRadius: 15.95,

                                elevation: 18,
                                alignSelf: 'center',
                                marginTop: 20
                            }}>
                                <Image source={Exams} />
                            </View>
                            <Text style={{ textAlign: 'center', fontWeight: 'bold', paddingTop: 15, fontSize: 18 }}>Exams</Text>
                            <View style={styles.statistic_slyde}>
                                <View style={styles.completed_slyde}>
                                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'blue', textAlign: 'center' }}>4</Text>
                                    <Text style={{ color: '#9E9FBA' }}>Completed</Text>
                                </View>
                                <View style={styles.avarage_slyde}>
                                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'blue' }}>7,9 <Image source={strelka} /></Text>
                                    <Text style={{ color: '#9E9FBA' }}>Avg score</Text>
                                </View>
                            </View>
                            <Image style={{ alignSelf: 'flex-end' }} source={GirlExams} />
                        </View>

                    </View>
                </View>





            </ScrollView>



        </View>

    );
}

const styles = StyleSheet.create({
    main_title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 5
    },
    main_content: {
        width: '86%',
        alignSelf: 'center',
        paddingBottom: 69
    },
    select_grade: {
        paddingTop: 30
    },
    select_grade_text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    all_grades: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12
    },
    grade_icon: {
        resizeMode: 'cover',
        width: '10%'
    },
    slider_title: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    slyder_test: {
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        width: '87%',
        borderRadius: 15,
        marginBottom: 50,
        backgroundColor: '#FFE1EC'
    },
    statistic_slyde: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10
    },
    area: {
        marginTop: 25,
        alignItems: 'center',
        width: '30%'
    },
    statistic_slyde: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15
    }

});