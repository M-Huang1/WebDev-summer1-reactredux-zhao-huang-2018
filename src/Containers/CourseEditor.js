import React from 'react';
import ModuleList from './ModuleList.js';
import LessonTabs from './LessonTabs';
import CourseService from "../Services/CourseService";
import ModuleService from "../Services/ModuleService";
import {BrowserRouter as Router, Link, Route}
    from 'react-router-dom';
export default class CourseEditor extends React.Component {

    constructor(props){
        super(props);
        this.courseService = CourseService.instance;
        this.moduleService = ModuleService.instance;
        this.findCourse = this.findCourse.bind(this);
        this.updatePage = this.updatePage.bind(this);
        this.state = {id:this.props.match.params.id, course:{'title':'Course Name'}};
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

            <div className="container-fluid">
                <h1>{this.state.course.title}</h1>
                <h5> <Link to='/CourseManager'> Back to Course Page </Link></h5>
                <div className="row">
                    <div className="col-3">
                        <h2>Modules</h2><ModuleList courseId={this.state.id}/>
                    </div>
                    <Router>
                    <div className="col-9">
                        <h2>Lessons</h2>
                        <Route path={this.props.location.pathname + '/module/:id'} component={LessonTabs}/>
                    </div>
                    </Router>
                </div>
            </div>
        )
    }
}
