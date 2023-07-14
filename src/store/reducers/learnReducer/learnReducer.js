let initialState = {
    area: {
        pagination: {
            pageNumber: 0,
            itemsPerPage: 100
        },
    },
    headerGrade: 1,
    loading: true,
    grades: [],
};

const GET_LEARN = 'GET_LEARN'
const GRADE = 'GRADE'
const AREA_NAME = 'AREA_NAME'
const SUB_AREA_NAME = 'SUB_AREA_NAME'

export const LernReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LEARN:
            return { ...state, grades: action.payload, loading: false }
        case GRADE:
            return { ...state, headerGrade: action.payload, area: { ...state.area, grade: `Grade ${action.payload + 1}` } }
        case AREA_NAME:
            return { ...state, area: { ...state.area, area: action.payload } }
        case SUB_AREA_NAME:
            return { ...state, area: { ...state.area, subArea: action.payload } }
        default:
            return { ...state }
    }
}