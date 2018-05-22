import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route}
    from 'react-router-dom';

export default class LessonTab extends React.Component


{
    constructor(props) {
        super(props);
    }


    render() { return (

        <li className="nav-item">
            <div className={"nav-link " + this.props.active}>{this.props.lesson.title}
            </div>
        </li>
    )
    }
}