import React, { Component } from 'react';
import './Accordion.css'

class Accordion extends Component {
    //the component should accept a prop named sections
    static defaultProps = {
        //sections prop should be an array of objects
        sections: []
    };

    state = {
        activeSectionIndex: null,
    }

    handleSetActiveSection = (sectionIndex) => {
        this.setState({ activeSectionIndex: sectionIndex })
    }

    renderItem(section, idx, activeSectionIndex) {
        return (
            //what goes inside the <ul>
            //each section's <li> should be a button containing the section's title
            //when button is clicked, <p> should render (can use conditional rendering to display <p>)
            <li className='Accordion-item' key={idx}>
                <button type='button' onClick={() => this.handleSetActiveSection(idx)}>
                    {section.title}
                </button>
                {(activeSectionIndex === idx) && <p>{section.content}</p>}
            </li>
        );
    }

    render() {
        const { activeSectionIndex } = this.state
        const { sections } = this.props
        return (
            //the accordion renders a <ul>
            //<li> comes from renderItem
            <ul className='Accordion'>
                {sections.map((section, idx) => 
                    this.renderItem(section, idx, activeSectionIndex))}
            </ul>
        );
    }

}

export default Accordion