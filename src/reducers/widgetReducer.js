import * as constants from "../constants/index"
import WidgetsService from "../Services/WidgetsService";
import {preview} from "../actions";
let widgetService = WidgetsService.instance;


function fixWidgetsOrder(widgets){
    console.log(widgets);
    let counter = 1;
    let toReturn = [];
    widgets.forEach((widget) =>
    {widget.widgetOrder = counter;
    counter++;});
    return widgets;

}
export const widgetReducer = (state = {widgets: [], preview: false}, action) => {
    let nextState

    switch(action.type){
        case constants.HREF_CHANGED:
            return{
                widgets: state.widgets.map(widget => {
                    if(widget.widgetOrder === action.widgetOrder) {
                        widget.href = action.href;
                    }

                    return Object.assign({}, widget)
                }),
                preview: state.preview
            };
        case constants.LIST_TYPE_CHANGED:
            return{
                widgets: state.widgets.map(widget => {
                    if(widget.widgetOrder === action.widgetOrder) {
                        widget.listType = action.listType

                    }
                    return Object.assign({}, widget)
                }),
                preview: state.preview
            };
        case constants.HEADING_SIZE_CHANGED:
            return{
                widgets: state.widgets.map(widget => {
                    if(widget.widgetOrder === action.widgetOrder) {
                        widget.size = action.size

                    }
                    return Object.assign({}, widget)
                }),
                preview: state.preview
            };
        case constants.TEXT_CHANGED:
                return{
                    widgets: state.widgets.map(widget => {
                        if(widget.widgetOrder === action.widgetOrder) {
                            widget.text = action.text;
                        }

                        return Object.assign({}, widget)
                    }),
                    preview: state.preview
                };


        case constants.MOVE_UP:
            let indexMU = action.widgetOrder;
            let upper
            let lower
            let widgetMU = state.widgets;
            widgetMU.forEach((widget) =>
            {
                if (widget.widgetOrder === indexMU - 1) {
                    widget.widgetOrder = widget.widgetOrder + 1;
                    upper = widget;

                }
                else if(widget.widgetOrder === indexMU){
                    widget.widgetOrder = widget.widgetOrder - 1;
                    lower = widget;
                }

        });
            let upperIndex = widgetMU.indexOf(upper);
            let lowerIndex = widgetMU.indexOf(lower);
            widgetMU[upperIndex] = lower;
            widgetMU[lowerIndex] = upper;
            let newState = {
                widgets: widgetMU,
                preview: state.preview
            };
            return JSON.parse(JSON.stringify(newState));

        case constants.MOVE_DOWN:
            let indexMD = action.widgetOrder;
            let upperD
            let lowerD
            let widgetMD = state.widgets
            widgetMD.forEach((widget) =>
            {
                if (widget.widgetOrder === indexMD + 1) {
                    widget.widgetOrder = widget.widgetOrder - 1;
                    upperD = widget;

                }
                else if(widget.widgetOrder === indexMD){
                    widget.widgetOrder = widget.widgetOrder + 1;
                    lowerD = widget;
                }

            });
            let upperIndexD = widgetMD.indexOf(upperD);
            let lowerIndexD = widgetMD.indexOf(lowerD);
            widgetMD[upperIndexD] = lowerD;
            widgetMD[lowerIndexD] = upperD;
            let newStateD = {
                widgets: widgetMD,
                preview: state.preview
            };
            return JSON.parse(JSON.stringify(newStateD));

        case constants.FIND_ALL_WIDGETS:
            state = Object.assign({}, state);
            state.widgets = action.widgets;
            return state;

        case constants.ADD_WIDGET:
            let index = 0;
            if (state.widgets.length > 0){
                index = state.widgets[state.widgets.length - 1].widgetOrder + 1;
            }
            else{
                index = 0;
            }

            let widgets = [
            ...state.widgets,
            {
                lesson: action.lesson,
                text: 'New Widget',
                widgetOrder: index + 1,
                width: '200',
                height: '200',
                style: 'default',
                className: 'heading',
                name: 'New Widget',
                size: 1,
                listType: 'ordered',
                listItems: '',
                href:''

            }];
            widgets = fixWidgetsOrder(widgets);
            return{

                preview: state.preview,
                widgets:  widgets};

        case constants.SAVE:
            widgetService.saveAllWidget(state.widgets,action.lessonId).then(() =>{
                return state;
            }, (error) => {return state;});
            return state;
        case constants.PREVIEW:
            return {
                widgets: state.widgets,
                preview: !state.preview
            };
        case constants.DELETE_WIDGET:
            let widgetD = state.widgets.filter(widget => (
                widget.widgetOrder !== action.widgetOrder
            ));
            widgetD = fixWidgetsOrder(widgetD);
            return{
                widgets: widgetD,
                preview: state.preview
            };

        case constants.SELECT_WIDGET_TYPE:

            return {
                widgets: state.widgets.filter((widget) => {
                    if(widget.widgetOrder === action.widgetOrder) {
                        widget.className = action.widgetType
                    }
                    return true;
                }),
                preview: state.preview
            };

        default:
            return state

    }
};