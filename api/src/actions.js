import * as types from './types';

export const getToken = token => {

	return {
		type: types.GET_TOKEN,
		token
	};
}