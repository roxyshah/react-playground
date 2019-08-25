import React from 'react';
import './Split.css';

function Split(props) {
    const combinedClassName = `split ${props.className}`;
    const newStyles = { flex: props.flexBasis };
    return (
      <div
        className={combinedClassName}
        style={newStyles}
      >
        {props.children}
      </div>
    );
  }

export default Split;

//  We've read the custom prop, flexBasis, and created a newStyles object
//  with the value for flex from this custom prop. Then we've used the 
//  newStyles object on the div as a styles prop. The styles prop takes an 
//  object to add inline styles to the rendered element.