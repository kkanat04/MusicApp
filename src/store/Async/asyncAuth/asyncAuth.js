import { AUTH_USER } from "../../action/authAction";
import { Alert } from 'react-native';

export const asyncAuth = (data, navigation, storeData, agree, setTok) => {

    return async (dispatch) => {

        const auth = await fetch("https://stageapi.treblemusictheory.com/v1/Auth/LoginWithCredentials", {
            method: "POST", headers: {
                Accept: "application/json", "Content-Type": "application/json",
            }, body: JSON.stringify(data),
        });
        const statusRequest = auth.status

        if (statusRequest == 401) {
            alert('Incorrect email or password')
        }

        const content = await auth.json();


        if (content.accessToken) { 
            if (agree) {
                storeData(content.accessToken)
            }
            const answerReq = {
                accessToken: content.accessToken,
                authTimeout: content.authTimeout,
                claims: content.claims,
                refreshToken: content.refreshToken,
                roles: content.roles
            }
            dispatch(AUTH_USER(answerReq))
            setTok(true)
        }
        if (content.errors) {
            Alert.alert('Error','Incorrect email or password')
        }

    }
}