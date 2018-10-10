import React from 'react';
// import React, { Component, Fragment } from 'react';
// function Greeting() {
//     return <h1>Hello World!</h1>;
// }

class Person extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }


    render() {
        return (
            <React.Fragment>
                <h1>Terreance </h1>
                <input
                    value={this.state.text}
                    onChange={(e) => this.handleEvent(e.target.value)}
                />
                <button onClick={this.handleClick}>Click Me!</button>
            </React.Fragment>
        );
    }
}

export default Person;
