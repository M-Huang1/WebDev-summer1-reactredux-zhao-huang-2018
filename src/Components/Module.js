import React from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import {NavLink, Link}
    from 'react-router-dom';
export default class Module
    extends React.Component {
    constructor(props) {

        super(props);
    }
    render() {
        return (

            <div>
            <li className="list-group-item">
                {this.props.title}
                <span className="float-right">
                    <NavLink activeClassName="selected" to={'/CourseEditor/' + this.props.courseId + '/module/' + this.props.id} >
                        <i className="fa fa-pencil"/>
                    </NavLink>
                    <span>&nbsp;&nbsp;</span>
                    <Link to={'/CourseEditor/' + this.props.courseId}>
                    <i className="fa fa-trash" onClick={()=>{this.props.delete(this.props.id)}}/>

                        </Link>
                </span>
            </li>
            </div>
        );}}
