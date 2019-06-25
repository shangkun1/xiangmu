import { combineReducers } from 'redux';
import scoreReducer from './scoreReducer';
import kemuReducer from './kemuReducer';
export default combineReducers({ score: scoreReducer, kemu: kemuReducer })