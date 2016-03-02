import React, {Component} from 'react'
import {listen} from 'point-one'
import {Nav, NavItem, Navbar, NavbarBrand, Col, Panel, ListGroup, ListGroupItem} from 'react-bootstrap'
import {UserStore, dispatch} from './../../user/UserStore'
import {auth, logout} from './../../user/actions/user'
import Home from './../pages/Home'

@listen(UserStore, ['identity'])
export default class MainPage extends Component {
    login() {
        dispatch(auth({login: "Test", password: "Test"}))
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
                <div id="content">
                    <div id="body">
                        {this.state.identity ? (
                            <div>
                                <h1>Ok you are loged in</h1>
                            </div> 
                        ) : (
                            <Home />
                        )}
                        
                    </div>
                    <div id="sidebar">
                        <Panel bsStyle="success" header="sidebar">
                            <h4>Album Name</h4>
                        </Panel>
                            <ListGroupItem href="#link1"><h5>Link 1</h5></ListGroupItem>
                            <ListGroupItem href="#link2"><h5>Link 1</h5></ListGroupItem>
                            <ListGroupItem href="#link3"><h5>Link 1</h5></ListGroupItem>
                            
                    </div>
                </div>
                <div className={`${this.state.identity ?  '' : 'hidden'}`} id="player">

                </div>
            </div>
        );
    }
}

                    