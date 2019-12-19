import * as types from './types';

export const selectedLibrary = libraryId => {
    return {
        type: types.SELECT_LIBRARY,
        libraryId
    }
}