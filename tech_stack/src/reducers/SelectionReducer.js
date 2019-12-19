import * as types from './types';

var INITIAL_STATE = null;

const selectedItem = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.SELECT_LIBRARY:
            return action.libraryId;
        default:
            return state;
    }
}


export default selectedItem;