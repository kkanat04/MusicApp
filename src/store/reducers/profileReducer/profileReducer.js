let initialState = {
    loading: true,
    dsahProfile: false
};

const PROFILE_GET = 'PROFILE_GET'
const CLEAR_PROFILE = 'CLEAR_PROFILE'
const CHANGE_PROFILE = 'CHANGE_PROFILE'

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_GET : 
        return {...state, profile: action.payload, loading: false}
        case CLEAR_PROFILE :
            return {...state, profile: {}, loading: true}
            case CHANGE_PROFILE :
                return {...state, dsahProfile: action.payload}
        default:
            return { ...state }
    }
}
