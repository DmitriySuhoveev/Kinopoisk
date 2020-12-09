import {authorizationReducer} from './isLogged';
import {moviesManage} from './moviesManage';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    authorizationReducer,
    moviesManage,
})

export default allReducers;