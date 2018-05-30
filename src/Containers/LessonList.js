import React from 'react';
import TopicPills from '../Components/TopicPills';
import ModuleService from '../Services/ModuleService';
import CourseService from '../Services/CourseService';
import LessonService from '../Services/LessonService.js';
import Lesson from '../Components/Lesson';
import {confirmAlert} from "react-confirm-alert";
import App from "./WidgetList";
import {createStore} from 'redux';
import {widgetReducer} from "../reducers/widgetReducer";
import {Provider, connect} from 'react-redux'
export default class LessonList
    extends React.Component {

    constructor(props){
        super(props);
        this.store = createStore(widgetReducer);
        this.courseService = CourseService.instance;
        this.moduleService = ModuleService.instance;
        this.lessonService = LessonService.instance;
        this.findModule = this.findModule.bind(this);
        this.deleteLesson = this.deleteLesson.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.findAllLessonsByModule = this.findAllLessonsByModule.bind(this);
        this.createLesson = this.createLesson.bind(this);
        this.activeTab = this.activeTab.bind(this);
        this.state = {
            courseId: this.props.match.params.courseId,
            moduleId: this.props.match.params.moduleId,
            module: {title: 'Module Name'},
            lesson: {title: ''},
            lessons: [],
            activeTab:null

        }
    }

    componentDidMount(){
        this.setState({
            courseId: this.props.match.params.courseId,
            moduleId: this.props.match.params.moduleId,
        },
            ()=> {
                this.findModule();
                this.findAllLessonsByModule();
            });
    }

    componentWillReceiveProps(nextProps){

        this.setState({
            courseId: nextProps.match.params.courseId,
            moduleId: nextProps.match.params.moduleId,
            module: {title:'Module Name'},
            lesson: { title:'Lesson Name'},
            lessons: [], activeTab: null},
            ()=> {
                this.findModule();
                this.findAllLessonsByModule();
            });


    }
    //Updates the title of the lesson to be created
    titleChanged(event) {
        this.setState({lesson: {title: event.target.value}});
    }
    //Saves the course given by the course id to the state
    findModule(){
        this.moduleService
            .findModuleById(this.state.moduleId)
            .then((module) => {
                this.setState({module: module});
            })
    }

    findAllLessonsByModule() {
        this.lessonService
            .findAllLessonForModule(this.state.courseId, this.state.moduleId)
            .then((lessons) => {

                this.setState({lessons: lessons});
            })
    }

    createLesson() {
        this.lessonService
            .createLesson(this.state.lesson, this.state.courseId, this.state.moduleId)
            .then(() => {
                    this.findAllLessonsByModule();
                }
            )
    }

    deleteLesson(id) {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className='custom-ui'>
                        <h1>Are you sure you want to delete this lesson? </h1>
                        <button className='btn' onClick={onClose}>No</button>

                        <button className='btn' onClick={() => {
                            this.lessonService
                            .deleteLesson(id)
                            .then(() => {
                                    this.findAllLessonsByModule();
                                    onClose();
                                }
                            )
                        }}>Yes</button>
                    </div>
                )
            }
        });

    }



    activeTab(id){
        this.setState({activeTab:id});
    }
    renderListOfLessons() {
        let self = this;
        let lessons = null;

        if(this.state) {
            let active = '';
            if(this.state.lessons.length > 0) {
                if (this.state.first == true){
                    active = 'active';
                    this.setState({first: false});
                }
                lessons = this.state.lessons.map(
                    function (lesson) {
                        return <Lesson
                            title={lesson.title}
                            delete={self.deleteLesson}
                            id={lesson.id}
                            key={lesson.id}
                            makeActiveTab = {self.activeTab}
                            activeTab={self.state.activeTab}
                        />
                    });
            }
        }
        return (lessons)
    }

    renderListOfWidgets(){
        let self = this;
        if (this.state.activeTab != null){

            return(
                <Provider store={self.store}>
                    <App
                        lessonId={self.state.activeTab}
                        moduleId={self.state.moduleId}
                        courseId={self.state.courseId}/>
                </Provider>
            )
        }
        else{
            return null;
        }
    }
    render() { return(
        <div>
            <h2>Lessons for {this.state.module.title}</h2>
            <div className="row">
                <div className='col-6'>
                    <input className="form-control"
                       onChange={this.titleChanged}
                       value={this.state.lesson.title}
                       placeholder="Lesson Title"/>
                </div>
                <div className='col-2' >
                    <button onClick={this.createLesson} className="btn btn-primary" style={{margin:'0px'}}>
                        Add Lesson
                    </button>
                </div>
            </div>
        <ul className="nav nav-tabs">
            {this.renderListOfLessons()}
        </ul>
            {this.renderListOfWidgets()}
        </div>
    );}}
