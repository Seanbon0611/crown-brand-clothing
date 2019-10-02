import { SET_CURRENT_USER } from './UserTypes';

export const setCurrentUser = user => ({
    type: SET_CURRENT_USER,
    payload: user
})