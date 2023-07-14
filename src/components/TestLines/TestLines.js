import React from "react";
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';
import BgMockTest from '../../../assets/BgMTest.png'
import { Image } from 'react-native';
import Header from './../Header/Header';
import { TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import left_arrow from '../../../assets/left_arrow.png'
import btn_arrow_right from '../../../assets/btn_arrow_right.png'




export default function TestLines(props) {

    const subAreas = props.route.params.area
    const name = props.route.params.name


    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>

            <ScrollView>

                <Header data='MockTest' />

                <TouchableOpacity style={styles.back_icon} onPress={() => navigation.navigate('DetailMockTest', subAreas)}>
                    <Image source={left_arrow} />
                    <Text style={{ left: 10, fontSize: 17 }}>Back</Text>
                </TouchableOpacity>
                <View style={styles.main_content}>
                    <Text style={{ color: '#9394BD', fontSize: 16, }}>Mock Tests 1</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 24, paddingTop: 32, textAlign: 'center' }}>{`You are taking a ${name} mock test`}</Text>
                    <Text style={{ fontSize: 16, paddingTop: 14 }}>10 questions per mini test</Text>
                    <TouchableOpacity style={styles.start_test} onPress={() => navigation.navigate('MainTest',)} >
                        <Text style={{ fontSize: 17, color: '#ffff' }}>{'Start the tests'}</Text>
                        <Image style={{ left: 10, top: 1 }} source={btn_arrow_right} />
                    </TouchableOpacity>
                    <Text style={{ marginTop: 34 }}>Cancel</Text>
                </View>





            </ScrollView>
            <Image source={BgMockTest}
                style={styles.image}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    back_icon: {
        alignSelf: 'center',
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        shadowColor: "#000",

    },
    main_content: {
        height: '50%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    start_test: {
        backgroundColor: '#565FF4',
        paddingHorizontal: 30,
        paddingVertical: 10,
        marginTop: 30,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        flex: 1,
        position: 'absolute',
        bottom: 30,
        right: 0,
        zIndex: -1,
    },
});