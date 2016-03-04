import React, {Component} from 'react'
import {listen} from 'point-one'
import {Nav, NavItem, Navbar, NavbarBrand, Button, ButtonToolbar,
    Panel, ButtonGroup, ListGroupItem, Glyphicon} from 'react-bootstrap'
import {UserStore, dispatch} from './../../user/UserStore'
import {auth, logout} from './../../user/actions/user'
import Sidebar from './Sidebar'
import Home from './../pages/Home'
import UserList from './../pages/UserList'
import LoginForm from './../../user/components/LoginForm'
import Login from './../../user/components/Login'

@listen(UserStore, ['identity'])
export default class MainPage extends Component {
    login() {
        dispatch(auth({login: "Test", password: "Test"}))
    }
    logout() {
        dispatch(logout())
    }
    render() {
        return (
            <div id="application">
                <div id="navbar">
                    <Navbar fluid>
                        <Navbar.Header>
                            <Nav>
                                <NavbarBrand>Music</NavbarBrand>
                            </Nav>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav pullRight>
                                {this.state.identity ? [
                                    <NavItem key="1" bsStyle="warning" bsSize="small" onClick={this.logout}>Logout</NavItem>,
                                    <NavItem key="2" bsStyle="warning" bsSize="small">Profile</NavItem>
                                ] : [
                                    <NavItem key="1" bsStyle="warning" bsSize="small" onClick={this.login}>Login</NavItem>,
                                    <NavItem key="2" bsStyle="warning" bsSize="small" >register</NavItem>
                                ]}

                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div id="content">
                    <div id="body">
                        {this.state.identity ? (
                            <Login />
                        ) : (
                            <Login />
                        )}
                        
                    </div>
                    <Sidebar />
                </div>
                <div className={`${this.state.identity ?  '' : 'hidden'}`} id="player">
                    <div id="buttons">
                        <ButtonToolbar>
                            <Button><Glyphicon glyph="step-backward" /></Button>
                            <Button><Glyphicon glyph="backward" /></Button>
                            <Button><Glyphicon glyph="stop" /></Button>
                            <Button><Glyphicon glyph="play" /></Button>
                            <Button><Glyphicon glyph="pause" /></Button>
                            <Button><Glyphicon glyph="forward" /></Button>
                            <Button><Glyphicon glyph="step-forward" /></Button>
                        </ButtonToolbar>
                    </div>
                </div>
            </div>
        );
    }
}

                    