import React, {Component} from 'react'
import {listen} from 'point-one'
import {Button, ButtonGroup, ButtonInput, Input, Jumbotron, Nav, NavItem, Navbar, NavbarBrand,
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
            <div>
                <div>
                    <Navbar fluid>
                        <Navbar.Header>
                            <Nav>
                                <NavbarBrand>Music</NavbarBrand>
                            </Nav>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav pullRight>
                                {this.state.identity ? (
                                    <NavItem bsStyle="warning" bsSize="small" onClick={this.login}>Profile</NavItem>
                                ) : [
                                    <NavItem key="1" bsStyle="warning" bsSize="small" onClick={this.login}>Login</NavItem>,
                                    <NavItem key="2" bsStyle="warning" bsSize="small" >register</NavItem>
                                ]}

                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div className="application-body">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

                    