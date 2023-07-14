let initialState = {};

const CREATE_USER = 'CREATE_USER'

export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER :
            return {
                ...state,
                user: action.payload
            }
        default:
            return {...state}
    }
}
