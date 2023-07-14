import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import exams_pictur from '../../../assets/exams_icon.png'
import Girl from '../../../assets/Girl_Exams.png'
import Header from '../Header/Header';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { asyncStartExams } from './../../store/Async/asyncStartExams/asyncStartExams';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';


function Exams() {

    const navigation = useNavigation()

    const learnGet = useSelector(state => state.LernReducer.headerGrade)
    const tokenAuth = useSelector(state => state.Auth_user.user)
    const RegisterToken = useSelector(state => state.registerReducer.user)

    const dispatch = useDispatch()

    async function startExams() {
        const data = {
            "grade": `Grade ${learnGet + 1}`,
            "area": null,
            "subArea": null,
            "examType": "exam",
            "questionCount": null
        }
        const value = await AsyncStorage.getItem('remember')
        if (value) {
            dispatch(asyncStartExams(value, data, navigation))
        }
        else if (tokenAuth) {
            dispatch(asyncStartExams(tokenAuth.accessToken, data, navigation))
        }
        else if (RegisterToken) {
            dispatch(asyncStartExams(RegisterToken.accessToken, data, navigation))
        }
    }

    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'rgba(44, 53, 130, 1)' }}>
            <Header data={'Exams'} />
            <View style={styles.exams_main}>
                <Text style={styles.grade_1}>{`Grade ${learnGet + 1}`}</Text>
                <View style={styles.exam_icon}><Image style={styles.icon} source={exams_pictur} /></View>
                <Text style={styles.main_title} >Let's put all that hard work into practice!</Text>
                <Text style={styles.second_title} >Exams contain 75 randomly generated question from the syllabus</Text>

                <View style={styles.exams_statistic}>
                    <View style={styles.exams_taken}>
                        <Text style={{ fontSize: 36, color: 'white', textAlign: 'center' }}>6</Text>
                        <Text style={{ color: 'white', fontSize: 12 }}>Exams taken</Text>
                    </View>

                    <View>
                        <Text style={{ fontSize: 36, color: 'white', textAlign: 'center' }}>8,9</Text>
                        <Text style={{ color: 'white', fontSize: 12 }}>Avg score</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={startExams} style={styles.exam_button}><Text style={{ color: 'white', fontSize: 14, textAlign: 'center', }}>Take an exam</Text></TouchableOpacity>
            </View>
            <Image style={styles.girl_bg} source={Girl} />
        </ScrollView>
    )
}

export default Exams



const styles = StyleSheet.create({

    exams_main: {
        alignItems: 'center'
    },
    grade_1: {
        color: '#FBF9FF', fontSize: 17, paddingTop: 30
    },
    exam_icon: {
        height: 120, width: 120, borderRadius: 500, borderColor: '#4A53E4',
        borderWidth: 1, marginTop: 40, justifyContent: 'center', alignItems: 'center',
    }, icon: {
        flex: 1, width: '40%', resizeMode: 'contain'
    }, main_title: {
        fontSize: 24, width: '80%', textAlign: 'center', color: '#fff', paddingVertical: 20, fontWeight: 'bold'
    }, second_title: {
        width: '80%', textAlign: 'center', color: '#fff', fontSize: 16
    },
    exams_statistic: {
        flexDirection: 'row', justifyContent: 'space-around', width: '90%', paddingTop: 20
    }, exam_button: {
        zIndex: 1,
        alignSelf: 'center',
        marginTop: 30,
        backgroundColor: '#565FF4', padding: 13, width: '50%', borderRadius: 8,
        shadowColor: "#7176FF",
        shadowOffset: {
            width: 0,
            height: 10,
        }, shadowOpacity: 0.51,
        shadowRadius: 13.16,
        elevation: 20,
    },
    girl_bg: {
        width: '70%',
        height: 300,
        alignSelf: 'flex-end',
        bottom: 30,
    },



});