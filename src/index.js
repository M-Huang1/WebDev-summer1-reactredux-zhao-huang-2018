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

const Home = () => {
    return(
        <div>
            <h1> Welcome to My Course Manager </h1>
            <Link to='/CourseManager'> Click Here To View All Courses </Link>
        </div>
        );
};


const App = () => {
    return(
        <Router>
        <div>
            <Route exact path='/'
                   component={Home}/>
            <Route exact path='/CourseManager'
                   component={CourseManager}/>
            <Route exact path='/CourseEditor/:id'
                   component={CourseEditor}/>
        </div>
        </Router>);
};


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

