import React from 'react';
import CourseCard from "../Components/Course";
import "../Style.css"
import CourseService from "../Services/CourseService";
import {BrowserRouter as Router, Link, Route}
    from 'react-router-dom';
import CourseEditor from "./CourseEditor";
import ModuleList from "./ModuleList";

export default class CourseManager
    extends React.Component {

    constructor(){
        super();
        this.date = new Date();
        this.courseService = CourseService.instance;
        this.titleChanged = this.titleChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
        this.routeToModule = this.routeToModule.bind(this);
        this.state = {courses: [], course:{title:""}};

    }
    componentDidMount() {
        this.findAllCourses();
    }
    findAllCourses() {
        this.courseService
            .findAllCourses()
            .then((courses) => {
                this.setState({courses: courses});
            })
    }

    titleChanged(event) {
        this.setState({
            course: { title: event.target.value }
        })
    }

    renderCourseRows() {
        var self = this;
        let courses = null;
        if(this.state) {
            courses = this.state.courses.map(
                function (course) {
                    return <CourseCard key={course.id}
                                      course={course}
                                      delete={self.deleteCourse}
                                        module={self.routeToModule}/>
                }
            )
        }
        return (
            courses
        )
    }
    createCourse() {
        this.courseService
            .createCourse(this.state.course)
            .then(() => {
                this.findAllCourses();
            }
            )

    }

    deleteCourse(id) {
        this.courseService
            .deleteCourse(id)
            .then(() => {
                    this.findAllCourses();
                }
            )

    }

    routeToModule(id){
        return ModuleList;
    }
    render() {
        return (
            <div className="container-fluid">
                <h1>Course List</h1>
                <input onChange={this.titleChanged}
                       className="form-control" id="titleFld"
                       placeholder="Course Title"/>
                <button onClick={this.createCourse} className="btn btn-primary">Add Course</button>

                <div className="row">
                    {this.renderCourseRows()}
                </div>

            </div>


                    );
    }
}