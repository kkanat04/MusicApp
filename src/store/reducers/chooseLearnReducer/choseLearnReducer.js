let initialState = {
    loading: true,
    chooseLearn: {}
};

const CHOOSE_LEARN = 'CHOOSELEARN'
const isLoading = 'isLoading'

export const ChooseLearnReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHOOSE_LEARN:
            return { ...state, chooseLearn: action.payload}
            case isLoading :
                return {...state, loading: action.payload}
        default:
            return { ...state }
    }
}