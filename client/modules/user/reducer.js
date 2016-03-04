import {concatReducers} from 'point-one'
import {authForm, user, authenticated, auth, something} from './reducers/user'

export const reducers = concatReducers({
    forms: concatReducers({auth: authForm}),
    identity: user, 
    authenticated
});
