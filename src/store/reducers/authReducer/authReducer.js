let initialState = {};

const AUTH_USER = 'AUTH_USER'

export const Auth_user = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_USER :
            return {
                ...state,
                user: action.payload
            }
        default:
            return {...state}
    }
}
