import * as constants from "../constants/index";
import WidgetsService from "../Services/WidgetsService";

let widgetService = WidgetsService.instance;

export const findAllWidgetsForLesson = (dispatch, moduleId, courseId, lessonId) => {
        widgetService.findAllWidgetForLesson(courseId,moduleId,lessonId)
        .then(widgets => dispatch({
            type: constants.FIND_ALL_WIDGETS,
            widgets: widgets }))
};

export const addWidget = (dispatch, lesson) => (
    dispatch({type: constants.ADD_WIDGET,
              lesson:lesson})
);


export const save = dispatch => (
    dispatch({type: constants.SAVE})
);
