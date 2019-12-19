import { combineReducers } from 'redux';
import * as types from './types';

var INITIAL_STATE = [];

const tokens = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case types.GET_TOKEN: 
			state.push(action.token);
			return [...state];
		default:
			return [...state];
	}
}

export default combineReducers({
	tokens
});