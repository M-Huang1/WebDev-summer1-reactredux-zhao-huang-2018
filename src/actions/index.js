import * as constants from "../constants/index";
import WidgetsService from "../Services/WidgetsService";

let widgetService = WidgetsService.instance;
export const findAllWidgets = dispatch => {
        widgetService.findAllWidgets()
        .then(widgets => dispatch({
            type: constants.FIND_ALL_WIDGETS,
            widgets: widgets }))
};

