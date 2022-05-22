import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import auth from './reducers/authReducer';
import ui from './reducers/uiReducer';

const rootReducer = combineReducers({auth, ui});

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware(thunk),
});
export default store;
