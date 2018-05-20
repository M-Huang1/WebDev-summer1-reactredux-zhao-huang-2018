import React, {Component} from 'react';
export default class CourseCard extends React.Component
{
    constructor(props) {
        super(props);
        props.course.created = new Date(props.course.created).toLocaleString();
        props.course.modified = new Date(props.course.modified).toLocaleString();
    }

    render() { return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{this.props.course.title}</h5>
                <p className="card-created">Created: {this.props.course.created}</p>
                <p className="card-modified">Last Modified: {this.props.course.modified}</p>
                <a href="#" className="btn btn-primary">View Course</a>
            </div></div>
    )
    }
}