import {SCREENS} from '../../navigation/screens';
import {merger} from '../../utils/functions';
import uiConstants from '../constants/uiConstants';

const initialState = {
    activePage: SCREENS.home,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case uiConstants.SET_CURRENT_PAGE:
            return merger(state, {activePage: action.page});
        default:
            return state;
    }
};

export default reducer;
