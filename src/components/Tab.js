import React, { useEffect } from "react";
import { StyleSheet, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pay from "./Pay/Pay";
import MainPage from "./MainPage/MainPage";
import { View } from "react-native";
import Footer from './Footer/Footer';
import MockTest from './MockTest/MockTest';
import DetailMockTest from './DetailMockTest/DetailMockTest';
import Exams from "./Exams/Exams";
import DetailLearnSection from "./Detail/DetailLearnSection";
import ChooseLearn from "./ChooseLearn/ChooseLearn";
import Documentation from "./Documentation/Documentation";
import Profile from './Profile/Profile';
import { useSelector } from 'react-redux';
import DachboardProfile from './Header/DashboardProfile/DashboardProfile';
import TestLines from './TestLines/TestLines';
import MainTest from './MainTest/MainTest';
import Learn from './Learn/Learn';
import Grade from './Grade/Grade';
import ExamsTest from './ExamTests/ExamTests';
import { useRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function Screens(props) {
    const setTok = props.route.params.setTok
    const Stack = createNativeStackNavigator();
    const dash = useSelector(state => state.profileReducer.dsahProfile)

    return (
        <View style={{ flex: 1 }}>
            {dash ? <DachboardProfile setTok={setTok} /> : null}
            <Stack.Navigator>
                <Stack.Screen name={'MainPage'} component={MainPage} options={{ headerShown: false }} initialParams={{ setTok: setTok }} />
                <Stack.Screen name={'Pay'} component={Pay} options={{ headerShown: false }} />
                <Stack.Screen name={'Learn'} component={Learn} options={{ headerShown: false }} />
                <Stack.Screen name={'MockTest'} component={MockTest} options={{ headerShown: false }} />
                <Stack.Screen name={'DetailMockTest'} component={DetailMockTest} options={{ headerShown: false }} />
                <Stack.Screen name={'Exams'} component={Exams} options={{ headerShown: false }} />
                <Stack.Screen name={'DetailLearnSection'} component={DetailLearnSection} options={{ headerShown: false }} />
                <Stack.Screen name={'ChooseLearn'} component={ChooseLearn} options={{ headerShown: false }} />
                <Stack.Screen name={'Documentation'} component={Documentation} options={{ headerShown: false }} />
                <Stack.Screen name={'Profile'} component={Profile} options={{ headerShown: false }} />
                <Stack.Screen name={'TestLines'} component={TestLines} options={{ headerShown: false }} />
                <Stack.Screen name={'Grade'} component={Grade} options={{ headerShown: false }} initialParams={{ setTok: setTok }} />
                <Stack.Screen name={'MainTest'} component={MainTest} options={{ headerShown: false }} />
                <Stack.Screen name={'ExamsTest'} component={ExamsTest} options={{ headerShown: false }} />
            </Stack.Navigator>

        </View>

    );
}

const FooterTab = createBottomTabNavigator()
export default function Tab(props) {
    const setTok = props.route.params.setTok
    return (
        <FooterTab.Navigator tabBar={(props) => <Footer {...props} />}>
            <FooterTab.Screen 
            name="Screen"
            component={Screens}
            options={{headerShown: false}}
            initialParams={{
                setTok: setTok
            }}
            />
        </FooterTab.Navigator>
    )
}
const styles = StyleSheet.create({});