/*A component that uses life-cycles, setInterval and state to alternate between rendering 
either "tick" or "tock" until a time passes and then rendering "BOOM!!!!".*/

import React, { Component } from 'react';

class Bomb extends Component {
//data
    state = {
        count: 0,
    };
    /*When the component mounts, register an interval that adds one to the count in state 
    every second*/
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({ count: this.state.count + 1 })
        }, 1000);
    }

    //When the component unmounts, clear the interval
    componentWillMount() {
        clearInterval(this.interval)
    }

    renderDisplay() {
        const { count } = this.state
        //If the count goes equal to or above 8, display "BOOM!!!!"
        //When the count goes above or equal to 8, also clear the interval
        if (count >= 8) {
            clearInterval(this.interval)
            return <p>BOOM!!!!</p>
        //When the count is divisible by 2, display the word "tick"
        } else if (count % 2 === 0) {
            return <p>tick</p>
        //When the count isn't divisible by 2, display the word "tock"
        } else { 
            return <p>tock</p> 
        }
    }
       
    render() {
        return (
            <div className='Bomb'>
                {this.renderDisplay()}
            </div>
        );
    }
}

export default Bomb