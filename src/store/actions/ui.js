import uiConstants from '../constants/uiConstants';

export const setCurrentPage = page => ({
    type: uiConstants.SET_CURRENT_PAGE,
    page,
});
