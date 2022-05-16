import authConstants from '../constants/authConstants';

export const logIn = () => ({type: authConstants.IS_AUTHENTICATED});
export const logOut = () => ({type: authConstants.LOG_OUT});
