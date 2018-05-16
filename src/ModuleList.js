import React from 'react';
import ModuleListItem from './ModuleListItem.js';
export default class ModuleList
    extends React.Component {
    render() { return (
        <ul className="list-group">
            <ModuleListItem/><ModuleListItem/>
        </ul>
    );}}
