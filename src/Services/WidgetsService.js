let _singleton = Symbol();

const ADDRESS = 'http://localhost:8080';
const WIDGET_API_URL =
    'http://localhost:8080/api/widget';

class WidgetsService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }
    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new WidgetsService(_singleton);
        return this[_singleton]
    }
    //Finds all Widgets
    findAllWidgets() {
        return fetch(WIDGET_API_URL)
            .then(function(response){
                return response.json();
            });
    }

    saveAllWidget(widgets){
        return fetch(WIDGET_API_URL + '/save', {
            body: JSON.stringify(widgets),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(function (response) {
            return response.json();
        })

    }

    //Creates a Widget
    createWidget(widget, courseId, moduleId, lessonId) {
        return fetch(ADDRESS+'/api/course/' + courseId +'/module/' +  moduleId + '/lesson/' + lessonId + '/widget', {
            body: JSON.stringify(widget),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(function (response) {
            return response.json();
        })
    }

    //Finds all widgets for a lesson
    findAllWidgetForLesson(courseId, moduleId, lessonId) {
        return fetch(ADDRESS+'/api/course/' + courseId +'/module/' + moduleId + '/lesson/' + lessonId + '/widget')
            .then(function(response){
                return response.json();
            });
    }
    //Deletes a widget
    deleteWidget(id){
        return fetch(WIDGET_API_URL + "/" + id, {
            method: 'DELETE'
        }).then(function (response) {
            return response.json();
        })
    }

    findWidgetById(id){
        return fetch(WIDGET_API_URL + "/" + id)
            .then(function (response) {
                return response.json();
            })
    }

}
export default WidgetsService;