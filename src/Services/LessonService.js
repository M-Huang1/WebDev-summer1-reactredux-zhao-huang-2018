let _singleton = Symbol();

const ADDRESS = 'https://webdev-zhao-huang-summer2018.herokuapp.com';
const LESSON_API_URL =
    'https://webdev-zhao-huang-summer2018.herokuapp.com/api/lesson';

class LessonService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }
    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new LessonService(_singleton);
        return this[_singleton]
    }
    //Finds all Lessons
    findAllLessons() {
        return fetch(LESSON_API_URL)
            .then(function(response){
                return response.json();
            });
    }

    //Creates a Lesson
    createLesson(lesson, courseId, moduleId) {
        return fetch(ADDRESS+'/api/course/' + courseId +'/module/' + moduleId + '/lesson', {
            body: JSON.stringify(lesson),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(function (response) {
            return response.json();
        })
    }

    //Finds all lessons for a module
    findAllLessonForModule(courseId, moduleId) {
        return fetch(ADDRESS+'/api/course/' + courseId +'/module/' + moduleId + '/lesson')
            .then(function(response){
                return response.json();
            });
    }
    //Deletes a module
    deleteLesson(id){
        return fetch(LESSON_API_URL + "/" + id, {
            method: 'DELETE'
        }).then(function (response) {
            return response.json();
        })
    }

    findLessonById(id){
        return fetch(LESSON_API_URL + "/" + id)
            .then(function (response) {
                return response.json();
            })
    }

}
export default LessonService;