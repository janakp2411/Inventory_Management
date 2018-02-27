import React, { Component } from 'react';
import Button from '../components/Button/Button';

class Home extends Component {
    constructor(){
        super();
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(){
        alert("it's work");
    }
    render () {
        return (
            <div>
                <h1>Welcome to Home page</h1>
                <Button onClick={this.clickHandler} label='click me' />
            </div>
        );
    }
}

export default Home;