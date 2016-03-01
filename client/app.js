import {dispatch, UserStore} from './modules/user/UserStore'
import {render} from 'react-dom'
import React from 'react'

import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { createHistory } from 'history'
import { replacePath, syncReduxAndRouter, routeReducer } from 'point-simple-router'
import RouterStore from './modules/application/RouterStore'

import Layout from './modules/application/pages/Layout'
import LoginForm from './modules/user/components/LoginForm' 
import MainPage from './modules/application/components/MainPage'

const history = browserHistory

syncReduxAndRouter(browserHistory, RouterStore)

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={MainPage}>
            <IndexRoute component={Layout}/>
        </Route>
    </Router>,
    document.querySelector("#app")/*getElementById('mount')*/
)

// render(<LoginForm />, document.querySelector("#app"));