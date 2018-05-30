import React, {Component} from 'react';


export default class Widget
    extends React.Component
{
    constructor(props) {
        super(props);

    }


    render() { return (

        <div className="panel panel-default">
            <div className="panel-heading">{this.props.title}/div>
            <div className="panel-body">Panel Content</div>
        </div>
    )
    }
}