'use strict';
import React from 'react';
import {render} from 'react-dom';

export default class Calc extends React.Component {
    constructor() {
        super();
        this.state = {text: ''};
        this.onChange = this.onChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick(event) {
        let text = encodeURIComponent(this.state.text);
        //let res = this.state.text.match(/[a-zа-яё\s\.\@\=\/]+[\d()\d]+/gi);
        let xmlhttp = new XMLHttpRequest();
        console.log(text);
        xmlhttp.open('GET', '/api/search?inputVal=' + text, true);
        xmlhttp.onreadystatechange = function() {

            if (xmlhttp.readyState == 4) {
                if(xmlhttp.status == 200) {
                    let result = xmlhttp.responseText;
                    alert(result);
                }
            }
        };
        xmlhttp.send();
    };
    
    onChange(e) {
        this.setState({text: e.target.value});
    };

    render() {
        return (
            <div className="component-wrapper">
                <input type="text" id="input" onChange={this.onChange.bind(this.state.text)} value={this.state.text}/>
                <button  type="submit" className="button" onClick={this.handleClick}>button</button>
            </div>
        );
    }
};
console.log(document.querySelector('#app'))
// render(<Calc />, document.querySelector('#app'));