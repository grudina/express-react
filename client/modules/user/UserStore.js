import {createStore, compose, devTools, useDispatchers, localStorageCache} from 'point-one'
import {reducers} from './reducer'
import {auth} from './actions/user'

let finalCreateStore = compose(
    localStorageCache("UserStore", ['identity']),
    useDispatchers(devTools("UserStore")),
    next => (reducer, initialState) => {
       let
           store = next(reducer, initialState),
           auth = store.getState().authenticated,
           dispatch = store.dispatch

       store.listen((state) => {
          if(state.authenticated && auth != state.authenticated) {
             console.log("user has been authenticated");
             console.log(state.authenticated);
             // console.dir(state.identity.login);
          }
       });

       return {
          ...store,
          dispatch
       }
    }
)(createStore);

export const UserStore = finalCreateStore(reducers, {
    forms: {auth: {}},
    authenticated: false,
    identity: false,
});

export const dispatch = UserStore.dispatch;

// 
window.auth = auth;
window.dispatch = dispatch;