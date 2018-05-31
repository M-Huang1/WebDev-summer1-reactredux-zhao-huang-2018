import * as constants from "../constants/index";
import WidgetsService from "../Services/WidgetsService";

let widgetService = WidgetsService.instance;

export const findAllWidgetsForLesson = (dispatch, courseId,moduleId, lessonId) => {
        widgetService.findAllWidgetForLesson(courseId,moduleId,lessonId)
        .then(widgets => dispatch({
            type: constants.FIND_ALL_WIDGETS,
            widgets: widgets }))
};

export const addWidget = (dispatch, lesson) => (
    dispatch({type: constants.ADD_WIDGET,
              lesson:lesson})
);


export const save = (dispatch, lessonId) => (
    dispatch({type: constants.SAVE,
                lessonId: lessonId})
);
export const preview = (dispatch) =>{
    dispatch({type: constants.PREVIEW})
};

export const deleteWidget = (dispatch, widgetOrder) =>{
    dispatch({type: constants.DELETE_WIDGET,
                widgetOrder});
};

export const selectWidgetType = (dispatch,widgetOrder, widgetType) => (
    dispatch({type: constants.SELECT_WIDGET_TYPE,
        widgetOrder: widgetOrder,
        widgetType: widgetType})
);

export const widgetUp = (dispatch,widgetOrder) => (
    dispatch({type: constants.MOVE_UP,
        widgetOrder: widgetOrder})
);

export const widgetDown = (dispatch,widgetOrder) => (
    dispatch({type: constants.MOVE_DOWN,
        widgetOrder: widgetOrder})
);