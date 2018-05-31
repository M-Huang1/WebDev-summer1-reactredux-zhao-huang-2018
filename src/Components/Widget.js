import React, {Component} from 'react';

const Heading = ({widget, preview, textChanged, headingSizeChanged}) => {
    let selectElem
    let inputElem
    return(
        <div>
            <div hidden={preview}>
                <h2> Heading {widget.size}</h2>
                <input value={widget.text} onChange={() => textChanged(widget.widgetOrder, inputElem.value)}
                       ref={node => inputElem = node}/>
                <div>
                <select value={widget.size}
                        onChange={() => headingSizeChanged(widget.widgetOrder, parseInt(selectElem.value))}
                        ref={node => selectElem = node}>
                    <option value="1">Heading 1</option>
                    <option value="2">Heading 2</option>
                    <option value="3">Heading 3</option>
                </select>
                </div>
                <h3>Preview</h3>
            </div>
            {widget.size === 1 && <h1>{widget.text}</h1>}
            {widget.size === 2 && <h2>{widget.text}</h2>}
            {widget.size === 3 && <h3>{widget.text}</h3>}
        </div>
    )
};

const Paragraph = ({widget, preview, textChanged}) => {
    let selectElem
    let inputElem
    return(
        <div>
            <div hidden={preview}>
                <textarea value={widget.text} onChange={() => textChanged(widget.widgetOrder, inputElem.value)}
                       ref={node => inputElem = node}/>
                <h3>Preview</h3>
            </div>
            {widget.text}
        </div>
    )
};
const ListItem =({text}) =>{
    return (<li>{text}</li>)
};
function renderList(listType, text){
    let items = text.split('\n');
    if (listType === 'ordered'){
        return (
            <ol>
                {items.map(
                    function(item){
                        return <ListItem text={item}/>
                    }
                )}
            </ol>);
    }
    else if(listType ==='unordered'){
        return (
            <ul>
                {items.map(
                    function(item){
                        return <ListItem text={item}/>
                    }
                )}
            </ul>);
    }
}
const List = ({widget, preview, textChanged, listTypeChanged}) => {
    let selectElem
    let inputElem
    return(
        <div>
            <div hidden={preview}>
                <textarea value={widget.text} onChange={() => textChanged(widget.widgetOrder, inputElem.value)}
                          ref={node => inputElem = node}/>
                <div>
                    <select value={widget.listType}
                            onChange={() => listTypeChanged(widget.widgetOrder, selectElem.value)}
                            ref={node => selectElem = node}>
                        <option value='ordered'>Ordered</option>
                        <option value='unordered'>Unordered</option>
                    </select>
                </div>
                <h3>Preview</h3>
            </div>
            {renderList(widget.listType, widget.text)}
        </div>
    )
};

const Link = ({widget, preview, textChanged, hrefChanged}) => {
    let selectElem
    let inputElem
    return(
        <div>
            <div hidden={preview}>
                <input value={widget.text} onChange={() => textChanged(widget.widgetOrder, inputElem.value)}
                          ref={node => inputElem = node}/>
                <div>
                    <input placeholder='Href Value' value={widget.href} onChange={() => hrefChanged(widget.widgetOrder, selectElem.value)}
                           ref={node => selectElem = node}/>
                </div>
                <h3>Preview</h3>
            </div>
            <a href={widget.href} target="_blank"> {widget.text} </a>
        </div>
    )
};
export default class Widget
    extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        let selectElement
        return (

            <div className="panel panel-default" style={{ outline: this.props.preview === false? '2px solid grey' : ''}}>
                <div className="panel-heading" hidden={this.props.preview} > <h4 style={{display: 'inline-block'}}>{this.props.widget.className} Widget</h4>

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
                <div className="panel-body">
                    {this.props.widget.className ==='heading' && <Heading widget={this.props.widget}
                                                                          preview ={this.props.preview}
                                                                          textChanged = {this.props.textChanged}
                                                                          headingSizeChanged = {this.props.headingSizeChanged}/>}
                    {this.props.widget.className ==='paragraph' && <Paragraph widget={this.props.widget}
                                                                                textChanged = {this.props.textChanged}
                                                                              preview ={this.props.preview}/>}
                    {this.props.widget.className ==='list' && <List widget={this.props.widget}
                                                                              textChanged = {this.props.textChanged}
                                                                                listTypeChanged={this.props.listTypeChanged}
                                                                              preview ={this.props.preview}/>}
                    {this.props.widget.className ==='link' && <Link widget={this.props.widget}
                                                                    textChanged = {this.props.textChanged}
                                                                    hrefChanged={this.props.hrefChanged}
                                                                    preview ={this.props.preview}/>}

                    </div>
            </div>
        )
    }
}
