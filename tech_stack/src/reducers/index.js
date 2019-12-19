import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import selectedItem from './SelectionReducer';
export default combineReducers({
    libraries: LibraryReducer,
    selectedItem
});