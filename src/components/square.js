import React, {Component} from 'react';

export class Square extends React.Component {
    constructor(){
        super();
        this.state = {
            value: null,
        };
    }

    
    render(){
        return (
            <button className="square" onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}


