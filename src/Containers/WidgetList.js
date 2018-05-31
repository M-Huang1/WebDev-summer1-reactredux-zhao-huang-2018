import React from 'react';
import Widget from '../Components/Widget'
import {connect} from 'react-redux'
import * as actions from "../actions"
import LessonService from '../Services/LessonService';
import Toggle from 'react-bootstrap-toggle';
class WidgetList
    extends React.Component {

    constructor(props) {
        super(props);

        this.lessonService = LessonService.instance;
        this.props.findAllWidgetsForLesson(this.props.courseId,this.props.moduleId,this.props.lessonId);

    }


    componentDidMount() {
        this.lessonService.findLessonById(this.props.lessonId).then(
            (lesson) =>
            {this.setState({lesson: lesson}
                )
            }
        );
    }

    componentDidUpdate(prevProps){
        console.log('Happening');
       if(this.props.lessonId !== prevProps.lessonId ){
           this.props.findAllWidgetsForLesson(this.props.courseId,this.props.moduleId,this.props.lessonId);
       }

    }


    render() {
        return (
            <div className="container" style={{backgroundColor: 'white'}}>
                <div>
                    <h3 style={{display: 'inline-block'}}>Lesson Widgets</h3>

                    <button onClick={() => {this.props.save(this.props.lessonId)}} className="btn-sm btn-success" style={{float: 'right', margin: '0px'}}>
                        Save</button>
                    <button onClick={() => {this.props.addWidget(this.state.lesson)}} className="btn-sm btn-primary" style={{float: 'right', margin: '0px 5px'}}><i
                        className="fa fa-plus"/></button>
                    <div className="checkbox">
                        <label><input onChange={()=> {this.props.previewChange()}} type="checkbox" value=""/>Preview</label>
                    </div>
                </div>
                <div className="panel-group">
                    {this.props.widgets.map(widget => (
                        <Widget widget={widget}
                                totalLength = {this.props.widgets.length}
                                preview={this.props.previewMode}
                                selectWidgetType={this.props.selectWidgetType}
                                deleteWidget ={this.props.deleteWidget}
                                widgetUp={this.props.widgetUp}
                                widgetDown={this.props.widgetDown}
                                key={widget.id}/>
                        )
                        )
                    }
                </div>

            </div>
        )
    }
}

const stateToPropertiesMapper = state => ({
    widgets: state.widgets,
    previewMode: state.preview
});

const dispatcherToPropsMapper
    = dispatch => ({
    findAllWidgetsForLesson: (courseId,moduleId, lessonId,) => actions.findAllWidgetsForLesson(dispatch,
        courseId,moduleId,lessonId),
    addWidget: (lesson) => actions.addWidget(dispatch, lesson),
    save: (lessonId) => actions.save(dispatch, lessonId),
    previewChange: ()=> actions.preview(dispatch),
    selectWidgetType: (widgetOrder, widgetType)=>
        actions.selectWidgetType(dispatch, widgetOrder, widgetType),
    deleteWidget: (widgetOrder) =>
        actions.deleteWidget(dispatch, widgetOrder),
    widgetUp: (widgetOrder) =>
        actions.widgetUp(dispatch, widgetOrder),
    widgetDown: (widgetOrder) =>
        actions.widgetDown(dispatch, widgetOrder)
});
const App = connect(
    stateToPropertiesMapper,
    dispatcherToPropsMapper)(WidgetList);

export default App;

