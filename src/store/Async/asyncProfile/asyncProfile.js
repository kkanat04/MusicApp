import { PROFILE_GET } from './../../action/profileAction';

export const asyncProfile = (token) => {

    return async (dispatch) => {

        const profile = await fetch("https://stageapi.treblemusictheory.com/v1/Profile/Get", {
            method: "GET", headers: {
                Accept: "application/json", "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
        });
        const content = await profile.json();
        console.log(content);
        dispatch(PROFILE_GET(content))

    }
}