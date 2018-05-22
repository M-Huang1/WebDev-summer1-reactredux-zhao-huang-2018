import React from 'react';
import ModuleListItem from '../Components/Module.js';
import ModuleService from "../Services/ModuleService";
import CourseService from "../Services/CourseService";
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
        this.state = {
            course: null,
            module: { title: '' },
            modules: []};}


    componentDidMount() {
        this.findCourse();
        this.findAllModulesByCourse();
    }

    //Saves the course given by the course id to the state
    findCourse(){
        this.courseService
            .findCourseById(this.props.courseId)
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
            .findAllModulesForCourse(this.props.courseId)
            .then((modules) => {

                this.setState({modules: modules});
            })
    }

    deleteModule(id) {
        console.log("Deleting" + id);
        this.moduleService
            .deleteModule(id)
            .then(() => {
                    this.findAllModulesByCourse();
                }
            )

    }

    renderListOfModules() {
        let self = this;
        let modules = null;
        if(this.state) {
            modules = this.state.modules.map(
                function(module){
                    return <ModuleListItem
                        title={module.title}
                        delete={self.deleteModule}
                        id={module.id}
                        key={module.id}/>
                }
                );
        }
        return (modules)
    }

    createModule() {
        this.moduleService
            .createModule(this.state.module, this.props.courseId)
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
                <button onClick={this.createModule} className="btn btn-primary btn-block">
                    <i className=
                           "fa fa-plus"></i>
                </button>
            <ul className="list-group">
                {this.renderListOfModules()}
            </ul>
            </div>
        );
    }
}
