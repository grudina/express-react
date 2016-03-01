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
                    <h1>You are loged in</h1>
                </div>
            ) : (
                <div>
                    <Navbar inverse className="navbar-form navbar-fixed-top">
                        >
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href="#">React-Bootstrap</a>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav>
                                <NavItem eventKey={1} href="#">Link</NavItem>
                                <NavItem eventKey={2} href="#">Link</NavItem>
                                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                                    <MenuItem eventKey={3.1}>Action</MenuItem>
                                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                    <MenuItem divider />
                                    <MenuItem eventKey={3.3}>Separated link</MenuItem>
                                </NavDropdown>
                            </Nav>
                            <Nav pullRight>
                                <Button bsStyle="primary" onClick={this.login}>Login</Button>
                                <Button bsStyle="primary">register</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            )
        );
    }
}

                    