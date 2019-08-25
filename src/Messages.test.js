import React from 'react';
import ReactDOM from 'react-dom';
import Messages from './Messages';
import renderer from 'react-test-renderer';

describe('Messages component', () => {
    //smoke test
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Messages/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    //snapshot test
    //render the component and create a human readable JSON file
    //Compare the rendered component to a saved version of the component
    it('renders the UI as expected', () => {
        const tree = renderer
            //create method takes the component to be rendered and performs a render on it
            .create(<Messages name="Messages" unread={4}/>)
            //then the toJson() method creates the JSON file
            .toJSON();
        expect(tree).toMatchSnapshot();  
    });
});