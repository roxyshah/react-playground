/*A component that combines state and props. The parent of this component will pass in a 
prop that says which number chamber contains a bullet, the chamber should be between 1 and 8. 
When a user clicks on a button, the component will choose a random chamber and pull the 
trigger! If the chamber with the bullet in is chosen, the component will render BANG!!!!*/



import React, { Component } from 'react';

class RouletteGun extends Component {

    //The component will accept a prop called bulletInChamber that has a default value of 8
    static defaultProps = {
        bulletInChamber: 8
    };
    
    //component has initial state with two properties
    state = {
        chamber: null,
        spinningTheChamber: false,
    };

    //When the component unmounts, clear the timeout
    componentWillMount() {
        clearTimeout(this.timeout)
    }

    //step 1: The state should update spinningTheChamber to be true
    //step 2: A timeout should be registered for 2 seconds (2000 milliseconds)
    //step 3: Within the timeout, a random number between 1 and 8 should be generated
    /*step 4: Within the timeout, the state should be updated so that the generated random number is 
    the new value for chamber and the spinningTheChamber should be false*/
    handleButtonClick() {
        //step 1
        this.setState({ spinningTheChamber: true, })
        //step 2
        this.timeout = setTimeout(() => {
            //step 3
            const randomChamber = Math.ceil(Math.random() * 8)
            //step 4
            this.setState({
                chamber: randomChamber,
                spinningTheChamber: false,
            })
        }, 2000)
    }

    renderDisplay() {
        const { chamber, spinningTheChamber } = this.state
        const { bulletInChamber } = this.props
        if (spinningTheChamber) {
            return 'spinning the chamber and pulling the trigger!...'
        } else if (chamber === bulletInChamber) {
            return 'BANG!!!'
        } else {
            return <p>you're safe!</p>
        }
    }

       
    render() {
        return (
            <div className='RouletteGun'>
                <p>{this.renderDisplay()}</p>
                <button onClick={() => this.handleButtonClick()}>
                Pull the trigger!
                </button>
            </div>
        );
    }
}

export default RouletteGun