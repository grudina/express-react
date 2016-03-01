import React, {Component} from 'react'
import {listen} from 'point-one'
import {Button, ButtonGroup, ButtonInput, Input, Jumbotron, Nav, NavItem, Navbar, 
    MenuItem, NavDropdown, ListGroup, ListGroupItem} from 'react-bootstrap'
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
                    <Navbar className="navbar-form navbar-fixed-top pills">
                        <Navbar.Header>
                            <Nav>
                                <h1>Music</h1>
                            </Nav>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav pullRight>
                                <Button bsStyle="warning" bsSize="small" onClick={this.login}>Profile</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            ) : (
                <div>
                    <Navbar className="navbar-form navbar-fixed-top pills">
                        <Navbar.Header>
                            <Nav>
                                <h1>Music</h1>
                            </Nav>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav pullRight>
                                <Button bsStyle="warning" bsSize="small" onClick={this.login}>Login</Button>
                                <Button bsStyle="warning" bsSize="small" >register</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            )
        );
    }
}

                    