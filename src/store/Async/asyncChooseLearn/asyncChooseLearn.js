import { CHOOSELEARN } from './../../action/chooseLearnAction';

export const asyncChooseLearn = (token, learn) => {

    return async (dispatch) => {

        dispatch({ type: 'isLoading', payload: true })

        const chooseLearn = await fetch("https://stageapi.treblemusictheory.com/v1/Lessons/List", {
            method: "POST",
            headers: {
                Accept: "application/json", "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(learn),
        });
        const content = await chooseLearn.json();
        if (content.lessons) {
            dispatch({ type: 'isLoading', payload: false })
            dispatch(CHOOSELEARN(content))
        }

    }
}