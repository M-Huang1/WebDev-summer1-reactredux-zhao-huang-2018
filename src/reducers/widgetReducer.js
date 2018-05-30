import * as constants from "../constants/index"

export const widgetReducer = (state = {widgets: [], preview: false}, action) => {
    switch(action.type){
        case constants.FIND_ALL_WIDGETS:
            state = Object.assign({}, state);
            state.widgets = action.widgets;
            return state;

        case constants.ADD_WIDGET:
            let index = 0;
            if (state.widgets.length > 0){
                index = state.widgets.get(state.widgets.length - 1).order + 1;
            }
            else{
                index = 0;
            }
            return {
                widgets: [
                    ...state.widgets,
                    {
                        lesson: action.lesson,
                        text: 'New Widget',
                        order: index + 1,
                        width: '200',
                        height: '200',
                        style: 'default',
                        className: 'heading',
                        name: 'New Widget',
                        size: 1,
                        listType: 'ordered'

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