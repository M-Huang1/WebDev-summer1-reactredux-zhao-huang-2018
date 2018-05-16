import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
export default class ModuleListItem
    extends React.Component {
    render() {
        return (
            <li className="list-group-item">
                Module Title
                <span className="float-right">
                <i className="fa fa-trash"></i>
                <i className="fa fa-pencil"></i>
                </span>
            </li>
        );}}
