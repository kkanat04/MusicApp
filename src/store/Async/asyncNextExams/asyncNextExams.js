import { quationAction } from './../../action/quationAction';

export const asyncNextExams = (token, data, startExamsReducer) => {

    return async (dispatch) => {

        const nextExams = await fetch("https://stageapi.treblemusictheory.com/v1/Exam/AnswerQuestion", {
            method: "POST",
            headers: {
                Accept: "application/json", "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        });
        const content = await nextExams.json();
        console.log(content);

        if (startExamsReducer?.countQuation + 1 !== startExamsReducer?.allQuation?.examQuestions?.length) {
            dispatch(quationAction(startExamsReducer.countQuation + 1))
            console.log('dd');
        }
        dispatch({ type: 'IS_ANS', payload: [] })
    }
}