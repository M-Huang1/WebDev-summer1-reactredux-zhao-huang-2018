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

export const textChanged = (dispatch, widgetOrder, newText) => (
    dispatch({
        type: constants.TEXT_CHANGED,
        widgetOrder: widgetOrder,
        text: newText})
);

export const headingSizeChanged = (dispatch, widgetOrder, newSize) => (
    dispatch({
        type: constants.HEADING_SIZE_CHANGED,
        widgetOrder: widgetOrder,
        size: newSize})
);

export const listTypeChanged = (dispatch, widgetOrder, newType) => (
    dispatch({
        type: constants.LIST_TYPE_CHANGED,
        widgetOrder: widgetOrder,
        listType: newType})
);

export const hrefChanged=(dispatch, widgetOrder, href) =>(
    dispatch({
        type: constants.HREF_CHANGED,
        widgetOrder: widgetOrder,
        href: href
    })
);
export const srcChanged=(dispatch, widgetOrder, src) =>(
    dispatch({
        type: constants.SRC_CHANGED,
        widgetOrder: widgetOrder,
        src: src
    })
);
export const widthChanged=(dispatch, widgetOrder, width) =>(
    dispatch({
        type: constants.WIDTH_CHANGED,
        widgetOrder: widgetOrder,
        width: width
    })
);
export const heightChanged=(dispatch, widgetOrder, height) =>(
    dispatch({
        type: constants.HEIGHT_CHANGED,
        widgetOrder: widgetOrder,
        height: height
    })
);

export const nameChanged=(dispatch, widgetOrder,name) =>(
    dispatch({
        type: constants.NAME_CHANGED,
        widgetOrder: widgetOrder,
        name: name
    })
);

