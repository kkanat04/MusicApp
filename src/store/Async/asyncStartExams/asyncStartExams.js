import { START_EXAMS_ACTION } from './../../action/startExamsAction';
import { quationAction } from './../../action/quationAction';

export const asyncStartExams = (token, data, navigation) => {
    return async (dispatch) => {
        const startExams = await fetch("https://stageapi.treblemusictheory.com/v1/Exam/Start", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(data),
        });
        const content = await startExams.json();
        console.log(content);
        if (content.examQuestions) {
            dispatch(START_EXAMS_ACTION(content))
            dispatch(quationAction(0))
            navigation.navigate('ExamsTest')
        }
    }
}