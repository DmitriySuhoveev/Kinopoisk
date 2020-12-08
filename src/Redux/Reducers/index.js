import {authorizationReducer} from './isLogged';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    authorizationReducer
})

export default allReducers;