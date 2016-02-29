import {createStore, compose, devTools, useDispatchers, localStorageCache} from 'point-one'
import {reducers} from './reducer'
import {auth} from './actions/user'

let finalCreateStore = compose(
    localStorageCache("UserStore", ['identity']),
    useDispatchers(devTools("UserStore"))
)(createStore);

export const UserStore = finalCreateStore(reducers, {
   forms: {auth: {}},
   identity: false
});

export const dispatch = UserStore.dispatch;

// 
window.auth = auth;
window.dispatch = dispatch;