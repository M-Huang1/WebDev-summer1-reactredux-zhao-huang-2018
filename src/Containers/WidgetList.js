import React from 'react';

export default class WidgetList
    extends React.Component {

    constructor(props){
        super(props);
    }

    renderListOfWidgets() {
        let self = this;
        let widgets= null;

        if(this.state) {
            let active = '';
            if(this.state.widgets.length > 0) {
                widgets = this.state.widgets.map(
                    function (widget) {
                        return <Widget
                            title={widget.name}
                            id={widget.id}
                        />
                    });
            }
        }
        return (widgets)
    }
    render(){
        return(
            <div className="container" style={{backgroundColor:'white'}}>
                <div>
                    <h3>Panels with Contextual Classes</h3>
                    <button className="btn btn-primary">+</button>
                </div>
                <div className="panel-group">

                    </div>
                </div>
            </div>
        )
    }
}