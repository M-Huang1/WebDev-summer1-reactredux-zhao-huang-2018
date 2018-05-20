import React, {Component} from 'react';
import CourseService from "../Services/CourseService";
export default class CourseCard extends React.Component

{
    constructor(props) {
        super(props);
        this.courseService = CourseService.instance;

    }


    render() { return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{this.props.course.title}</h5>
                <p className="card-created">Created: {new Date(this.props.course.created).toLocaleString()}</p>
                <p className="card-modified">Last Modified: {new Date(this.props.course.modified).toLocaleString()}</p>
                <a href="#" className="btn btn-primary">View Course</a>
                <button className="btn btn-danger" onClick={()=>{this.props.delete(this.props.course.id)}}>Delete Course</button>
            </div></div>
    )
    }
}