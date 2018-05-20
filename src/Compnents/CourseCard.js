import React from 'react';
export default class CourseCard extends React.Component
{ render() { return (
    <div className="card" style={{width: '20rem'}}>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Card text.</p>
            <a href="#" className="btn btn-primary">Edit Course</a>
        </div></div>)
    }
}