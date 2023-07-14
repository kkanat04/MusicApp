import { Alert } from 'react-native';

export const changePass = async (data, token, setChPass) => {

    const changePassword = await fetch("https://stageapi.treblemusictheory.com/v1/Auth/UpdatePassword", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data),
    });
    const content = await changePassword.json();
    console.log(content);

    if (content.errors) {
        Alert.alert('Error', content.errors[0].ErrorMessage)
    }
    if (Object.keys(content).length == 0) {
        Alert.alert('Success', 'You have successfully changed your password')
        setChPass(false)
    }
}