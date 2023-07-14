import { GET_LEARN } from './../../action/learnAction';

export const asyncLern = (token) => {
    return async (dispatch) => {
    const lern = await fetch("https://stageapi.treblemusictheory.com/v1/Lessons/GetAvailableOptions", {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
    });
    const content = await lern.json();
    dispatch(GET_LEARN(content.availableGrades))
}

}