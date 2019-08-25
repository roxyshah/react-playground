import React, { Component } from 'react';

class HelloWorld extends Component {
//data
//The word "world" should come from state in a property named who
    state = {
        who: 'world',
    };

    /*When a user clicks on one of the three buttons, use state and an event handler to 
    update the state property who so that the content in the p element changes*/
    render() {
        return (
        //view
            <div className='HelloWorld'>
                <p>Hello, {this.state.who}!</p>
                <button onClick={() => this.setState({who: 'world'})}>
                World
                </button>
                <br/>
                <button onClick={() => this.setState({who: 'friend'})}>
                Friend
                </button>
                <br/>
                <button onClick={() => this.setState({who: 'React'})}>
                React
                </button>
            </div>
        );
    }
}

export default HelloWorld