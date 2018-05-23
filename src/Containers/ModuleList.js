import React from 'react';
import Module from '../Components/Module.js';
import ModuleService from "../Services/ModuleService";
import CourseService from "../Services/CourseService";
import {confirmAlert} from "react-confirm-alert";
export default class ModuleList
    extends React.Component {
    constructor(props) {
        super(props);
        this.date = new Date();
        this.courseService = CourseService.instance;
        this.moduleService = ModuleService.instance;
        this.createModule = this.createModule.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.findAllModulesByCourse = this.findAllModulesByCourse.bind(this);
        this.findCourse = this.findCourse.bind(this);
        this.deleteModule = this.deleteModule.bind(this);
        this.activeModule = this.activeModule.bind(this);
        this.state = {
            courseId: this.props.courseId,
            course: null,
            module: {title: ''},
            modules: [],
            activeModule: null
        };
    }


    componentDidMount() {
        this.setState({courseId:this.props.courseId});
        this.findCourse();
        this.findAllModulesByCourse();
    }

    //Saves the course given by the course id to the state
    findCourse(){
        this.courseService
            .findCourseById(this.state.courseId)
            .then((course) => {
                this.setState({course: course});
            })
    }

    //Updates the title of the module to be created
    titleChanged(event) {
        this.setState({module: {title: event.target.value}});
    }

    findAllModulesByCourse() {
        this.moduleService
            .findAllModulesForCourse(this.state.courseId)
            .then((modules) => {

                this.setState({modules: modules});
            })

    }

    deleteModule(id) {

        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className='custom-ui'>
                        <h1>Are you sure you want to delete this module? </h1>
                        <button className='btn' onClick={onClose}>No</button>

                        <button className='btn' onClick={() => {
                            this.moduleService
                                .deleteModule(id)
                                .then(() => {
                                        this.findAllModulesByCourse();
                                        onClose();
                                    });
                        }}>Yes</button>
                    </div>
                )
            }
        });


    }

    activeModule(id){
        console.log('this happened');
        this.setState({activeModule:id});
    }

    renderListOfModules() {
        let self = this;
        let modules = null;
        if(this.state) {
            if(this.state.modules.length > 0) {
                modules = this.state.modules.map(
                    function (module) {
                        return <Module
                            title={module.title}
                            delete={self.deleteModule}
                            id={module.id}
                            key={module.id}
                            courseId = {self.state.courseId}
                            makeActiveModule ={self.activeModule}
                            activeModule={self.state.activeModule}/>
                    });
            }
        }
        return (modules)
    }

    createModule() {
        this.moduleService
            .createModule(this.state.module, this.state.courseId)
            .then(() => {
                    this.findAllModulesByCourse();
                }
            )
    }

    render() {
        return (
            <div>
            <input className="form-control"
                   onChange={this.titleChanged}
                   value={this.state.module.title}
                   placeholder="title" />
                <button onClick={this.createModule} className="btn btn-primary ">
                    Add Module
                </button>
            <ul className="list-group">
                {this.renderListOfModules()}
            </ul>
            </div>
        );
    }
}
