import React, {Component} from 'react'
import {listen} from 'point-one'
import {Button} from 'react-bootstrap'
import {UserStore, dispatch} from './../../user/UserStore'
import {auth, logout} from './../../user/actions/user'

@listen(UserStore, ['identity'])
export default class MainPage extends Component {
    login() {
        dispatch(auth({login: "Test", password: "Test"}))
    }
    render() {
        return (
            this.state.identity ? (
                <div>
                    OK! You are loged in
                </div>
            ) : (
                <div>
                    <p>Please Log In</p>
                    <Button bsStyle="primary" onClick={this.login} >Login</Button>
                </div>
            )
        );
    }
}