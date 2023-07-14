import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk'
import {registerReducer} from "./reducers/registerReducer/registerReducers";
import {Auth_user} from "./reducers/authReducer/authReducer";
import { profileReducer } from './reducers/profileReducer/profileReducer';
import { LernReducer } from './reducers/learnReducer/learnReducer';
import { ChooseLearnReducer } from './reducers/chooseLearnReducer/choseLearnReducer';
import { documentionReducer } from './reducers/documentaionReducer/documentaionReducer';
import { startExamsReducer } from './reducers/startExamsReducer/startExamsReducer';

const reducers = combineReducers({
    registerReducer,
    Auth_user,
    profileReducer,
    LernReducer,
    ChooseLearnReducer,
    documentionReducer,
    startExamsReducer
})

let store = createStore(reducers, applyMiddleware(thunk));

export default store