import React from 'react';
import ReactDOM from 'react-dom';
import CourseManager from './Containers/CourseManager.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Message from './Components/Message.js';
import Stateless from './Stateless';
import App from './Containers/App';
import CourseList from "./Containers/CourseList";
ReactDOM.render(
    <div>
        <CourseList/>
    </div>,
    document.getElementById('root')
);
