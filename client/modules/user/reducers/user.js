import {concatEventReducers} from 'point-one'
import {USER_LOGIN, USER_LOGOUT} from './../constants'


export let authForm = concatEventReducers({
    [USER_LOGIN]: (state = {}, {ok, data, token}) => ({ok, data, token}),
    [USER_LOGOUT]: (state = {}) => ({})
});

export const user = concatEventReducers({
    [USER_LOGIN]: (state = {}, {ok, data, token}) => ({...data}),
    [USER_LOGOUT]: (state = false) => false
});

export const authenticated = concatEventReducers({
    [USER_LOGIN]: (state = {}, {ok, data, token}) => ok,
    [USER_LOGOUT]: (state = false) => false
})


export let auth = function(state = false, event) {
    switch(event.type) {
        case USER_LOGIN: {
            return event.ok;
        }
        case USER_LOGOUT: {
            return false
        }
    }
};