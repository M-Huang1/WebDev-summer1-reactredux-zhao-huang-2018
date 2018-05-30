import * as constants from "../constants/index"

export const widgetReducer = (state = {widgets: [], preview: false}, action) => {
    switch(action.type){
        case constants.FIND_ALL_WIDGETS:
            state = Object.assign({}, state);
            state.widgets = action.widgets;
            return state;

        case constants.ADD_WIDGET:
            return {
                widgets: [
                    ...state.widgets,
                    {
                        id: state.widgets.length + 1,
                        text: 'New Widget',
                        order: state.widgets.length + 1,
                        width: '200',
                        height: '200',
                        style: 'default',
                        className:'heading',
                        name: 'Widget' + state.widgets.length + 1,
                        size:1
                    }
                ]
            };
        case constants.SAVE:
            fetch('http://localhost:8080/api/widget/save', {
                method: 'post',
                body: JSON.stringify(state.widgets),
                headers: {
                    'content-type': 'application/json'
                }
            });
            return state;
        default:
            return state

    }
};