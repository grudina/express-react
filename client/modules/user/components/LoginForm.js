import React, {Component} from 'react'
import {listen} from 'point-one'
import {Button} from 'react-bootstrap'
import {UserStore, dispatch} from './../UserStore'
import {auth, logout} from './../actions/user'

@listen(UserStore, ['auth'], state => state.forms)
@listen(UserStore, ['identity'])
export default class LoginForm extends Component {
    login() {
        dispatch(auth({login: "Test", password: "Test"}))
    }
    logout() {
        dispatch(logout())
    }
    render() {
        return (
            this.state.identity ? (
                <div>
                    Ok
                    <Button onClick={this.logout}>Logout</Button>
                </div>
            ) : (
                <div>
                    False
                    <Button onClick={this.login}>Login</Button>
                </div>
            )
        );
    }
}