import { documention } from './../../action/documentationAction';

export const asyncDocumentation = (id, token) => {

    return async (dispatch) => {
        dispatch({ type: 'isLoading', payload: true })
        const documentation = await fetch(`https://stageapi.treblemusictheory.com/v1/Lessons/Get?Id=${id}`, {
            method: "GET", headers: {
                Accept: "application/json", "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
        });
        const content = await documentation.json();
        if (content.lesson) {
            dispatch(documention(content))
            dispatch({ type: 'isLoading', payload: false})
        }

    }
}