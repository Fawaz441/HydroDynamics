import {merger} from '../../utils/functions';
import authConstants from '../constants/authConstants';

const initialState = {
    isAuthenticated: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case authConstants.IS_AUTHENTICATED:
            return merger(state, {isAuthenticated: true});
        case authConstants.LOG_OUT:
            return initialState;
        default:
            return state;
    }
};

export default reducer;
