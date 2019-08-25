import React from 'react';

class TheDate extends React.Component {
    //1st commit
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         foo: 'foo',
    //         hello: 'Hello, world!',
    //         list: [1, 2, 3],
    //         obj: { nested: 'object', yes: true }
    //     };
    // }
    // render() {
    //     console.log(this.state)
    //     return (
    //       <div>{this.state.hello}</div>
    //     );
    // }

    //2nd commit
    // constructor(props) {
    //     super(props)
    //     this.state = { datetime: new Date() };
    //   }
    //   render() {
    //     return (
    //       <div>{this.state.datetime.toLocaleString()}</div>
    //     )
    // }

    //To summarize, we've set an initial state in the constructor method and then read 
    // that state within the render. We accessed the datetime property on the state object 
    // and used a date method toLocaleString() to display the date in a human-readable text

    //3rd commit
    constructor(props) {
        super(props)
        this.state = { datetime: new Date() };
        console.log('constructor')
      }
      componentDidMount() {
        console.log('componentDidMount')
        this.interval = setInterval(() => {
          console.log('setInterval')
          this.setState({
            datetime: new Date()
          })
        }, 1000)
      }
      componentWillUnmount() {
        clearInterval(this.interval)
      }
      render() {
        // console.log('render')
        return (
          <div>{this.state.datetime.toLocaleString()}</div>
        )
      }
}

export default TheDate