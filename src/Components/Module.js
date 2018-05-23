import React from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import {NavLink, Link}
    from 'react-router-dom';
export default class Module
    extends React.Component {
    constructor(props) {

        super(props);
    }

    active(){

        if (this.props.activeModule == this.props.id && this.props.activeModule != null){
            return "list-group-item active";
        }
        else{
            return "list-group-item";
        }
    }
    render() {
        return (

            <div>
            <li className={this.active()}>
                {this.props.title}
                <span className="float-right">
                    <Link to={'/CourseEditor/' + this.props.courseId + '/module/' + this.props.id} >
                        <i onClick={()=>{this.props.makeActiveModule(this.props.id)}} className="fa fa-pencil"/>
                    </Link>
                    <span>&nbsp;&nbsp;</span>
                    <Link to={'/CourseEditor/' + this.props.courseId}>
                    <i className="fa fa-trash" onClick={()=>{this.props.delete(this.props.id)}}/>

                        </Link>
                </span>
            </li>
            </div>
        );}}
