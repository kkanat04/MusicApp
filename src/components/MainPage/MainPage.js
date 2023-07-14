import { StyleSheet, Text, View, FlatList, ImageBackground, Image, ScrollView } from 'react-native';
import React, { useState, useEffect } from "react";
import Dashboard from '../Dashboard/Dashboard';
import Bg from '../../../assets/bottom-sheet-bg.png'
import Header from './../Header/Header';
import Learn from '../../../assets/lern.png'
import grade_2 from '../../../assets/Grade_2.png'
import grade_3 from '../../../assets/Grade_3.png'
import grade_4 from '../../../assets/Grade_4.png'
import grade_5 from '../../../assets/Grade_5.png'
import Carousel from "react-native-carousel-control";
import test_icon from '../../../assets/Group.png'
import strelka from '../../../assets/slyder_arrow.png'
import exams_slyder from '../../../assets/slyder_exams.png'
import subscription_icon from '../../../assets/subscription_icon.png'
import check_bg from '../../../assets/CheckBg.png'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Frame from '../../../assets/Frame.png'
import DachboardProfile from './../Header/DashboardProfile/DashboardProfile';
import { useDispatch } from 'react-redux';
import { CHANGE_PROFILE } from './../../store/action/dashProfile';




export default function MainPage(props) {
    const setTok = props.route.params.setTok

    const [dashboard, setDashboard] = useState(true)


    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <Image source={Frame} style={{ position: 'absolute', bottom: 30, right: 0, resizeMode: 'contain', width: '55%' }} />



                <ImageBackground imageStyle={{ borderBottomLeftRadius: 36, borderBottomRightRadius: 36 }} style={{ width: '100%' }} source={Bg}>
                    <Header setTok={setTok} data='MainPage' />
                    <View style={styles.main_content}>
                        <Text style={styles.main_title}>{'Welcome back \nyoung Mozart'}</Text>
                        <View style={styles.select_grade}>
                            <Text style={styles.slider_title}>Overviews</Text>
                        </View>
                    </View>
                </ImageBackground>

                <View style={{ marginBottom: '40%', bottom: 45 }}>

                    <View style={styles.slyder_test}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20, marginTop: 25 }}>
                            <Image style={{ resizeMode: 'contain', width: '27%', height: 70 }} source={Learn} />
                            <Text style={{ marginVertical: 10, fontSize: 18, fontWeight: 'bold', paddingLeft: 10 }}>lesson progress</Text>

                        </View>
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
                        <Text style={{ color: '#565FF4', paddingTop: 50, textAlign: 'center' }}>{'Go to mock tests >'}</Text>
                    </View>


                    <View style={styles.slyder_test}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20, marginTop: 25 }}>
                            <Image style={{ resizeMode: 'contain', width: '27%', height: 70 }} source={Learn} />
                            <Text style={{ marginVertical: 10, fontSize: 18, fontWeight: 'bold', paddingLeft: 10 }}>lesson progress</Text>

                        </View>
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
                        <Text style={{ color: '#565FF4', paddingTop: 50, textAlign: 'center' }}>{'Go to mock tests >'}</Text>
                    </View>


                    <View style={styles.slyder_test}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20, marginTop: 25 }}>
                            <Image style={{ resizeMode: 'contain', width: '27%', height: 70 }} source={Learn} />
                            <Text style={{ marginVertical: 10, fontSize: 18, fontWeight: 'bold', paddingLeft: 10 }}>lesson progress</Text>

                        </View>
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
                        <Text style={{ color: '#565FF4', paddingTop: 50, textAlign: 'center' }}>{'Go to mock tests >'}</Text>
                    </View>



                </View>



            </ScrollView>

            {dashboard ? <Dashboard setDashboard={setDashboard} /> : null}


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
        width: '100%',
        justifyContent: 'center',
        backgroundColor: '#fff',
        width: '87%',
        borderRadius: 15,
        marginBottom: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,

        elevation: 18,
        paddingBottom: 45
    },
    statistic_slyde: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20
    }

});