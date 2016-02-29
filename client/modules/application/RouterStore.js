import {createHistory} from 'history'
import {routeReducer} from 'point-simple-router'
import {createStore, concatReducers, devTools, compose, useDispatchers} from 'point-one'

const reducer = concatReducers({
    routing: routeReducer
});
const finalCreateStore = compose(
    useDispatchers(devTools('Router'))
)(createStore);

export const store = finalCreateStore(reducer, {routing: {}});
export const dispatch = store.dispatch;
export const history = createHistory();
export default store