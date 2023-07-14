import {Image, StyleSheet, View} from 'react-native';
import Login from './../Login/Login';
import Register from "../Register/Register";
import FogottenPassword from "../FogottenPassword/FogottenPassword";
import MagicLink from "../MagicLink/MagicLink";
import React, {useState} from "react";
import authBg from "../../../assets/BG.png";
import {ImageBackground} from "react-native";
import Logo from "../../../assets/logo.png";
import {styles} from "./AuthCss";

export default function Auth(props) {
    const setTok = props.route.params.setTok
    const [eye, setEye] = useState(false)
    const [agree, setAgree] = useState(false);
    const [regis, setRegis] = useState('login');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [inp, setInp] = useState('')
    return (<View style={{flex: 1}}>
        <ImageBackground source={authBg} resizeMode="cover" style={{flex: 1, alignContent: 'center'}}>
            <View style={styles.logo_block}>
                <Image style={styles.logo} source={Logo}/>
            </View>
            {regis === 'login' ?
                <Login setTok={setTok} inp={inp} email={email} regis={regis} agree={agree} eye={eye}
                       setEye={setEye}
                       setAgree={setAgree} setRegis={setRegis} setEmail={setEmail}
                       setName={setName}
                       setInp={setInp}/> : regis === 'regis' ?
                    <Register setTok={setTok} name={name} inp={inp} email={email} regis={regis} agree={agree} eye={eye}
                              setEye={setEye}
                              setAgree={setAgree} setRegis={setRegis} setEmail={setEmail} setName={setName}
                              setInp={setInp}/> : regis === 'Fogotten' ?
                        <FogottenPassword setRegis={setRegis}/> : regis === 'LoginLink' ?
                            <MagicLink setRegis={setRegis}/> : null}
        </ImageBackground>
    </View>);
}