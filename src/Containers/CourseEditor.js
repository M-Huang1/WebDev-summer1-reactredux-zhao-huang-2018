import React from 'react';
import ModuleList from './ModuleList.js';
import LessonList from './LessonList';
import CourseService from "../Services/CourseService";
import ModuleService from "../Services/ModuleService";
import {BrowserRouter as Router, Link, Route}
    from 'react-router-dom';
import CourseManager from "./CourseManager";
export default class CourseEditor extends React.Component {

    constructor(props){
        super(props);
        this.courseService = CourseService.instance;
        this.moduleService = ModuleService.instance;
        this.findCourse = this.findCourse.bind(this);
        this.updatePage = this.updatePage.bind(this);
        this.state = {id:this.props.match.params.courseId, course:{'title':'Course Name'}};
        this.courseService
            .findCourseById(this.state.id)
            .then((course) => {
                this.setState({course: course});
            })
    }


    componentDidMount() {
        this.updatePage(this.props.match.params.id);
        this.findCourse();

    }

    updatePage(id) {
        this.setState({id: id});
    }

    //Saves the course given by the course id to the state
    findCourse(){
        this.courseService
            .findCourseById(this.state.id)
            .then((course) => {
                this.setState({course: course});
            })
    }



    render() {
        return (
            <Router>
            <div className="container-fluid" style={{backgroundColor:'#DDDDDD'}}>
                <h1>{this.state.course.title}</h1>
                <h5> <a href="/CourseManager"> Back to Course Page </a></h5>
                <div className="row moduleRow">

                    <div className="col-3 moduleList">
                        <h2>Modules</h2><ModuleList  courseId={this.state.id}/>
                    </div>
                    <div className="col-9">

                        <Route exact path='/CourseEditor/:courseId/module/:moduleId'
                               component={LessonList}/>

                    </div>


                </div>

            </div>
            </Router>

        )
    }
}
