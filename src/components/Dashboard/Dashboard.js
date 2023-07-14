import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import React, { useState } from "react";


function Dashboard(props) {

    let deviceWidth = Dimensions.get('window').width

    let conaintWidth = deviceWidth / 4

    let wid = conaintWidth / 2

    let one = wid - (60 / 2)

    let two = (conaintWidth - 30) + conaintWidth / 2

    let three = (conaintWidth * 2 - 30) + conaintWidth / 2

    const [step, setStep] = useState([
        { title: 'Dashboard', description: 'This is your dashboard where you can see how you are doing', next: 'NEXT STEP  >', id: 1 },
        { title: 'Mock Tests', description: 'This is where you can take Mini quizzes to prepare for your Exams!', next: 'NEXT STEP  >', id: 2 },
        { title: 'Exams', description: 'This is the exam area. 75 questions Generated at random across the whole syllabus!', next: 'GOT IT  >', id: 3},
    ])
    const [stepId, setStepId] = useState(0)

    return (
        <View style={styles.dash}>
            <View style={{ width: deviceWidth - 30, backgroundColor: '#fff', alignSelf: 'center', bottom: 82, position: 'absolute', borderRadius: 20, paddingLeft: 30 }}>

                <View style={{ width: 30, height: 30, backgroundColor: '#fff', position: 'absolute', bottom: 0, left: stepId == 0 ? one : stepId == 1 ? two : stepId === 2 ? three : null, transform: [{ rotate: '45deg' }] }}></View>
                <View style={{ width: '90%' }}>
                    <Text style={{ paddingVertical: 25, fontWeight: 'bold', fontSize: 20 }}>{step[stepId].title}</Text>
                    <Text style={{ fontSize: 16 }}>{step[stepId].description}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginBottom: 30 }}>
                        <TouchableOpacity onPress={() => props.setDashboard(false)}><Text style={{ fontSize: 16, color: '#9394BD' }}>EXIT</Text></TouchableOpacity>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 16, color: '#9394BD' }}>{step[stepId].id} OF 3</Text>
                            <TouchableOpacity onPress={() => step[stepId].next == 'GOT IT  >' ? props.setDashboard(false) : setStepId(stepId + 1)}><Text style={{ fontSize: 16, color: '#565FF4', paddingLeft: 15 }}>{step[stepId].next}</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>

    );
}

export default Dashboard

const styles = StyleSheet.create({
    dash: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        position: 'absolute',
    }
});