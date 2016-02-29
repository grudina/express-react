import {concatEventReducers} from 'point-one'
import {USER_LOGIN, USER_LOGOUT} from './../constants'


export let authForm = concatEventReducers({
    [USER_LOGIN]: (state = {}, {ok, data, token}) => ({ok, data, token}),
    [USER_LOGOUT]: (state = {}) => ({})
});

export const user = concatEventReducers({
    [USER_LOGIN]: (state = {}, {ok, data, token}) => ({...data}),
    [USER_LOGOUT]: (state = false) => false,
})