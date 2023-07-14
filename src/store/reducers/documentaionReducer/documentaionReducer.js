let initialState = {
    loading: false,
    documention: {}
};

const documention = 'documention'
const isLoading = 'isLoading'

export const documentionReducer = (state = initialState, action) => {
    switch (action.type) {
        case documention:
            return { ...state, documention: action.payload }
        case isLoading:
            return { ...state, loading: action.payload }
        default:
            return { ...state }
    }
}