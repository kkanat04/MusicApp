import { CREATE_USER } from "../../action/rediaterAction";
import { Alert } from 'react-native';

export const createUserFetch = (data, navigation, storeData, agree, setTok) => {

    return async (dispatch) => {

        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let valide = re.test(data.email);

        if (valide === true) {
            const register = await fetch("https://stageapi.treblemusictheory.com/v1/Auth/Register", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const content = await register.json();

            console.log(content);
            if (content.isSuccess === false) {
                if (content.errors) {
                    Alert.alert(
                        "Error",
                        content.errors[0].ErrorMessage
                    )
                }
            }

            else if (content.isSuccess === true) {
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
                dispatch(CREATE_USER(answerReq))
                setTok(true)
            }
        } else {
            alert('Email invalid')
        }


    }
}