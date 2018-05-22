import React, {Component} from 'react';
import CourseService from "../Services/CourseService";
import {BrowserRouter as Router, Link, Route}
    from 'react-router-dom';

import CourseEditor from "../Containers/CourseEditor";
export default class Course extends React.Component


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
                <Link to={"/CourseEditor/" +this.props.course.id} className="btn btn-primary">View Course</Link>
                <button className="btn btn-danger" onClick={()=>{this.props.delete(this.props.course.id)}}>Delete Course</button>

            </div></div>
    )
    }
}