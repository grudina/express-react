import {USER_LOGIN, USER_LOGOUT} from './../constants'

export const auth = (login, password) => dispatch => {
    setTimeout(() => dispatch({type: USER_LOGIN, ok: true, data: {login, password}, token: {}}), 2000)
};

export const logout = () => ({type: USER_LOGOUT});