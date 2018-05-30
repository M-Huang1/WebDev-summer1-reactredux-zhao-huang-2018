import React from 'react';
import Widget from '../Components/Widget'
import {connect} from 'react-redux'
import * as actions from "../actions"
import LessonService from '../Services/LessonService';
class WidgetList
    extends React.Component {

    constructor(props) {
        super(props);
        this.lessonService = LessonService.instance;
        this.renderListOfWidgets = this.renderListOfWidgets.bind(this);
        this.state = {
            widgets:[]
        }

    }
    componentDidMount() {
        console.log(this.props.lessonId);
        this.lessonService.findLessonById(this.props.lessonId).then(
            (lesson) =>
            {this.setState({lesson: lesson}
                )
            }
        );

        this.props.findAllWidgetsForLesson(this.props.courseId,this.props.moduleId,this.props.lessonId);

    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps.lessonId);
        this.lessonService.findLessonById(nextProps.lessonId).then(
            (lesson) =>
            {this.setState({lesson: lesson}
            )
            }
        );

        this.props.findAllWidgetsForLesson(nextProps.courseId,nextProps.moduleId,nextProps.lessonId);
    }
    renderListOfWidgets() {
        let self = this;
        let widgets = null;

        if (this.state) {
            let active = '';
            if (this.state.widgets.length > 0) {
                widgets = this.state.widgets.map(
                    function (widget) {
                        return <Widget
                            widget={widget}
                            id={widget.id}
                        />
                    });
            }
        }
        return (widgets)
    }

    render() {
        return (
            <div className="container" style={{backgroundColor: 'white'}}>
                <div>
                    <h3 style={{display: 'inline-block'}}>Lesson Widgets</h3>
                    <button onClick={() => {this.props.addWidget(this.state.lesson)}} className="btn-sm btn-danger" style={{float: 'right', margin: '0px'}}><i
                        className="fa fa-plus"/></button>
                </div>
                <div className="panel-group">
                    {this.renderListOfWidgets()}
                </div>

            </div>
        )
    }
}

const stateToPropertiesMapper = (state) => ({
    widgets: state.widgets,
    previewMode: state.preview
});

const dispatcherToPropsMapper
    = dispatch => ({
    findAllWidgetsForLesson: (courseId,moduleId, lessonId,) => actions.findAllWidgetsForLesson(dispatch,
        courseId,moduleId,lessonId),
    addWidget: (lesson) => actions.addWidget(dispatch, lesson),
    save: () => actions.save(dispatch)
});
const App = connect(
    stateToPropertiesMapper,
    dispatcherToPropsMapper)(WidgetList);

export default App;

