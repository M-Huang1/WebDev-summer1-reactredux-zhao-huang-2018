import React from 'react';
import CourseCard from "../Components/CourseCard";
import "../Style.css"
import CourseService from "../Services/CourseService";

export default class CourseList
    extends React.Component {

    constructor(){
        super();
        this.date = new Date();
        this.courseService = CourseService.instance;
        this.titleChanged = this.titleChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);
        this.state = {courses: [], course:{title:""}};
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

    titleChanged(event) {
        this.setState({
            course: { title: event.target.value }
        })
    }

    renderCourseRows() {
        let courses = null;
        if(this.state) {
            courses = this.state.courses.map(
                function (course) {
                    return <CourseCard key={course.id}
                                      course={course}/>
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
            .then(() => { this.findAllCourses();
            this.renderCourseRows()});
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