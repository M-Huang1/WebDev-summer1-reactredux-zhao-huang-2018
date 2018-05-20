import React from 'react';
import CourseCard from "../Compnents/CourseCard";
import "../Style.css"

export default class CourseList
    extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <h1>Course List</h1>
                <div class="row">
                    <div class="col-sm-4">
                        <CourseCard/>
                    </div>
                    <div class="col-sm-4">
                        <CourseCard/>
                    </div>
                    <div class="col-sm-4">
                        <CourseCard/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4">
                        <CourseCard/>
                    </div>
                    <div class="col-sm-4">
                        <CourseCard/>
                    </div>
                    <div class="col-sm-4">
                        <CourseCard/>
                    </div>
                </div>
            </div>
                    );
    }
}