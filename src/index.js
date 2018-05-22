import React from 'react';
import ReactDOM from 'react-dom';
import CourseManager from './Containers/CourseManager.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Message from "./Components/Message";
import {BrowserRouter as Router, Link,Switch, Route}
    from 'react-router-dom'
import IndexRoute from 'react-router-dom';
import CourseEditor from "./Containers/CourseEditor";


const App = () => {
    return(
        <Router>
        <div>

            <Route exact path='/CourseManager'
                   component={CourseManager}/>
            <Route exact path='/CourseEditor'
                   component={CourseEditor}/>
        </div>
        </Router>);
};

export default App

ReactDOM.render(
    <div>
        <App/>
    </div>,
    document.getElementById('root')
);

