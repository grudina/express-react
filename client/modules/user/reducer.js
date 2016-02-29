import {concatReducers} from 'point-one'
import {authForm, user} from './reducers/user'

export const reducers = concatReducers({
   forms: concatReducers({auth: authForm}),
   identity: user
});
