import React, {Component} from 'react';

const Heading = ({widget, preview}) => {
    let selectElem
    let inputElem
    return(
        <div>
            <div hidden={preview}>
                <h2> Heading {widget.size}</h2>
                <input value={widget.text}
                       ref={node => inputElem = node}/>
                <select ref={node => selectElem = node}>
                    <option value="1">Heading 1</option>
                    <option value="2">Heading 2</option>
                    <option value="3">Heading 3</option>
                </select>
                <h3>Preview</h3>
            </div>
            {widget.size === 1 && <h1>{widget.text}</h1>}
            {widget.size === 2 && <h2>{widget.text}</h2>}
            {widget.size === 3 && <h3>{widget.text}</h3>}
        </div>
    )
};
export default class Widget
    extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.widget);
    }


    render() {
        let selectElement
        return (

            <div className="panel panel-default" style={{outline:'1px solid grey'}}>
                <div className="panel-heading" > <h4 style={{display: 'inline-block'}}>{this.props.widget.className} Widget</h4>

                    <button onClick={() => {this.props.deleteWidget(this.props.widget.widgetOrder)}} className="btn-xs btn-danger" style={{float: 'right', margin: '0px 5px'}}>
                        X
                    </button>
                    <select value={this.props.widget.className} style={{float: 'right', margin: '0px 5px'}}
                            onChange={e =>
                            {this.props.selectWidgetType(this.props.widget.widgetOrder, selectElement.value)}}
                                ref={node => selectElement = node}>
                        <option>paragraph</option>
                        <option>heading</option>
                        <option>list</option>
                        <option>image</option>
                        <option>link</option>
                    </select>

                    <button hidden={this.props.widget.widgetOrder === this.props.totalLength}onClick={() => {this.props.widgetDown(this.props.widget.widgetOrder)}} className="btn-xs btn-warning " style={{float: 'right', margin: '0px'}}>
                        <i className="fa fa-arrow-down"/></button>
                    <button hidden={this.props.widget.widgetOrder === 1} onClick={() => {this.props.widgetUp(this.props.widget.widgetOrder)}} className="btn-xs btn-warning" style={{float: 'right', margin: '0px 5px'}}><i
                        className="fa fa-arrow-up"/></button>


                </div>
                <div className="panel-body"><Heading/> </div>
            </div>
        )
    }
}
