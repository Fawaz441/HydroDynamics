import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import auth from './reducers/authReducer';

const rootReducer = combineReducers({auth});

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware(thunk),
});
export default store;
