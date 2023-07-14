let initialState = {
    allQuation: [],
    quation: [],
    countQuation: 0,
    change_ans: false,
    isAns: [],
};

const START_EXAMS_ACTION = 'START_EXAMS_ACTION'
const quationAction = 'quationAction'
const CHANGE_ANS = 'CHANGE_ANS'
const IS_ANS = 'IS_ANS'

export const startExamsReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_EXAMS_ACTION:
            return {
                ...state,
                allQuation: action.payload
            }
        case quationAction:
            return {
                ...state,
                quation: state?.allQuation?.examQuestions[action.payload],
                countQuation: action.payload,
            }
        case CHANGE_ANS:
            return { ...state, change_ans: action.payload }
        case IS_ANS:
            return { ...state, isAns: action.payload }
        default:
            return { ...state }
    }
}
