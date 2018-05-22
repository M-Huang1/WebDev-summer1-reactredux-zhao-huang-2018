import React from 'react';
import ModuleList from './ModuleList.js'
import LessonTabs from './LessonTabs'
export default class CourseEditor extends React.Component {


    render() {
        return (
            <div className="container-fluid">
                <h1>Course Editor</h1>
                <div className="row">
                    <div className="col-4">
                        <h2>Modules</h2><ModuleList/>
                    </div>
                    <div className="col-8">
                        <h2>Lessons</h2><LessonTabs/>
                    </div>
                </div>
            </div>
        )
    }
}
