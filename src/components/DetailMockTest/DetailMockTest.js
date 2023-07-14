import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';
import BgMockTest from '../../../assets/BgMTest.png'
import { Image } from 'react-native';
import Ellipse from '../../../assets/Ellipse.png'
import Header from './../Header/Header';
import { TouchableOpacity } from "react-native";
import Play from '../../../assets/Play.png'
import Group from '../../../assets/Group.png'
import Boys from '../../../assets/Boy_with_laptop.png'
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';


export default function DetailMockTest(props) {
    const subAreas = props.route.params
    const navigation = useNavigation();
    const dispatch = useDispatch()

    return (
        <>
            <ScrollView style={{ flex: 1 }}>
                <Header data='MockTest' />
                <View style={{ width: '100%', height: '100%' }}>

                    <Text style={{ fontWeight: 'bold', fontSize: 18, textAlign: 'center', paddingTop: 40, paddingBottom: 15 }}>{subAreas?.lessonName}</Text>
                    <Text style={{ textAlign: 'center', fontSize: 14, paddingBottom: 30 }}>Now select which area to take the test in!</Text>
                    <View style={{ alignItems: 'center', width: '100%' }}>
                        {subAreas?.areas.map((el, i) => {
                            return (
                                <View key={i} style={{
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 6,
                                    },
                                    shadowOpacity: 0.37,
                                    shadowRadius: 7.49,

                                    elevation: 12, width: '93%', borderRadius: 16, backgroundColor: '#fff', padding: 25, marginBottom: 10
                                }}>
                                    <TouchableOpacity onPress={() => { dispatch({ type: 'SUB_AREA_NAME', payload: el.name }), navigation.navigate('TestLines', {area: subAreas, name: el.name})}}>
                                        <View style={{ marginBottom: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Image source={el.img} style={{ marginRight: 15 }} />
                                                <Text style={{ fontWeight: 'bold' }}>{el.name}</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Image style={{ marginRight: 5 }} source={Play} />
                                                <Text>Learn all</Text>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text style={{ textTransform: 'uppercase', color: '#565FF4' }}>{el.oneText}</Text>
                                            <Text style={{ textTransform: 'uppercase', color: '#565FF4' }}>{el.twoText}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )
                        })}

                    </View>
                    <View style={{ marginBottom: 40 }}>
                        <Image source={BgMockTest} style={{ alignSelf: 'flex-end' }} />
                    </View>
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({});