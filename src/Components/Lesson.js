import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route}
    from 'react-router-dom';

export default class Lesson extends React.Component

{
    constructor(props) {
        super(props);

    }
    active(){

        if (this.props.activeTab == this.props.id && this.props.activeTab != null){
            return "nav-link active";
        }
        else{
            return "nav-link";
        }
    }

    render() { return (

        <li className="nav-item">
            <div className={this.active()} onClick={()=>{this.props.makeActiveTab(this.props.id)}}>{this.props.title}
                <span>&nbsp;&nbsp;</span>
               <button className="btn-sm btn-danger" onClick={()=>{this.props.delete(this.props.id)}}>
                   X</button>

            </div>
        </li>
    )
    }
}