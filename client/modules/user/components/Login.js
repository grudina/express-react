import React, {Component} from 'react'
import {Modal, Button, Popover, Tooltip, Input } from 'react-bootstrap'
import {listen} from 'point-one'
import {UserStore, dispatch} from './../UserStore'
import {auth, logout} from './../actions/user'

@listen(UserStore, ['identity'])
export default class Login extends Component {
    constructor() {
        super();
        
        this.state = {
            showModal: false,
            name: '',
            username: '',
            email: '',
            password: ''
        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.usernameChange = this.usernameChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
    }
    
    close() {
        this.setState({ showModal: false });
    };
    
    open() {
        this.setState({ showModal: true });
    };
    
    nameChange(e) {
        this.setState({name: e.target.value});
    };
    
    usernameChange(e) {
        this.setState({username: e.target.value});
    };

    emailChange(e) {
        this.setState({email: e.target.value});
    };

    passwordChange(e) {
        this.setState({password: e.target.value});
    }
    
    
    handleClick(e) {
        let body = 'name=' + this.state.name + '&email=' + this.state.email + 
            '&password=' + this.state.password + '&username=' + this.state.username;
           console.log(body);
        fetch('/api/user/body')
            .then(function(response) {
                console.log(response);
                return response.json();
            })
            .then(function(data) {
                console.log(data);
            })
            .catch( alert );
        console.log(this.state);
    }

    render() {
        let popover = <Popover id="_popover" title="popover">very popover. such engagement</Popover>;
        let tooltip = <Tooltip id="tooltip_">wow.</Tooltip>;

        return (
            <div id="register">
                <h4>Registration and Login</h4>
                {this.state.identity ? (
                    <Button bsStyle="success" onClick={this.open}>Login</Button>
                ) : [
                    <Button bsStyle="info" key="1" onClick={this.open}>Register</Button>,
                    <Button id="regis" bsStyle="success" key="2" onClick={this.open}>Login</Button>
                ]}
                

                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            {this.state.identity ? (
                                <div>
                                    <h4> Login Form </h4>
                                </div>
                            ) : (
                                <div>
                                    <h4> Registration Form </h4>
                                </div>
                            )}
                        </Modal.Title>
                    </Modal.Header>
                    <hr/>
                    <Modal.Body>
                        
                        {!this.state.identity ? [
                            <Input key="1" type="text" label="Name" placeholder="Enter Name" 
                                   value={this.state.name} onChange={this.nameChange}/>,
                            <Input key="2" type="text" label="UserName" placeholder="Enter UserName"
                                    value={this.state.username} onChange={this.usernameChange}/>,
                        ] : (
                            <h4>You have been registered. Please Login</h4>
                            )
                        }
                        <Input type="email" label="Email Address" placeholder="Enter Useremail"
                               value={this.state.email} onChange={this.emailChange}/>
                        <Input type="password" label="Password"
                               value={this.state.password} onChange={this.passwordChange}/>

                    </Modal.Body>
                    <Modal.Footer>
                        {this.state.identity ? (
                            <Button bsStyle="success" onClick={this.login}>Login</Button>
                        ) : [
                            <Button bsStyle="info" key="1" onClick={this.handleClick}>Register</Button>,
                            <Button id="regis" bsStyle="success" key="2" onClick={this.open}>Login</Button>
                        ]}
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}