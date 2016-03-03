import React, {Component} from 'react'
import {listen} from 'point-one'
import {Button, Input, Panel} from 'react-bootstrap'
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
                    <Panel id="register" header="Registration">
                        <form >
                            <Input type="text" label="Name" placeholder="Enter UserName" />
                            <Input type="email" label="Email Address" placeholder="Enter Useremail" />
                            <Input type="password" label="Password" />
                            <Button>Register</Button>
                            <Button onClick={this.login}>Login</Button>  
                        </form>
                    </Panel>
                </div>
            )
        );
    }
}