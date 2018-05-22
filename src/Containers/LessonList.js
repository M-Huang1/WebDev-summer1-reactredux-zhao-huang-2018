import React from 'react';
import TopicPills from '../Components/TopicPills';
import ModuleService from '../Services/ModuleService'
import CourseService from "../Services/CourseService";
import LessonService from "../Services/LessonService";
export default class LessonTabs
    extends React.Component {

    constructor(props){
        this.super(props);
        this.courseService = CourseService.instance;
        this.moduleService = ModuleService.instance;
        this.lessonService = LessonService.instance;
    }

    //Saves the course given by the course id to the state
    findCourse(){
        this.moduleService
            .findModuleById(this.props.moduleId)
            .then((module) => {
                this.setState({course: course});
            })
    }
    render() { return(
        <div>
        <ul className="nav nav-tabs">
            {this.renderLessons()}
        </ul>
            <TopicPills/>
        </div>
    );}}
