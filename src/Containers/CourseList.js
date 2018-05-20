import React from 'react';
import CourseCard from "../Compnents/CourseCard";
import "../Style.css"
import CourseService from "../Services/CourseService";

export default class CourseList
    extends React.Component {
    constructor(){
        super();
        this.courseService = CourseService.instance
    }
    componentDidMount() {
        this.findAllCourses();
    }
    findAllCourses() {
        this.courseService
            .findAllCourses()
            .then((courses) => {
                console.log(courses);
                this.setState({courses: courses});
            })
    }
    render() {
        return (
            <div className="container-fluid">
                <h1>Course List</h1>
                <div class="row">
                    <div class="col-sm-4">
                        <CourseCard/>
                    </div>
                    <div class="col-sm-4">
                        <CourseCard/>
                    </div>
                    <div class="col-sm-4">
                        <CourseCard/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4">
                        <CourseCard/>
                    </div>
                    <div class="col-sm-4">
                        <CourseCard/>
                    </div>
                    <div class="col-sm-4">
                        <CourseCard/>
                    </div>
                </div>
            </div>
                    );
    }
}