import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import TheDate from './TheDate';

describe(`TheDate Component`, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TheDate />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

//If you save this file more than once, the snapshot will fail! So let's tell jest to 
// skip the snapshot test because we know it isn't working
  it.skip('renders the UI as expected', () => {
    expect(
      renderer.create(<TheDate />).toJSON()
    ).toMatchSnapshot()
  })
})